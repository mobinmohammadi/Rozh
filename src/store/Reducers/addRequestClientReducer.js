import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_request_client = createAsyncThunk(
  "client/add_request_client",
  async (info, { rejectWithValue, fulfillWithValue }) => {
    try {
      console.log("info ===> ", info);

      const { data } = await api.post("/add-requset-client", info, {
        withCredentials: true,
      });

      console.log("data ==> ", data);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);


export const requestClient = createSlice({
  name: "requestClient",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
  },
  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_request_client.pending, (state) => {
        state.loader = true;
      })
      .addCase(add_request_client.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        console.log(payload);
      })
      .addCase(add_request_client.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        console.log(payload);
      })

  },
});

export const { messageClear } = requestClient.actions;
export default requestClient.reducer;
