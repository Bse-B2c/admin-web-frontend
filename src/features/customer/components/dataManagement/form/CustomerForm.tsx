import React, { FC } from 'react';
import {
	Card,
	CardContent,
	FormControl,
	CardActions,
	TextField,
	Button,
	Grid,
	Typography,
} from '@mui/material';
import { Save } from '@mui/icons-material';
import { grey } from '@mui/material/colors';

interface CustomerFormStateProps {}
interface CustomerFormDispatchProps {}

type CustomerFormProps = CustomerFormStateProps & CustomerFormDispatchProps;

const CustomerForm: FC<CustomerFormProps> = () => {
	return (
		<Card variant="outlined" sx={{ width: '50%' }}>
			<FormControl fullWidth>
				<CardContent>
					<Grid container direction={'column'} spacing={2}>
						<Grid item xs textAlign={'center'}>
							<Typography variant={'h6'}>Add Customer</Typography>
							<Typography variant={'subtitle2'} color={grey[500]}>
								After creating customer, you can add address.
							</Typography>
						</Grid>
						<Grid item xs>
							<TextField
								required
								placeholder={'Ex: Rodrigo Limões'}
								size={'small'}
								fullWidth
								label={'Name'}
								margin={'dense'}
							/>
							<TextField
								required
								placeholder={'Ex: rodrigo@gmail.com'}
								size={'small'}
								fullWidth
								label={'Email'}
								margin={'dense'}
							/>
							<TextField
								required
								placeholder={'Password'}
								size={'small'}
								fullWidth
								label={'Password'}
								margin={'dense'}
							/>
							<TextField
								required
								placeholder={'Ex: 21 965984315'}
								size={'small'}
								type={'tel'}
								fullWidth
								label={'Phone'}
								margin={'dense'}
							/>
							<TextField
								required
								placeholder={'Ex: 12345678966'}
								size={'small'}
								fullWidth
								label={'Cpf'}
								margin={'dense'}
							/>
							<TextField
								required
								size={'small'}
								fullWidth
								label={'BrithDate'}
								margin={'dense'}
							/>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions
					sx={{
						display: 'flex',
						justifyContent: 'flex-end',
						paddingRight: 2,
					}}>
					<Button
						variant={'contained'}
						color={'success'}
						size={'small'}
						startIcon={<Save />}>
						Create
					</Button>
				</CardActions>
			</FormControl>
		</Card>
	);
};

export default CustomerForm;
