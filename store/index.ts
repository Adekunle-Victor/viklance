import { configureStore } from "@reduxjs/toolkit";
import leadsReducer     from "./slices/leads.slice";
import referralsReducer from "./slices/referrals.slice";

export const store = configureStore({
  reducer: {
    leads:     leadsReducer,
    referrals: referralsReducer,
  },
});

export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
