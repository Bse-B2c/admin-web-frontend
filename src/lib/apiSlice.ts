import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { getToken } from '@features/authentication';

const baseQuery = (host: string) =>
	fetchBaseQuery({
		baseUrl: host,
		credentials: 'same-origin',
		prepareHeaders: headers => {
			const token = getToken();
			if (token) headers.set('authorization', `Bearer ${token}`);

			return headers;
		},
	});
