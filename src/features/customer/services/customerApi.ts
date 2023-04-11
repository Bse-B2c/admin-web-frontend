import { baseQueryWithReauth } from '@/lib/apiSlice';
import { getServiceHost } from '@utils/getServiceHost';
import { User } from '@/model/User';
import { ApiResponse } from '@/model/ApiResponse';
import { createApi } from '@reduxjs/toolkit/query/react';
import { SearchCustomer } from '@features/customer/model/searchCustomer';
import { UpdateCustomer } from '@features/customer/model/UpdateCustomer';

const service = getServiceHost('account');

export const customerApi = createApi({
	reducerPath: 'customerApi',
	baseQuery: baseQueryWithReauth(`${service}/api/account/`),
	endpoints: builder => ({
		searchCustomer: builder.query<Array<User>, SearchCustomer>({
			query: ({ name, startDate, endDate, page, limit, orderBy, sortOrder }) =>
				`user?name=${name}&startDate=${startDate}&endDate=${endDate}&orderBy=${orderBy}&sortOrder=${sortOrder}&page=${page}&limit=${limit}`,
			transformResponse: (response: ApiResponse<Array<User>>) => response.data,
		}),
		getCustomer: builder.query<User, string>({
			query: id => `user/${id}`,
			transformResponse: (response: ApiResponse<User>) => response.data,
		}),
		updateCustomer: builder.mutation<ApiResponse<User>, UpdateCustomer>({
			query: ({ id, ...body }) => ({
				url: `/user/${id}`,
				method: 'PATCH',
				body,
			}),
		}),
	}),
});

export const {
	useSearchCustomerQuery,
	useLazyGetCustomerQuery,
	useUpdateCustomerMutation,
} = customerApi;
