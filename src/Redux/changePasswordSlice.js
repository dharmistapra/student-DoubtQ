import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const changePasswordSlice = createSlice({

    name: "changepassword",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
        status: true,

    },
    reducers: {
        //Set-info
        setInfoPending: (state) => {
            state.loading = true;
        },
        setInfoSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            state.status = 1;
            // state.token = payload.token;

            state.error = null;

            //localStorage.setItem("Token", state.token)
        },
        setInfoFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.status = 0;
            state.error = payload;
        },
    },

})


//Set-info
export const { setInfoPending, setInfoSuccess, setInfoFailure } = changePasswordSlice.actions;

export const changePassword = (token) => async (dispatch) => {

    dispatch(setInfoPending());

    try {
        const { data } = await axios.post(`${url}/student/changepassword`, token);
        if (data.status === 1)
            dispatch(setInfoSuccess(data));
        else
            dispatch(setInfoFailure(data));
    } catch (error) {
        handleTokenErrors(error, dispatch);
        dispatch(setInfoFailure(error.response.data));
    }
};

export default changePasswordSlice.reducer;