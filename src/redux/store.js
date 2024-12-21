import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { campersReducer } from "./campers/slice.js";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filters/slice.js";

const persistConfig = {
  key: "campers",
  storage,
  whitelist: ["campers"],
};

export const store = configureStore({
  reducer: {
    campers: persistReducer(persistConfig, campersReducer),
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      immutableCheck: false, // Вимкнення ImmutableStateInvariantMiddleware
    }),
});

export const persistor = persistStore(store);
