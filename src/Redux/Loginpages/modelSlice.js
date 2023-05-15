import axios from "axios";

const { createSlice } = require("@reduxjs/toolkit");

const url = "https://vaidik-backend.onrender.com";

const modelSlice = createSlice({
  name: "models",
  initialState: {
    isAuthenticated: false,
    isAuth: 0,
    user: null,
    error: null,
    loading: false,
  },
  reducers: {

    //Sign-Up 2
    signUpmodelPending: (state) => {
      state.loading = true;
    },
    signUpmodelSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.isAuth = 1;
      state.user = payload;

      state.token = payload.token;

      state.error = null;

      localStorage.setItem("token", state.token);
    },
    signUpmodelFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.isAuth = 2;
      state.user = null;
      state.error = payload;
    },

  },

});


// Google SignUp 2
export const { signUpmodelPending, signUpmodelSuccess, signUpmodelFailure } = modelSlice.actions;

export const signUpmodels = (formData) => async (dispatch) => {

  dispatch(signUpmodelPending());
  try {
    const { data } = await axios.post(`${url}/student/googleregister`, formData);

    if (data.status === 1)
      dispatch(signUpmodelSuccess(data));
    else
      dispatch(signUpmodelFailure(data));
  } catch (error) {
    dispatch(signUpmodelFailure(error.response.data));
  }
};

export default modelSlice.reducer;