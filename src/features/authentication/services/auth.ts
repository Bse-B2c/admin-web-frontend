import { apiSlice } from '@/lib/apiSlice';
import { getServiceHost } from '@utils/getServiceHost';
import type { Tokens } from '@features/authentication';
import { User } from '@/model/User';
import { ApiResponse } from '@/model/ApiResponse';

const service = getServiceHost('account');

export const authApi = apiSlice(`${service}/api/account/`).injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation<Tokens, any>({
			query: body => ({
				url: 'auth/admin/signin',
				method: 'POST',
				body,
			}),
			transformResponse: (response: ApiResponse<Tokens>) => {
				return response.data;
			},
		}),
		getMe: builder.query<User, void>({
			query: () => `user/me`,
			transformResponse: (response: ApiResponse<User>) => {
				return response.data;
			},
		}),
	}),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
