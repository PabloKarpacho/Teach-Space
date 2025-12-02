import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type Theme = "dark" | "light";

type Device = "mobile" | "tablet" | "desktop";

interface DeviceSettings {
  theme: Theme;
  deviceType: Device;
}

const initialSettings: DeviceSettings = {
  theme: "dark",
  deviceType: "desktop",
};

export const deviceSettingsSlice = createSlice({
  name: "device",
  initialState: initialSettings,
  reducers: {
    setDevice: (state, action: PayloadAction<Device>) => {
      state.deviceType = action.payload;
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
  },
});

export const { setDevice, setTheme } = deviceSettingsSlice.actions;
export default deviceSettingsSlice.reducer;

export const selectDevice = (state: RootState) => state.device.deviceType;
export const selectTheme = (state: RootState) => state.device.theme;
