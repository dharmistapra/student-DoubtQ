import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //allQue
    allQuePending: (state) => {
      state.loading = true;
    },
    allQueSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;
    },
    allQueFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//allQue
export const { allQuePending,allQueSuccess,allQueFailure } = dashboardSlice.actions;

export const dashboards = (token, limit = 5, skip = 0) => async (dispatch) => {
  
    dispatch(allQuePending());
    try {
      const { data } = await axios.post(`${url}/student/questions?limit=${limit}&skip=${skip}`, { token });

      if (data.status === 1) {
        dispatch(allQueSuccess(data));
      } else {
        dispatch(allQueFailure(data));
      }
    } catch (error) {
      handleTokenErrors(error, dispatch);
      dispatch(allQueFailure(error.response.data));
    }
  };

export default dashboardSlice.reducer;
