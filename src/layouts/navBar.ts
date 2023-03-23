import {
	Analytics,
	People,
	Inventory,
	ShoppingCart,
} from '@mui/icons-material';

interface Nav {
	icon: any;
	label: string;
	to: string;
}

export const nav: Array<Nav> = [
	{
		icon: Analytics,
		label: 'Dashboard',
		to: '/dashboard',
	},
	{
		icon: People,
		label: 'Customers',
		to: '/customer',
	},
	{
		icon: Inventory,
		label: 'Products',
		to: '/product',
	},
	{
		icon: ShoppingCart,
		label: 'Orders',
		to: '/order',
	},
];
