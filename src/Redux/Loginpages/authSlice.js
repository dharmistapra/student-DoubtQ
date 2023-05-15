import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const url = process.env.REACT_APP_API_BASE_URL;
// const url = "http://10.10.10.29:5000";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isAuthenticatedStatus: 2,
    user: null,
    error: null,
    status:true,
    loading: false,
  },
  reducers: {
    signInPending: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isAuthenticatedStatus = 1;
      state.status = 1;
      state.user = payload.info;
      state.token = payload.token;

      state.error = null;

      localStorage.setItem("token", state.token);
    },
    signInFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.isAuthenticatedStatus = 0;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
    // Google Login
    signInGooglePending: (state) => {
      state.loading = true;
    },
    signInGoogleSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.status = 1;
      state.user = payload.info._id;

      state.token = payload.token;

      state.error = null;

      localStorage.setItem("token", state.token);
      // localStorage.setItem("id", state.user);
    },
    signInGoogleFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
    resetSignInData: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      state.token = null;
    },
  },
});

//Sign-In
export const { signInPending, signInSuccess, signInFailure, signInGooglePending, signInGoogleSuccess, signInGoogleFailure, resetSignInData,} = authSlice.actions;

export const signIn = (formData) => async (dispatch) => {

  dispatch(signInPending());
  try {
    const { data } = await axios.post(`${url}/student/login/email`, formData);

    if (data.status === 1) {
      dispatch(signInSuccess(data));
    }
    else {
    dispatch(signInFailure(data))
    }
  } catch (error) {
    dispatch(signInFailure(error.response.data));
  }
};

export const signInGoogle = (formData) => async (dispatch) => {

  dispatch(signInGooglePending());
  try {
    const { data } = await axios.post(`${url}/student/login/google`, formData);

    if (data.status === 1) {
      dispatch(signInGoogleSuccess(data));
    } else {
      dispatch(signInGoogleFailure(data));
    }
  } catch (error) {
    dispatch(signInGoogleFailure(error.response.data));
  }
};

export default authSlice.reducer;
