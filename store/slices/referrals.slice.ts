import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

interface DashboardData {
  referrer:    { id: number; name: string; email: string; code: string; clicks: number; payout_status: string; created_at: string };
  clicks:      number;
  leads:       number;
  conversions: number;
  earned:      number;
}

interface ReferralsState {
  code:           string | null;
  dashboard:      DashboardData | null;
  loading:        boolean;
  error:          string | null;
  payoutLoading:  boolean;
  payoutError:    string | null;
  payoutSuccess:  boolean;
}

const initialState: ReferralsState = { code: null, dashboard: null, loading: false, error: null, payoutLoading: false, payoutError: null, payoutSuccess: false };

export const signupReferrer = createAsyncThunk(
  "referrals/signup",
  async ({ name, email }: { name: string; email: string }, { rejectWithValue }) => {
    const res  = await fetch(`${API}/api/referrals`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ name, email }),
    });
    const data = await res.json();
    if (!res.ok) return rejectWithValue(data.error ?? "Signup failed");
    return data.code as string;
  }
);

export const fetchDashboard = createAsyncThunk(
  "referrals/dashboard",
  async (code: string, { rejectWithValue }) => {
    const res  = await fetch(`${API}/api/referrals/${code}/dashboard`);
    const data = await res.json();
    if (!res.ok) return rejectWithValue(data.error ?? "Not found");
    return data as DashboardData;
  }
);

export const trackClick = createAsyncThunk(
  "referrals/trackClick",
  async (code: string) => {
    await fetch(`${API}/api/referrals/${code}/click`, { method: "POST" });
  }
);

export const requestPayout = createAsyncThunk(
  "referrals/requestPayout",
  async ({ ref_code, amount, method }: { ref_code: string; amount: number; method: string }, { rejectWithValue }) => {
    const res  = await fetch(`${API}/api/payouts`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ ref_code, amount, method }),
    });
    const data = await res.json();
    if (!res.ok) return rejectWithValue(data.error ?? "Request failed");
    return data;
  }
);

const referralsSlice = createSlice({
  name: "referrals",
  initialState,
  reducers: {
    resetReferral:    (state) => { state.code = null; state.error = null; },
    resetPayoutState: (state) => { state.payoutLoading = false; state.payoutError = null; state.payoutSuccess = false; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupReferrer.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(signupReferrer.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.code    = action.payload;
      })
      .addCase(signupReferrer.rejected,  (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error   = action.payload as string;
      })
      .addCase(fetchDashboard.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(fetchDashboard.fulfilled, (state, action: PayloadAction<DashboardData>) => {
        state.loading   = false;
        state.dashboard = action.payload;
      })
      .addCase(fetchDashboard.rejected,  (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error   = action.payload as string;
      })
      .addCase(requestPayout.pending,   (state) => { state.payoutLoading = true; state.payoutError = null; state.payoutSuccess = false; })
      .addCase(requestPayout.fulfilled, (state) => { state.payoutLoading = false; state.payoutSuccess = true; })
      .addCase(requestPayout.rejected,  (state, action: PayloadAction<unknown>) => {
        state.payoutLoading = false;
        state.payoutError   = action.payload as string;
      });
  },
});

export const { resetReferral, resetPayoutState } = referralsSlice.actions;
export default referralsSlice.reducer;
