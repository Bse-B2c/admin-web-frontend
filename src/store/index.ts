import { configureStore } from '@reduxjs/toolkit';
import appBarReducer from '@store/appBar/appBarSlice';

export const store = configureStore({
	reducer: {
		appBar: appBarReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
