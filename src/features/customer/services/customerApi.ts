import { baseQueryWithReauth } from '@/lib/apiSlice';
import { getServiceHost } from '@utils/getServiceHost';
import { User } from '@/model/User';
import { ApiResponse } from '@/model/ApiResponse';
import { createApi } from '@reduxjs/toolkit/query/react';
import { SearchCustomer } from '@features/customer/model/searchCustomer';

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
	}),
});

export const { useSearchCustomerQuery } = customerApi;
