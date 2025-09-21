import { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  LayoutAnimation,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { theme } from '../theme';
import { ShoppingListItem } from '../components/ShoppingListItem';
import { ShoppingListItemType } from '../types/shoppingList.types';
import { orderList } from '../utils/orderList';
import { getFromStorage, setSaveToStorage } from '../utils/storage';

const storageKey = 'shopping-list';

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState<string>();
  const animateEaseIn = LayoutAnimation.configureNext(
    LayoutAnimation.Presets.easeInEaseOut
  );

  useEffect(() => {
    const fetchInitial = async () => {
      const data = await getFromStorage(storageKey);
      if (data) {
        animateEaseIn;
        setShoppingList(data);
      }
    };
    fetchInitial();
  }, []);

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        {
          id: new Date().toISOString(),
          name: value,
          lastUpdatedTimestamp: Date.now(),
        },
        ...shoppingList,
      ];
      animateEaseIn;
      setShoppingList(newShoppingList);
      setSaveToStorage(storageKey, shoppingList);
      setValue('');
    }
  };

  const handleDelete = (id: string) => {
    const newShoppingList = shoppingList.filter((item) => item.id !== id);
    setSaveToStorage(storageKey, shoppingList);
    animateEaseIn;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShoppingList(newShoppingList);
  };

  const handleToggleComplete = (id: string) => {
    const newShoppingList = shoppingList.map((item) => {
      if (item.id === id) {
        if (item.completedAtTimestamp) {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        } else {
          Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        }
        return {
          ...item,
          completedAtTimestamp: item.completedAtTimestamp
            ? undefined
            : Date.now(),
          lastUpdatedTimestamp: Date.now(),
        };
      } else {
        return item;
      }
    });
    setSaveToStorage(storageKey, newShoppingList);
    animateEaseIn;
    setShoppingList(newShoppingList);
  };

  return (
    <FlatList
      data={orderList(shoppingList)}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your list is currently empty</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder={'ex: bread'}
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          returnKeyType={'done'}
          onSubmitEditing={handleSubmit}
        />
      }
      renderItem={({ item }) => (
        <ShoppingListItem
          name={item.name}
          onDelete={() => handleDelete(item.id)}
          onToggleComplete={() => handleToggleComplete(item.id)}
          isCompleted={Boolean(item.completedAtTimestamp)}
        />
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingVertical: 12,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  textInput: {
    borderColor: theme.colorGreen,
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 20,
    marginBottom: 16,
    fontSize: 18,
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
});
