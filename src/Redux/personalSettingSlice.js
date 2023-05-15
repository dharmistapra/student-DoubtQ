import axios from "axios";
import { handleTokenErrors } from "./handleTokenError";
import { createSlice } from "@reduxjs/toolkit";

const url = process.env.REACT_APP_API_BASE_URL;

const personalSettingSlice = createSlice({
  name: "personalSetting",
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
      state.error = null;
    },
    setInfoFailure: (state, { payload }) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
      state.status = 0;
      state.error = payload;
    },
  },
});

//Set-info
export const { setInfoPending, setInfoSuccess, setInfoFailure } = personalSettingSlice.actions;

export const setInfo = (token) => async (dispatch) => {

  dispatch(setInfoPending());
  try {
    const { data } = await axios.post(`${url}/student/setinfo`,token);

    if (data.status === 1) {
      dispatch(setInfoSuccess(data));
    } else {
      dispatch(setInfoFailure(data));
    }
  } catch (error) {
    handleTokenErrors(error, dispatch);
    dispatch(setInfoFailure(error.response.data));
  }
};

export default personalSettingSlice.reducer;
