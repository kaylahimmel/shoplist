import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorRed }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Grocery List",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="list" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            {
              return <Entypo name="time-slot" size={size} color={color} />;
            }
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="light-bulb" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
