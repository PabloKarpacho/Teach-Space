import { configureStore } from "@reduxjs/toolkit";
import { setDevice, setTheme } from "./features/device";
import deviceReducer from "./features/device";

export const store = configureStore({
  reducer: {
    device: deviceReducer,
  },
});

// Типы для TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const selectCount = (state: RootState) => state.counter.value
export default store;
