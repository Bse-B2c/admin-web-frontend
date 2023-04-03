import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
	open: boolean;
	mode: 'light' | 'dark';
}

const initialState: AppState = {
	open: true,
	mode: 'light',
};

export const appSlice = createSlice({
	name: 'app',
	initialState,
	reducers: {
		setOpen: state => {
			state.open = true;
		},
		close: state => {
			state.open = false;
		},
		setMode: (state, action: PayloadAction<'light' | 'dark'>) => {
			state.mode = action.payload;
		},
	},
});

export const { setOpen, close, setMode } = appSlice.actions;
export default appSlice.reducer;
