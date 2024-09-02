import { TouchableOpacity, View, Text, Alert, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "../theme";

type ShoppingListItemProps = {
  name: string;
  isCompleted?: boolean;
};

export const ShoppingListItem = ({
  name,
  isCompleted,
}: ShoppingListItemProps) => {
  const handleDelete = () => {
    // Delete button
    Alert.alert(`Are you sure you want to delete ${name}?`, "", [
      {
        text: "Yes",
        onPress: () => console.log(`OK, deleting ${name}`),
        style: "destructive",
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);

    console.log("Item deleted!");
  };

  // Check - Complete button
  const handleComplete = () => {
    console.log("Item checked off the list!");
  };

  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <TouchableOpacity onPress={handleComplete}>
        <Entypo
          name={isCompleted ? "check" : "circle"}
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorGreen}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={[
          styles.itemText,
          isCompleted ? styles.itemTextCompleted : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity onPress={handleDelete}>
        <Entypo
          name="circle-with-cross"
          size={24}
          color={isCompleted ? theme.colorGrey : theme.colorRed}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: theme.colorGreenDark,
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorGreyLight,
    borderBottomColor: theme.colorGreyLight,
  },
  itemText: {
    fontSize: 20,
    fontWeight: "400",
    flex: 1,
  },
  itemTextCompleted: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
});
