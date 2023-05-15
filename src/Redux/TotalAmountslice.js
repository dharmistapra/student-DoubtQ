import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const totalAmountslice = createSlice({
  name: "data",
  initialState: {
    price: [],
    bonus: 0,
    total: 0,
    success: false,
    coupenCode: null,
    status: true,
    isLoading: false,
    isError: null,
    isAuthentication: false,
    user: null,

  },
  reducers: {
    addPrice: (state, action) => {
      const price = action.payload;
      let coupon = state.coupon || 0;
      let bonus = 0;
      let total = 0;

      if (price === 50 || price === 250) {
        bonus = price * 0.2;
        total = price + bonus;
      } else {
        bonus = null;
        total = price;
      }

      if (coupon === true) {
        total += coupon;
      }
      return {
        ...state,
        price: [...state.price, action.payload],
        bonus: bonus,
        // coupon: coupon,
        total: total,
      };
    },

    applyCoupon: (state, action) => {
      const { coupenCode, coupon } = action.payload;
      // total += coupon;
      if (coupenCode === "SGBXHEN") {
        return {
          ...state,
          success: true,
          coupenCode,
          coupon,
        };
      } else {
        return {
          ...state,
          success: false,
        };
      }
    },

    walletPending: (state, action) => {
      state.isLoading = true;
    },
    walletSuccess: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = true;
      state.user = action.payload;
      state.status = 1;
      state.isError = false;

    },
    walletFailure: (state, action) => {
      state.isLoading = false;
      state.isAuthentication = false;
      state.user = null;
      state.status = 0;
      state.isError = action.payload;
    },
  },
});

export const { addPrice, applyCoupon, walletPending, walletSuccess, walletFailure } = totalAmountslice.actions;

export const walletApi = (token) => async (dispatch) => {
  
  dispatch(walletPending());
  try {
    const { data } = await axios.post(`${url}/student/wallet`, { token });

    // JSON.stringify({ data });
    if (data.status === 1)
      dispatch(walletSuccess(data));
    else
      dispatch(walletFailure(data));
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(walletFailure(error.response.data));
  }
};
export default totalAmountslice.reducer;
