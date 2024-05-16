import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isAuthenticated: boolean;
	negara: string;
	username: string;
	isLoading: boolean;
}

const initialState = {
	isAuthenticated: false,
	isLoading: true,
	username: '',
	negara: '',
} as AuthState;

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuth: state => {
			state.isAuthenticated = true;
		},
		logout: state => {
			state.isAuthenticated = false;
		},
		setNegara : (state, action) => {
			state.negara = action.payload;
		},
		setUsername: (state, action) => {
			state.username = action.payload;
		},
		finishInitialLoad: state => {
			state.isLoading = false;
		},
	},
});

export const { setAuth, logout, setNegara, setUsername, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
