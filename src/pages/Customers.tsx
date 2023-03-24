import React, { FC } from 'react';

interface CustomersStateProps {}
interface CustomersDispatchProps {}

type CustomersProps = CustomersStateProps & CustomersDispatchProps;

const Customers: FC<CustomersProps> = () => {
	return <div />;
};

export default Customers;
