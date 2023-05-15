import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const questionSubjectSlice = createSlice({

    name: "questionSubject",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,

    },
    reducers: {
        //Que-subject
        queSubPending: (state) => {
            state.loading = true;
        },
        queSubSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            // state.token = payload.token;

            state.error = null;

            //localStorage.setItem("Token", state.token)
        },
        queSubFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },

})


//Set-info
export const { queSubPending, queSubSuccess, queSubFailure } = questionSubjectSlice.actions;

export const questionsub = (token) => async (dispatch) => {

    dispatch(queSubPending());

    try {
        const { data } = await axios.post(`${url}/getquestionsubject`, token);

        if (data.status === 1)
            dispatch(queSubSuccess(data));
        else
            dispatch(queSubFailure(data));
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(queSubFailure(error.response.data));
    }
};

export default questionSubjectSlice.reducer;