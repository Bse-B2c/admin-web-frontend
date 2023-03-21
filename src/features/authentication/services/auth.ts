import { apiSlice } from '@/lib/apiSlice';
import { getServiceHost } from '@utils/getServiceHost';
import type { Tokens } from '@features/authentication';
import { ApiResponse } from '@/model/ApiResponse';

const service = getServiceHost('account');

export const authApi = apiSlice(`${service}/api/account/auth/`).injectEndpoints(
	{
		endpoints: builder => ({
			login: builder.mutation<Tokens, any>({
				query: body => ({
					url: 'admin/signin',
					method: 'POST',
					body,
				}),
				transformResponse: (response: ApiResponse<Tokens>) => {
					return response.data;
				},
			}),
		}),
	}
);

export const { useLoginMutation } = authApi;
