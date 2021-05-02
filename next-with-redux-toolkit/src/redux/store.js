import { configureStore } from "@reduxjs/toolkit";

import demoSlice from "./slice/demoSlice";

export const store = configureStore({
  reducer: {
    demo: demoSlice,
  },
});
