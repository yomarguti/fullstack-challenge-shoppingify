import { CATEGORIES_REPOSITORY } from '../constants';
import { Category } from './category.entity';

export const categoriesProviders = [
  {
    provide: CATEGORIES_REPOSITORY,
    useValue: Category,
  },
];
