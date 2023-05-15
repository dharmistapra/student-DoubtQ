import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const dashboardCloseSlice = createSlice({
  name: "dashboardClose",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //Close Que
    CloseQueClose: (state) => {
      state.loading = true;
    },
    CloseQueSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;
    },
    CloseQueFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
    },
  },
});

//Close Que
export const { CloseQueClose, CloseQueSuccess, CloseQueFailure } = dashboardCloseSlice.actions;

export const Close = (token, limit = 5, skip = 0) => async (dispatch) => {

  dispatch(CloseQueClose());
  try {
    const { data } = await axios.post(`${url}/student/closedquestion?limit=${limit}&skip=${skip}`, { token });

    if (data.status === 1) {
      dispatch(CloseQueSuccess(data));
    } else {
      dispatch(CloseQueFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(CloseQueFailure(error.response.data));
  }
};

export default dashboardCloseSlice.reducer;
