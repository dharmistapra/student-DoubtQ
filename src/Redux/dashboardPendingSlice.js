import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";
 
const url = process.env.REACT_APP_API_BASE_URL;

const dashboardPendingSlice = createSlice({
  name: "dashboardpending",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //pending Que
    pendingQuePending: (state) => {
      state.loading = true;
    },
    pendingQueSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;
    },
    pendingQueFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
    },
  },
});

//pending Que
export const { pendingQuePending, pendingQueSuccess, pendingQueFailure } = dashboardPendingSlice.actions;

export const pending = (token, limit = 5, skip = 0) => async (dispatch) => {

  dispatch(pendingQuePending());
  try {
    const { data } = await axios.post(`${url}/student/pendingquestion?limit=${limit}&skip=${skip}`,{ token });

    if (data.status === 1) {
      dispatch(pendingQueSuccess(data));
    } else {
      dispatch(pendingQueFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(pendingQueFailure(error.response.data));
  }
};

export default dashboardPendingSlice.reducer;
