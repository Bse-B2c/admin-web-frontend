import React, { FC } from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material';
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
			<TextField
				fullWidth
				name="name"
				id="outlined-search"
				label="Customer Name"
				placeholder={'Ex: Rodrigo'}
				size="small"
				value={name}
				onChange={onChange}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="search"
								edge="end"
								color={'secondary'}
								type={'submit'}>
								<Search />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Grid>
	);
};

export default SearchForm;
