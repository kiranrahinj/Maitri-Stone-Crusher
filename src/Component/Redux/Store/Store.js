// import { configureStore } from "@reduxjs/toolkit";
// import AllOrderReducer from "../Slices/AllOrdersSlice"
// import AuthReducer from "../Slices/AuthSlice"
// import Customer from "../Slices/AllCustomerSlice"
// import Expenses from "../Slices/ExpenseSlice"

// export const Store=configureStore({
//     reducer:{
//         orders:AllOrderReducer,
//         auth:AuthReducer,
//         customer:Customer,
//         expense:Expenses
//     }
// })
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import AllOrderReducer from "../Slices/AllOrdersSlice";
import AuthReducer from "../Slices/AuthSlice";
import Customer from "../Slices/AllCustomerSlice";
import Expenses from "../Slices/ExpenseSlice";
import DateSlice from "../Slices/DateSlice"

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage, // You can also use sessionStorage here if desired
};

// Root reducer configuration
const rootReducer = combineReducers({
    orders: AllOrderReducer,
    auth: AuthReducer,
    customer: Customer,
    expense: Expenses,
    dates:DateSlice,
  });

// Wrap the rootReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer, // Use persisted reducer
  // Optional: middleware could be modified if needed, but redux-persist works out of the box with Redux Toolkit
});

export const persistor = persistStore(Store); // Persistor to control store persistence
