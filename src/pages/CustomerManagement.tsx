import React, { FC } from 'react';
import { Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import CustomersList from '@features/customer/components/customers/CustomerList';
import ContentHeader from '@components/contentHeader/ContentHeader';

interface CustomerManagementStateProps {}
interface CustomerManagementDispatchProps {}

type CustomerManagementProps = CustomerManagementStateProps &
	CustomerManagementDispatchProps;

const CustomerManagement: FC<CustomerManagementProps> = () => {
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

export default CustomerManagement;
