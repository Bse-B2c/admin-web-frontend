import { lazy } from 'react';

const Customers = lazy(() => import('@pages/Customers'));

export const routes = [
	{
		name: 'Customers',
		path: '/customer',
		element: Customers,
	},
];
