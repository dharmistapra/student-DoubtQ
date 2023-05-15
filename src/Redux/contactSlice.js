import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    isLoading: false,
    isError: null,
    isAuthentication: null,
    user: null,
    status: true,
  },
  reducers: {
    contactPending: (state, action) => {
      state.isLoading = true;
    },
    contactSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = true;
      state.user = action.payload;
      state.status = 1;
      state.isError = null;
    },
    contactFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = false;
      state.user = null;
      state.status = 0;
      state.isError = action.payload;
    },
  },
});

export const { contactPending, contactSuccess, contactFailure } = contactSlice.actions;

export const contactApi = (token) => async (dispatch) => {
  dispatch(contactPending());
  try {
    const { data } = await axios.post(`${url}/student/contact`, token);
     
    if (data.status === 1) {
      dispatch(contactSuccess(data));
    } else {
      dispatch(contactFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(contactFailure(error.response.data));
  }
};

export default contactSlice.reducer;
