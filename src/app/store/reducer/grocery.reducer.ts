import { createReducer } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

const initialState: Grocery[] = [
  {
    id: 1,
    name: 'Apple',
    type: 'Fruits',
  },
  {
    id: 2,
    name: 'banana',
    type: 'Fruits',
  },
  {
    id: 3,
    name: 'grapes',
    type: 'Fruits',
  },
  {
    id: 4,
    name: 'chips',
    type: 'Snacks',
  },
];

export const groceryReducer = createReducer(initialState);
