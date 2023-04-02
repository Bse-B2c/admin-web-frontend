import React, { FC } from 'react';
import {
	Chip,
	Divider,
	FormControlLabel,
	Grid,
	Paper,
	Radio,
	Typography,
} from '@mui/material';
import { SearchCustomer } from '@features/customer/model/searchCustomer';
import { Popper } from '@components/popper';
import { FilterAlt } from '@mui/icons-material';
import { fields } from '@features/customer/components/customers/CustomerItems';

const sort = [
	{ label: 'Ascending', value: 'ASC' },
	{ label: 'Descending', value: 'DESC' },
];

const customFilters: Partial<
	Record<keyof Elements, (value: string) => string>
> = {
	orderBy: (value: string) => `Order By: ${value}`,
	sortOrder: (value: string) => {
		const sortOrder = sort.find(sortOrder => sortOrder.value === value);

		return `Sort Order: ${sortOrder?.label ?? value}`;
	},
	name: (value: string) => `Search: ${value}`,
};

type Elements = Omit<SearchCustomer, 'limit' | 'page'>;

interface FiltersStateProps {
	elements: Elements;
}
interface FiltersDispatchProps {
	onChangeFilters: (key: string, value: string) => void;
	onDelete: (param: string) => void;
}

type FiltersProps = FiltersStateProps & FiltersDispatchProps;

const Filters: FC<FiltersProps> = ({ elements, onChangeFilters, onDelete }) => {
	const filters = Object.keys(elements) || [];

	return (
		<Grid container>
			<Grid item xs={1}>
				<Popper>
					<Popper.ChipButton
						icon={<FilterAlt />}
						color={'primary'}
						label="Filter"
						size={'small'}
					/>
					<Popper.Content>
						<Paper>
							<Typography variant={'h6'} sx={{ p: 1 }}>
								Filters
							</Typography>
							<Divider />
							<Paper sx={{ p: 1 }}>
								<Grid container direction={'column'} spacing={1}>
									<Grid item xs>
										<Typography variant={'subtitle2'}>Sort Order</Typography>
										{sort.map(({ value, label }, index) => {
											const sortOrder = elements['sortOrder'];

											return (
												<FormControlLabel
													key={`${value}-${index}`}
													control={
														<Radio
															size={'small'}
															value={value}
															checked={!!(sortOrder && sortOrder === value)}
															onChange={({ target }) =>
																onChangeFilters('sortOrder', target.value)
															}
															name={value}
														/>
													}
													label={label}
												/>
											);
										})}
									</Grid>
									<Grid item xs>
										<Typography variant={'subtitle2'}>Order By</Typography>
										{fields
											.filter(field => field.label !== '')
											.map(({ key, label }, index) => (
												<FormControlLabel
													key={`${key}-${index}`}
													control={
														<Radio
															size={'small'}
															checked={
																!!(
																	elements['orderBy'] &&
																	elements['orderBy'] === key
																)
															}
															onChange={({ target }) =>
																onChangeFilters('orderBy', target.value)
															}
															value={key}
															name={label}
														/>
													}
													label={label}
												/>
											))}
									</Grid>
								</Grid>
							</Paper>
						</Paper>
					</Popper.Content>
				</Popper>
			</Grid>
			<Grid item xs={11}>
				{filters.map(filter => {
					const value = elements[filter as keyof Elements];
					const customLabel = customFilters[filter as keyof Elements];

					if (!value) return null;

					return (
						<Chip
							sx={{ mr: 1 }}
							key={filter}
							size={'small'}
							label={customLabel ? customLabel(value) : `${filter}: ${value}`}
							onDelete={() => {
								onDelete(filter);
							}}
						/>
					);
				})}
			</Grid>
		</Grid>
	);
};

export default Filters;
