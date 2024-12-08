import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import authReducer from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice";
import categoryReducer from "./Slice/categorySlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bannerReducer from "./Slice/bannerSlice";
import brandReducer from "./Slice/brandSlice";
import productReducer from "./Slice/productSlice";
import homebannerReducer from "./Slice/homeBannerSlice";
import registerSlice from "./Slice/registerSlice"
import unitSlice from "./Slice/unitSlice"
import suitableForSlice from "./Slice/suitableForSlice"
const persistConfig = {
  key: "auth",
  storage,
  version: 1,
};
const persistConfig2 = {
  key: "register",
  storage,
  version: 1,
}
const presistedAuthReducer = persistReducer(persistConfig, authReducer);
const presistedRegisterReducer = persistReducer(persistConfig2, registerSlice)

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: presistedAuthReducer,
    cart: cartReducer,
    banner: bannerReducer,
    category: categoryReducer,
    brands: brandReducer,
    product: productReducer,
    homebanner: homebannerReducer,
    register:presistedRegisterReducer,
    unit:unitSlice,
    suitableFor:suitableForSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
