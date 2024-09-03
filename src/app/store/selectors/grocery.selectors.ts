import { Grocery } from '../../../models/grocery.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

// export const selectGroceries = (state: { groceries: Grocery[] }) => state.groceries;
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceriesByType = (type: string) =>
  createSelector(selectGroceries, (state) =>
    state.filter((item) => item.type === type)
  );
