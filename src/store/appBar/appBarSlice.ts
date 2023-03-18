import { createSlice } from '@reduxjs/toolkit';

export interface AppBarState {
	open: boolean;
}

const initialState: AppBarState = {
	open: true,
};

export const appBarSlice = createSlice({
	name: 'appBar',
	initialState,
	reducers: {
		setOpen: state => {
			state.open = true;
		},
		close: state => {
			state.open = false;
		},
	},
});

export const { setOpen, close } = appBarSlice.actions;
export default appBarSlice.reducer;
