import axios from 'axios';
import { handleTokenErrors } from "./handleTokenError";
const { createSlice } = require("@reduxjs/toolkit");

const url = process.env.REACT_APP_API_BASE_URL;

const registerQuestionSlice = createSlice({

    name: "registerask",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,
    },
    reducers: {

        //Set-info
        askQuePending: (state) => {
            state.loading = true;
        },
        askQueSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.token = payload.token;
            state.status = 1;
            state.error = null;

            localStorage.setItem("token", state.token)
        },
        askQueFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload.error;
        },
    },

})


//Set-info
export const { askQuePending, askQueSuccess, askQueFailure } = registerQuestionSlice.actions;

export const registeraskque = (formData) => async (dispatch) => {

    dispatch(askQuePending());
    try {

        const { data } = await axios.post(`${url}/student/registerquestion`, formData);

        if (data.status === 1)
            dispatch(askQueSuccess(data));
        else
            dispatch(askQueFailure(data));
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(askQueFailure(error.response.data));
    }
};

export default registerQuestionSlice.reducer;