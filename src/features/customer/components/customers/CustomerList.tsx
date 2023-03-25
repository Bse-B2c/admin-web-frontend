import React, { FC } from 'react';
import { Grid } from '@mui/material';
import SearchForm from '@features/customer/components/customers/SearchForm';
import { useSearchParams } from 'react-router-dom';

interface CustomerListStateProps {}
interface CustomerListDispatchProps {}

type CustomerListProps = CustomerListStateProps & CustomerListDispatchProps;

const CustomerList: FC<CustomerListProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const search = Object.fromEntries([...searchParams]);

	return (
		<Grid container spacing={2}>
			<Grid item xs={18}>
				<SearchForm
					value={search.name}
					onSubmit={(value: string) => setSearchParams({ name: value })}
				/>
			</Grid>
		</Grid>
	);
};

export default CustomerList;
