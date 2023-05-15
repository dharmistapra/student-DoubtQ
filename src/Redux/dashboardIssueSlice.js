import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const dashboardIssueSlice = createSlice({

    name: "dashboardIssue",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true
    },
    reducers: {
        //Issue Que
        IssueQueClose: (state) => {
            state.loading = true;
        },
        IssueQueSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            // state.token = payload.token;

            state.error = null;

            //localStorage.setItem("Token", state.token)
        },
        IssueQueFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },

})

//Close Que
export const { IssueQueClose, IssueQueSuccess, IssueQueFailure } = dashboardIssueSlice.actions;

export const Issue = (token, limit = 5, skip = 0) => async (dispatch) => {

    dispatch(IssueQueClose());
    try {

        const { data } = await axios.post(`${url}/student/issuequestion?limit=${limit}&skip=${skip}`, { token });
        if (data.status === 1)
            dispatch(IssueQueSuccess(data));
        else
            dispatch(IssueQueFailure(data));
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(IssueQueFailure(error.response.data));
    }
};

export default dashboardIssueSlice.reducer;