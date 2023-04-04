import React, { FC } from 'react';
import ContentHeader from '@components/contentHeader/ContentHeader';

interface CustomerDataManagementStateProps {}
interface CustomerDataManagementDispatchProps {}

type CustomerDataManagementProps = CustomerDataManagementStateProps &
	CustomerDataManagementDispatchProps;

const CustomerDataManagement: FC<CustomerDataManagementProps> = () => {
	return (
		<ContentHeader title={'Customer'} backButton previousUrl={'/customer'}>
			<div>CustomerDataManagement</div>
		</ContentHeader>
	);
};

export default CustomerDataManagement;
