import { Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from '../theme';

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorRed }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null, // Hide from tab bar
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            {
              return (
                <Entypo
                  name="menu"
                  size={size}
                  color={color}
                />
              );
            }
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return (
              <Entypo
                name="image"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="groceryList"
        options={{
          title: 'Shopping List',
          tabBarIcon: ({ color, size }) => {
            return (
              <Entypo
                name="list"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
