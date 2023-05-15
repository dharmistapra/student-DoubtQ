import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
const { createSlice } = require("@reduxjs/toolkit");

const url = process.env.REACT_APP_API_BASE_URL;

const referTofrndSlice = createSlice({
  name: "referTofrnd",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //referFrnd
    referFrndPending: (state) => {
      state.loading = true;
    },
    referFrndSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;
    },
    referFrndFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//referFrnd
export const { referFrndPending, referFrndSuccess, referFrndFailure } = referTofrndSlice.actions;

export const referTofrnds = (token) => async (dispatch) => {
  
  dispatch(referFrndPending());
  try {
    const { data } = await axios.post(`${url}/student/getinfo`, { token });

    if (data.status === 1) {
      dispatch(referFrndSuccess(data));
    } else {
      dispatch(referFrndFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(referFrndFailure(error.response.data));
  }
};

export default referTofrndSlice.reducer;
