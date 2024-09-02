import { StyleSheet, View } from "react-native";
import { theme } from "../theme";
import { ShoppingListItem } from "../components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <ShoppingListItem name={"coffee"} />
      <ShoppingListItem name={"chamomile tea"} isCompleted />
      <ShoppingListItem name={"honey"} isCompleted />
      <ShoppingListItem name={"unsweetened almond milk"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
});
