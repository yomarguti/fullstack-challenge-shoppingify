import { SHOPPING_LIST_REPOSITORY } from '../constants';
import { ShoppingList } from './shopping-list.entity';

export const ShoppingListProviders = [
  {
    provide: SHOPPING_LIST_REPOSITORY,
    useValue: ShoppingList,
  },
];
