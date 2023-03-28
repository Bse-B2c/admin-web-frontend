import React, { ChangeEvent, FC } from 'react';
import Table from '@components/table/Table';
import { Grid } from '@mui/material';
import { User } from '@/model/User';
import { formatDate } from '@utils/utilsDate';

interface CustomerTableStateProps {
	data: Array<User>;
	page: number;
	limit: number;
	count: number;
}
interface CustomerTableDispatchProps {
	onRowsPerPageChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onPageChange: (event: unknown, newPage: number) => void;
}

type CustomerTableProps = CustomerTableStateProps & CustomerTableDispatchProps;

const CustomerTable: FC<CustomerTableProps> = ({
	data,
	limit,
	page,
	count,
	onRowsPerPageChange,
	onPageChange,
}) => {
	return (
		<Grid item xs={18}>
			<Table
				data={data}
				fields={['Name', 'E-mail', 'Phone', 'Cpf', 'Create At']}
				customHeaderSlots={{}}
				scopedSlots={{
					Name: ({ name }: User) => {
						return <div>{name}</div>;
					},
					'E-mail': ({ email }: User) => <div>{email}</div>,
					Phone: ({ phone }: User) => <div>{phone}</div>,
					Cpf: ({ cpf }: User) => <div>{cpf}</div>,
					'Create At': ({ createdAt }: User) => (
						<div>{formatDate(createdAt, 'en-US')}</div>
					),
					'': () => <div></div>,
				}}
				paginationProps={{
					page,
					rowsPerPage: limit,
					rowsPerPageOptions: [10, 20, 30, 40, 50],
					count,
				}}
				onRowsPerPageChange={onRowsPerPageChange}
				onPageChange={onPageChange}
			/>
		</Grid>
	);
};

export default CustomerTable;
