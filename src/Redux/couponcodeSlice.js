import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const couponcodeSlice = createSlice({
    name: "couponcode",
    initialState: {
        status: true,
        isLoading: false,
        isError: null,
        isAuthentication: false,
        user: null,
        discount: 0,
        couponCode: null,
        totalAmount: 0,
    },
    reducers: {
        applyCouponCodePending: (state) => {
            state.isLoading = true;
            state.isError = null;
        },
        applyCouponCodeSuccess: (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.couponCode = action.payload.couponCode;
            state.total = action.payload.total;
            state.success = true;
            state.isAuthentication = true;
            //   Calculate discount and update total
            const discount = action.payload.discount;
            if (discount) {
                const discountAmount = state.total * (discount / 100);
                state.total -= discountAmount;
                state.bonus = discountAmount;
            }
        },

        applyCouponCodeFailure: (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
            state.success = false;
        },
    },
});

export const {
    applyCouponCodePending,
    applyCouponCodeSuccess,
    applyCouponCodeFailure,
    setCouponCode,
} = couponcodeSlice.actions;

export const applyCouponCodeApi = (token) => async (dispatch) => {

    dispatch(applyCouponCodePending());
    try {
        const response = await axios.post(`${url}/student/couponcode`, token);
        const { data } = response;
                 
        if (data.status === 1) {
            dispatch(applyCouponCodeSuccess(data));
        } else {
            dispatch(applyCouponCodeFailure(data));
        }
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(applyCouponCodeFailure(error.response.data));
    }
};

export default couponcodeSlice.reducer;
