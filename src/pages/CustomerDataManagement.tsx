import React, { FC } from 'react';

interface CustomerDataManagementStateProps {}
interface CustomerDataManagementDispatchProps {}

type CustomerDataManagementProps = CustomerDataManagementStateProps &
	CustomerDataManagementDispatchProps;

const CustomerDataManagement: FC<CustomerDataManagementProps> = () => {
	return <div>CustomerDataManagement</div>;
};

export default CustomerDataManagement;
