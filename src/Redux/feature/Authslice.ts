import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosClient from "../../api/api";

// Define the interfaces for registration and login
export interface UserRegister {
    email: string;
    telephone: string;
    password: string;
}

export interface UserLogin {
    email: string;
    password: string;
}

// Async thunk for user login
export const loginUser:any = createAsyncThunk(
    "AuthSlice/loginUser",
    async (user: UserLogin, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post("/login", user);
            return res.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

// Async thunk for user registration
export const registerUser = createAsyncThunk<
    UserRegister,  // Return type of the payload creator (could be adjusted based on your API response)
    UserRegister,  // First argument to the payload creator
    { rejectValue: string }  // Optional type for rejecting with a specific error value
>(
    "AuthSlice/registerUser",
    async (user: UserRegister, { rejectWithValue }) => {
        try {
            const res = await axiosClient.post("/register", user);
            return res.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data.message);
            } else {
                throw error;
            }
        }
    }
);

export interface InitialState {
    user?: UserLogin | null;
    token: string | null;
    loading: boolean;
    error?: string | null;
}

const initialState: InitialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Handling login actions
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.token = action.payload.token;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "Something went wrong";
            })
            // Handling registration actions
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || "Something went wrong";
            });
    },
});

export default AuthSlice.reducer;
