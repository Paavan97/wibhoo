import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import Authslice from "../feature/Authslice";

export const store = configureStore({
    reducer: {
        AuthSlice: Authslice
    },
  });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
