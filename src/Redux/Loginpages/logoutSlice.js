import axios from 'axios';

const { createSlice } = require("@reduxjs/toolkit");

const url = "https://vaidik-backend.onrender.com";

const logoutSlice = createSlice({

    name: "logouts",
    initialState: {
        isAuthenticated: false,
        user: null,
        error: null,
        loading: false,
    },
    reducers: {

        //logOut
        logOutPending: (state) => {
            state.loading = true;
        },
        logOutSuccess: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = payload;
            // state.token = payload.token;

            state.error = null;

            //localStorage.setItem("Token", state.token)
        },
        logOutFailure: (state, { payload }) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.error = payload;
        },
        resetLogoutData: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
            state.loading = false;
            state.token = null;
        }
    },

})


//Set-info
export const { logOutPending, logOutSuccess, logOutFailure, resetLogoutData } = logoutSlice.actions;

export const logout = (token) => async (dispatch) => {
    
    dispatch(logOutPending());
    try {
        const { data } = await axios.post(`${url}/student/logout`, { token }); 
        if (data.status === 1) {

            dispatch(logOutSuccess(data));
        } else {
            dispatch(logOutFailure(data));
        }
    } catch (error) {
        dispatch(logOutFailure(error.response.data));
    }
};

export default logoutSlice.reducer;