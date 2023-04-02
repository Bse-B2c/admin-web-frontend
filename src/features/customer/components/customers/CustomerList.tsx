import React, { FC } from 'react';
import { Grid } from '@mui/material';
import SearchForm from '@features/customer/components/customers/SearchForm';
import { useSearchParams } from 'react-router-dom';
import { useSearchCustomerQuery } from '@features/customer/services/customerApi';
import Filters from '@features/customer/components/customers/Filters';
import Table from '@components/table/Table';
import {
	fields,
	getCustomerItem,
} from '@features/customer/components/customers/CustomerItems';

interface CustomerListStateProps {}
interface CustomerListDispatchProps {}

type CustomerListProps = CustomerListStateProps & CustomerListDispatchProps;

const CustomerList: FC<CustomerListProps> = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const {
		name = '',
		orderBy = 'name',
		sortOrder = 'ASC',
		page = 0,
		limit = 10,
		...search
	} = Object.fromEntries([...searchParams]);
	const { data } = useSearchCustomerQuery({
		...search,
		name,
		orderBy,
		sortOrder,
		page: +page,
		limit: +limit,
	});

	const onChangeParams = (key: string, value: string) =>
		setSearchParams(prev => {
			return { ...Object.fromEntries([...prev]), [key]: value };
		});

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<SearchForm
					value={name}
					onSubmit={(value: string) => onChangeParams('name', value)}
				/>
			</Grid>
			<Grid item xs={12}>
				<Filters
					onChangeFilters={onChangeParams}
					onDelete={(param: string) => {
						if (searchParams.has(param)) {
							searchParams.delete(param);
							setSearchParams(searchParams);
						}
					}}
					elements={{
						name,
						orderBy,
						sortOrder,
						...search,
					}}
				/>
			</Grid>
			<Grid item xs={12}>
				<Table
					data={data || []}
					fields={fields}
					layout={['20%', '20%', '20%', '20%', '15%', '5%']}
					sortState={{ orderBy, sortOrder: sortOrder as 'DESC' | 'ASC' }}
					scopedColumns={getCustomerItem()}
					paginationProps={{
						page: +page,
						rowsPerPage: +limit,
						rowsPerPageOptions: [10, 20, 30, 40, 50],
						count: 100,
					}}
					onRowsPerPageChange={({ target }) =>
						onChangeParams('limit', target.value.toString())
					}
					onPageChange={(event, newPage) =>
						onChangeParams('page', newPage.toString())
					}
					onChangeSort={(key, sortOrder) =>
						setSearchParams(prev => ({
							...Object.fromEntries([...prev]),
							orderBy: key,
							sortOrder: sortOrder,
						}))
					}
				/>
			</Grid>
		</Grid>
	);
};

export default CustomerList;
