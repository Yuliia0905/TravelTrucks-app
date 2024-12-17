import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const settingsConfig = {
//   key: "campers",
//   storage,
//   whitelist: ["campers"],
// };

// const persistConfig = {
//   key: "filters",
//   storage,
//   whitelist: ["filters"],
// };

export const store = configureStore({
  reducer: {
    // campers: persistReducer(persistConfig, campersReducer),
    // filters: persistReducer(settingsConfig, filtersReducer),
    // auth: persistReducer(authConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
