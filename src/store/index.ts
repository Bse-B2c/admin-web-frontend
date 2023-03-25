import { configureStore } from '@reduxjs/toolkit';
import appBarReducer from '@store/appBar/appBarSlice';
import { authApi } from '@features/authentication';
import { customerApi } from '@features/customer';

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[customerApi.reducerPath]: customerApi.reducer,
		appBar: appBarReducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([authApi.middleware, customerApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
