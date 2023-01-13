import { TRootState } from "../store/types";

export const ingredientsSelector = (store: TRootState) => store.ingredients;