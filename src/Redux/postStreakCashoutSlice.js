import { createSlice } from "@reduxjs/toolkit";
import { handleTokenErrors } from "./handleTokenError";
import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

const postStreakCashoutSlice = createSlice({
    name: "postStreak",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,
    },
    reducers: {
        postStreakPending: (state) => {
            state.loading = true;
        },
        postStreakSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            state.error = null;
        },
        postStreakFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },
});

//referFrnd
export const { postStreakPending, postStreakSuccess, postStreakFailure } = postStreakCashoutSlice.actions;

export const postStreakCashoutApi = (token) => async (dispatch) => {

    dispatch(postStreakPending());
    try {
        const { data } = await axios.post(`${url}/student/poststreakcashout`, token);

        if (data.status === 1) {
            dispatch(postStreakSuccess(data));
        } else {
            dispatch(postStreakFailure(data));
        }
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(postStreakFailure(error.response.data));
    }
};

export default postStreakCashoutSlice.reducer;
