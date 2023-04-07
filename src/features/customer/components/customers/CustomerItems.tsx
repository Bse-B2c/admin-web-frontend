import { Delete, Edit, MoreHoriz, Visibility } from '@mui/icons-material';
import React from 'react';
import { User } from '@/model/User';
import { formatDate } from '@utils/utilsDate';
import MenuButton from '@components/MenuButton';

export const fields = [
	{
		label: 'Name',
		key: 'name',
	},
	{
		label: 'E-mail',
		key: 'email',
	},
	{
		label: 'Phone',
		key: 'phone',
	},
	{
		label: 'Cpf',
		key: 'cpf',
	},
	{
		label: 'Created At',
		key: 'createdAt',
	},
	{
		label: '',
		key: 'options',
	},
];

export const getCustomerItem = () => ({
	name: ({ name }: User) => {
		return <div>{name}</div>;
	},
	email: ({ email }: User) => <div>{email}</div>,
	phone: ({ phone }: User) => <div>{phone}</div>,
	cpf: ({ cpf }: User) => <div>{cpf}</div>,
	createdAt: ({ createdAt }: User) => (
		<div>{formatDate(createdAt, 'pt-br')}</div>
	),
	options: () => (
		<div>
			<MenuButton
				options={[
					{ label: 'Delete', onClick: () => {}, icon: <Delete /> },
					{
						label: 'Edit',
						onClick: () => {},
						icon: <Edit />,
					},
					{ label: 'View', onClick: () => {}, icon: <Visibility /> },
				]}>
				<MoreHoriz />
			</MenuButton>
		</div>
	),
});
