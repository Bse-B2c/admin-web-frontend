import { configureStore } from '@reduxjs/toolkit';
import appBarReducer from '@store/appBar/appBarSlice';
import { authApi } from '@features/authentication';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		appBar: appBarReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([authApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
