import { ITEMS_REPOSITORY } from '../constants';
import { Item } from './item.entity';

export const itemsProviders = [
  {
    provide: ITEMS_REPOSITORY,
    useValue: Item,
  },
];
