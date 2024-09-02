import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "It will be gone for good!",
      [
        {
          text: "Yes",
          onPress: () => console.log("OK, deleting"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Coffee</Text>
        <TouchableOpacity style={styles.button} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomColor: theme.colorFuschia,
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemText: {
    fontSize: 20,
    fontWeight: "400",
  },
  button: {
    backgroundColor: theme.colorFuschia,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: theme.colorFuschia,
  },
  buttonText: {
    color: theme.colorWhite,
    textTransform: "uppercase",
    fontSize: 16,
  },
});
