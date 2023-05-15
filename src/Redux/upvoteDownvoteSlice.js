import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const upvoteDownvoteSlice = createSlice({
  name: "upDownVote",
  initialState: {
    isAuthenticated: false,
    user: null,
    error: null,
    loading: false,
    status: true,
  },
  reducers: {
    //Set-info
    upDownVotePending: (state) => {
      state.loading = true;
    },
    upDownVoteSuccess: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = payload._id;

      state.status = 1;

      state.error = null;
    },
    upDownVoteFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.error = payload;
      state.status = 0;
    },
  },
});

//Set-info
export const { upDownVotePending, upDownVoteSuccess, upDownVoteFailure } = upvoteDownvoteSlice.actions;

export const upDownVoteApi = (token) => async (dispatch) => {

  dispatch(upDownVotePending());
  try {
    const { data } = await axios.post(`${url}/student/reanswer`, token);

    if (data.status === 1) {
      dispatch(upDownVoteSuccess(data));
    } else {
      dispatch(upDownVoteFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(upDownVoteFailure(error.response.data));
  }
};

export default upvoteDownvoteSlice.reducer;
