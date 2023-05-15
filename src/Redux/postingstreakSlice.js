import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const postingstreakSlice = createSlice({
  name: "postingstreak",
  initialState: {
    isAuthentication: false,
    user: null,
    isError: null,
    isLoading: false,
    status: true,
  },
  reducers: {
    postingstreakPending: (state, action) => {
      state.isLoading = true;
    },
    postingstreakSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = true;
      state.user = action.payload;
      state.status = 1;
      state.isError = null;
    },
    postingstreakFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = false;
      state.user = null;
      state.isError = action.payload;
    },
  },
});

export const { postingstreakPending,postingstreakSuccess,postingstreakFailure } = postingstreakSlice.actions;

export const postingStreakApi = (token) => async (dispatch) => {

  dispatch(postingstreakPending());
  try {
    const { data } = await axios.post(`${url}/student/postingstreak`,{ token });
 
    if (data.status === 1) {
      dispatch(postingstreakSuccess(data));
    } else {
      dispatch(postingstreakFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(postingstreakFailure(error.response.data));
  }
};

export default postingstreakSlice.reducer;
