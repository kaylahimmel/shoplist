import { ShoppingListItemType } from "../types/shoppingList.types";

export function orderList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    const firstItem = item1.completedAtTimestamp;
    const secondItem = item2.completedAtTimestamp;

    if (firstItem && secondItem) {
      return secondItem - firstItem;
    }
    if (firstItem && !secondItem) {
      return 1;
    }
    if (!firstItem && secondItem) {
      return -1;
    }
    if (!firstItem && !secondItem) {
      return item2?.lastUpdatedTimestamp - item1?.lastUpdatedTimestamp
    }
    return 0;
  });
};