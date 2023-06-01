import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import { StoreTypes } from 'types';

export const useAppDispatch: () => StoreTypes.AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<StoreTypes.RootState> =
  useSelector;
