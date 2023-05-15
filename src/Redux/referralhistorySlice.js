import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const referralhistorySlice = createSlice({
  name: "friendReferral",
  initialState: {
    isAuthentication: false,
    user: null,
    isError: null,
    isLoading: false,
    status: true,
  },
  reducers: {
    referralhistoryPending: (state, action) => {
      state.isLoading = true;
    },
    referralhistorySuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = true;
      state.user = action.payload;
      state.status = 1;
      state.isError = null;
    },
    referralhistoryFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = false;
      state.user = null;
      state.status = 0;
      state.isError = action.payload;
    },
  },
});

export const { referralhistoryPending,referralhistorySuccess,referralhistoryFailure } = referralhistorySlice.actions;

export const referralhistoryApi = (token) => async (dispatch) => {
  dispatch(referralhistoryPending());
  try {
    const { data } = await axios.post(`${url}/student/referraldashboard`, { token } );

    if (data.status === 1) {
      dispatch(referralhistorySuccess(data));
    } else {
      dispatch(referralhistoryFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(referralhistoryFailure(error.response));
  }
};

export default referralhistorySlice.reducer;
