import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
const { createSlice } = require("@reduxjs/toolkit");

const url = process.env.REACT_APP_API_BASE_URL;

const postQuestionSlice = createSlice({
  name: "postQuestion",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status : true,
  },
  reducers: {
    //Set-info
    postQuestionPending: (state) => {
      state.loading = true;
    },
    postQuestionSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      // state.token = payload.token;
      state.status = 1;

      state.error = null;

      //localStorage.setItem("Token", state.token)
    },
    postQuestionFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
      state.status = 0;
    },
  },
});

//Set-info
export const { postQuestionPending, postQuestionSuccess, postQuestionFailure } = postQuestionSlice.actions;

export const postQuestionApi = (formData) => async (dispatch) => {

  dispatch(postQuestionPending());
  try {
    
    const {data} = await axios.post(`${url}/question/ask`, formData);
;
    if (data.status === 1) {
      dispatch(postQuestionSuccess(data));
    } else {
      dispatch(postQuestionFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(postQuestionFailure(error.response.data));
  }
};

export default postQuestionSlice.reducer;
