import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

interface LeadsState {
  loading: boolean;
  success: boolean;
  error:   string | null;
}

const initialState: LeadsState = { loading: false, success: false, error: null };

export interface SubmitLeadPayload {
  name:     string;
  email:    string;
  company?: string;
  service:  string;
  budget?:  string;
  message:  string;
  ref_code?: string | null;
}

export const submitLead = createAsyncThunk(
  "leads/submit",
  async (payload: SubmitLeadPayload, { rejectWithValue }) => {
    const res  = await fetch(`${API}/api/leads`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });
    const data = await res.json();
    if (!res.ok) return rejectWithValue(data.error ?? "Failed to submit");
    return data;
  }
);

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    resetLead: (state) => { state.success = false; state.error = null; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitLead.pending,   (state) => { state.loading = true; state.error = null; state.success = false; })
      .addCase(submitLead.fulfilled, (state) => { state.loading = false; state.success = true; })
      .addCase(submitLead.rejected,  (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error   = action.payload as string;
      });
  },
});

export const { resetLead } = leadsSlice.actions;
export default leadsSlice.reducer;
