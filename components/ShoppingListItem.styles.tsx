import { theme } from '../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  itemContainer: {
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderBottomColor: theme.colorGreenDark,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '400',
    flex: 1,
  },
  completedContainer: {
    backgroundColor: theme.colorGreyLight,
    borderBottomColor: theme.colorGreyLight,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    textDecorationColor: theme.colorGrey,
    color: theme.colorGrey,
  },
});
