import { lazy } from 'react';

const CustomersManagement = lazy(() => import('@pages/CustomerManagement'));
const CustomerDataManagement = lazy(
	() => import('@pages/CustomerDataManagement')
);

export const routes = [
	{
		name: 'Customers',
		path: '/customer',
		element: CustomersManagement,
	},
	{
		name: 'Customer',
		path: '/customer/:id/edit',
		element: CustomerDataManagement,
	},
	{
		name: 'Customer',
		path: '/customer/new',
		element: CustomerDataManagement,
	},
];
