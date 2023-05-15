import { createSlice } from "@reduxjs/toolkit";
import { handleTokenErrors } from "./handleTokenError";
import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

const dashboardOpenSlice = createSlice({
  name: "dashboardOpen",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //Open Que
    OpenQueOpen: (state) => {
      state.loading = true;
    },
    OpenQueSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;
    },
    OpenQueFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//Open Que
export const { OpenQueOpen, OpenQueSuccess, OpenQueFailure } = dashboardOpenSlice.actions;

export const Open = (token, limit = 5, skip = 0) => async (dispatch) => {

  dispatch(OpenQueOpen());
  try {
    const { data } = await axios.post(`${url}/student/openquestion?limit=${limit}&skip=${skip}`, { token });
    
    if (data.status === 1) {
      dispatch(OpenQueSuccess(data));
    } else {
      dispatch(OpenQueFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(OpenQueFailure(error.response.data));
  }
};

export default dashboardOpenSlice.reducer;
