import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const createStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
  });

export const store = createStore();


export type RootState = ReturnType<typeof store.getState>;
/* from redux docs, we do not use them here, but I left them just in case */
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
