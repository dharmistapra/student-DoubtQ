import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
const { createSlice } = require("@reduxjs/toolkit");

const url = process.env.REACT_APP_API_BASE_URL;

const referralCashoutSlice = createSlice({
    name: "referralcomplete",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,
    },
    reducers: {
        //referFrnd
        referralcompletePending: (state) => {
            state.loading = true;
        },
        referralcompleteSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload.userId;
            // state.token = payload.token;
            state.status = 1;
            state.error = null;

            //localStorage.setItem("Token", state.token)
        },
        referralcompleteFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },
});

//referFrnd
export const {
    referralcompletePending,
    referralcompleteSuccess,
    referralcompleteFailure,
} = referralCashoutSlice.actions;

export const referralCashoutApi = (token) => async (dispatch) => {

    dispatch(referralcompletePending());
    try {
        const { data } = await axios.post(`${url}/student/referralcomplete`, token);

        if (data.status === 1) {
            dispatch(referralcompleteSuccess(data));
        } else {
            dispatch(referralcompleteFailure(data));
        }
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(referralcompleteFailure(error.response.data));
    }
};

export default referralCashoutSlice.reducer;
