import { configureStore } from '@reduxjs/toolkit';
import appReducer from '@store/app/appSlice';
import { authApi } from '@features/authentication';
import { customerApi } from '@features/customer';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[customerApi.reducerPath]: customerApi.reducer,
		app: appReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([authApi.middleware, customerApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
