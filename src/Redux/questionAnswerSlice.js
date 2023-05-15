import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const questionAnswerSlice = createSlice({
  name: "queAns",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status:2,
  },
  reducers: {
    //allQue
    queAnsPending: (state) => {
      state.loading = true;
    },
    queAnsSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;
      state.status = 1;
      state.error = null;

      // localStorage.setItem("token", state.token);
    },
    queAnsFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//allQue
export const { queAnsPending, queAnsSuccess, queAnsFailure } = questionAnswerSlice.actions;

  export const queAnsApi = (token, questionId, id) => async (dispatch) => {

  var new_token = token.tokens;

  dispatch(queAnsPending());
  try {
    const { data } = await axios.post(`${url}/question/view/${token.id}`,{token: new_token});

    if (data.status === 1) {
      dispatch(queAnsSuccess(data));
    } else {
      dispatch(queAnsFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(queAnsFailure(error.response.data));
  }
};

export default questionAnswerSlice.reducer;
