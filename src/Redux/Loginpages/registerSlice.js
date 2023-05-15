import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const url = "https://vaidik-backend.onrender.com";

const registerSlice = createSlice({
  name: "registers",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {

    //Sign-Up
    signUpPending: (state) => {
      state.loading = true;
    },
    signUpSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload.info;
      state.token = payload.token;

      state.error = null;

      localStorage.setItem("token", state.token);
    },
    signUpFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
    },

    // Google SignUp
    signUpGooglePending: (state) => {
      state.loading = true;
    },
    signUpGoogleSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload.info._id;

      state.token = payload.token;

      state.error = null;

      // localStorage.setItem("token", state.token)
      // localStorage.setItem("id", state.user)
    },
    signUpGoogleFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
    },
    resetSignUpData: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      state.token = null;
    },

  },
});


//Sign-Up
export const { signUpPending, signUpSuccess, signUpFailure, resetSignUpData } = registerSlice.actions;

export const signUp = (formData) => async (dispatch) => {

  dispatch(signUpPending());
  try {
    const { data } = await axios.post(`${url}/student/register/email`, formData);
  
    if (data.status === 1)
      dispatch(signUpSuccess(data));
    else
      dispatch(signUpFailure(data));
  } catch (error) {
    dispatch(signUpFailure(error.response.data));
  }

};

// Google SignUp
export const { signUpGooglePending, signUpGoogleSuccess, signUpGoogleFailure } = registerSlice.actions;

export const signUpGoogle = (formData) => async (dispatch) => {

  dispatch(signUpGooglePending());
  try {
    const { data } = await axios.post(`${url}/student/register/google`, formData);

    if (data.status === 1)
      dispatch(signUpGoogleSuccess(data));
    else
      dispatch(signUpGoogleFailure(data));
  } catch (error) {
    dispatch(signUpGoogleFailure(error.response.data));
  }
};


export default registerSlice.reducer;
