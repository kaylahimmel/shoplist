import { TouchableOpacity, View, Text, Alert, Pressable } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from '../theme';
import { styles } from './ShoppingListItem.styles';

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

export const ShoppingListItem = ({
  name,
  isCompleted,
  onToggleComplete,
  onDelete,
}: ShoppingListItemProps) => {
  // Delete button
  const handleDelete = () => {
    Alert.alert(`Are you sure you want to delete ${name}?`, '', [
      {
        text: 'Yes',
        onPress: () => onDelete(),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  // list item
  return (
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
    >
      <View style={styles.row}>
        <Entypo
          name={isCompleted ? 'check' : 'circle'}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorGreen}
        />
        <Text
          numberOfLines={1}
          style={[
            styles.itemText,
            isCompleted ? styles.itemTextCompleted : undefined,
          ]}
        >
          {name}
        </Text>
      </View>
      <TouchableOpacity
        hitSlop={20}
        onPress={handleDelete}
      >
        <Entypo
          name="circle-with-cross"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </Pressable>
  );
};
