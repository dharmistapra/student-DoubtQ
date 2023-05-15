import { createSlice } from "@reduxjs/toolkit";
import { handleTokenErrors } from "./handleTokenError";
import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

const queTypePriceSlice = createSlice({
  name: "queTypeprice",
  initialState: {
    isLoading: false,
    isError: null,
    isAuthentication: null,
    user: null,
    status: true,
  },
  reducers: {
    queTypepricePending: (state, action) => {
      state.isLoading = true;
    },
    queTypepriceSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.status = 1;
      state.isError = null;

      //localstorage.setItem("token", state.token);
    },
    queTypepriceFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = false;
      state.user = null;
      state.status = 0;
      state.isError = action.payload;
    },
  },
});

export const { queTypepricePending, queTypepriceSuccess, queTypepriceFailure } = queTypePriceSlice.actions;

export const queTypepriceApi = (token) => async (dispatch) => {
  dispatch(queTypepricePending());
  try {
    const { data } = await axios.get(`${url}/student/getquestionprice`, token);

    if (data.status === 1) {
      dispatch(queTypepriceSuccess(data));
    } else {
      dispatch(queTypepriceFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(queTypepriceFailure(error.response.data));
  }
};

export default queTypePriceSlice.reducer;