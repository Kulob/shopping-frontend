import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IAuthState, ILoginData, IRegisterData } from "../../../common/types/auth";
import axios from "axios";
import { stringify } from "querystring";

const initialState: IAuthState = {
  user: {
    id: null,
    username: "",
    email: "",
    token:''
  },
  isLogged: false,
  isLoading: false,
};

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, { rejectWithValue }) => {
    try {
      const user = await axios.post('https://mern-hotel-api.vercel.app/api/auth/login',data)
      if(user.data.token) {
        window.localStorage.setItem('token', user.data.token)
      }
      console.log(user);
      
      return user.data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerUser = createAsyncThunk(
    "auth/register",
    async (data: IRegisterData, { rejectWithValue }) => {
      try {
        const register = await axios.post('https://mern-hotel-api.vercel.app/api/auth/register',data)
        console.log(register.data);
        if(register.data.token) {
          window.localStorage.setItem('token', register.data.token)
        }
        console.log(register);
        return register.data
      } catch (error: any) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user.token = '';
      state.isLoading = false
      state.isLogged = false
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
        state.isLogged = false
        state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLogged = true
        state.isLoading = false
    })
    builder.addCase(loginUser.rejected, (state, action) => {
        state.isLogged = false
        state.isLoading = false
    })
    builder.addCase(registerUser.pending, (state, action) => {
        state.isLogged = false
        state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLogged = true
        state.isLoading = false
    })
    builder.addCase(registerUser.rejected, (state, action) => {
        state.isLogged = false
        state.isLoading = false
    })
}
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
