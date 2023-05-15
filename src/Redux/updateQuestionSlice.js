import { createSlice } from "@reduxjs/toolkit";
import { handleTokenErrors } from "./handleTokenError";
import axios from "axios";

const url = process.env.REACT_APP_API_BASE_URL;

const updateQuestionSlice = createSlice({
  name: "updateQuestion",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    updateQuestionPending: (state) => {
      state.loading = true;
    },
    updateQuestionSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload;

      state.status = 1;
      state.error = null;
    },
    updateQuestionFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//referFrnd
export const { updateQuestionPending, updateQuestionSuccess, updateQuestionFailure,} = updateQuestionSlice.actions;

export const updateQuestionApi = (token, formData) => async (dispatch) => {

  dispatch(updateQuestionPending());
  try {
    const { data } = await axios.post(`${url}/question/updatequestion`, token);
console.log(data)
    if (data.status === 1) {
      dispatch(updateQuestionSuccess(data));
    } else {
      dispatch(updateQuestionFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(updateQuestionFailure(error.response.data));
  }
};

export default updateQuestionSlice.reducer;
