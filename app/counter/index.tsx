import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { theme } from '../../theme';
import { registerPushNotificationsAsync } from '../../utils/pushNotifications';

export default function CounterScreen() {
  const handleRequestPermission = async () => {
    const result = await registerPushNotificationsAsync();
    console.log(result);
  };

  const scheduleNotification = async () => {
    const result = await registerPushNotificationsAsync();
    if (result === 'granted') {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Hi! Quick notification from the Taskly app',
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5,
        },
      });
    } else {
      return null;
    }
  };

  const handleOnPress = () => {
    handleRequestPermission();
    scheduleNotification();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOnPress}
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Schedule notification</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: theme.colorBlack,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: theme.colorWhite,
    letterSpacing: 1,
  },
});
