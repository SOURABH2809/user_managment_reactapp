import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/authSlice";
import { combineReducers } from "redux";

// Configuration for redux-persist to specify which data to persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUser", "users"],
};

const rootReducer = combineReducers({
  auth: authReducer,
});

// Wrap the root reducer with persistReducer to enable persistence
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store and apply the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor to control persistence operations like rehydration
const persistor = persistStore(store);
export { store, persistor };
