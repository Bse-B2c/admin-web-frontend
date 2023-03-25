import React, { FC } from 'react';
import { Button, FormGroup, Grid, Icon, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useForm } from '@hooks/useForm';

interface SearchFormStateProps {
	value: string;
}
interface SearchFormDispatchProps {
	onSubmit: (value: string) => void;
}

type SearchFormProps = SearchFormStateProps & SearchFormDispatchProps;

const SearchForm: FC<SearchFormProps> = ({ value, onSubmit }) => {
	const {
		form: { name },
		onChange,
		handleSubmit,
	} = useForm<{ name: string }>({ name: value });

	return (
		<Grid
			component="form"
			onSubmit={handleSubmit(({ name }) => onSubmit(name))}>
			<FormGroup row>
				<Grid item xs={11}>
					<TextField
						fullWidth
						name="name"
						id="outlined-basic"
						label="Customer Name"
						size="small"
						value={name}
						onChange={onChange}
					/>
				</Grid>
				<Grid item xs={1}>
					<Button
						size="small"
						color="primary"
						type="submit"
						variant="contained"
						sx={{ p: 1, marginLeft: 1 }}>
						<Icon>
							<Search />
						</Icon>
						Search
					</Button>
				</Grid>
			</FormGroup>
		</Grid>
	);
};

export default SearchForm;
