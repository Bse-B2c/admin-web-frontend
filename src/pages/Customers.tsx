import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import CustomersList from '@features/customer/components/customers/CustomerList';
import ContentHeader from '@components/contentHeader/ContentHeader';

interface CustomersStateProps {}
interface CustomersDispatchProps {}

type CustomersProps = CustomersStateProps & CustomersDispatchProps;

const Customers: FC<CustomersProps> = () => {
	return (
		<ContentHeader
			title="Customers"
			endAdornment={
				<Button
					color={'success'}
					size={'small'}
					variant="outlined"
					startIcon={<Add />}>
					New Customer
				</Button>
			}>
			<CustomersList />
		</ContentHeader>
	);
};

export default Customers;
