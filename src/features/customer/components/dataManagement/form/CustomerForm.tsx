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
import { useForm } from '@hooks/useForm';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

interface Form {
	name: string;
	email: string;
	password: string;
	phone: string;
	cpf: string;
	brithDate: string | null;
}

interface CustomerFormStateProps {}
interface CustomerFormDispatchProps {}

type CustomerFormProps = CustomerFormStateProps & CustomerFormDispatchProps;

const CustomerForm: FC<CustomerFormProps> = () => {
	const {
		form: { name, cpf, brithDate, email, password, phone },
		onChange,
		onChangeDate,
		handleSubmit,
	} = useForm<Form>({
		name: '',
		cpf: '',
		brithDate: null,
		email: '',
		password: '',
		phone: '',
	});

	return (
		<Card variant="outlined" sx={{ width: '50%' }}>
			<FormControl
				component={'form'}
				fullWidth
				onSubmit={handleSubmit(data => console.log(data))}>
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
								fullWidth
								size="small"
								margin="dense"
								name="name"
								placeholder="Ex: Rodrigo Limões"
								label="Name"
								value={name}
								onChange={onChange}
							/>
							<TextField
								required
								fullWidth
								size="small"
								margin="dense"
								name="email"
								placeholder="Ex: rodrigo@gmail.com"
								label="Email"
								value={email}
								onChange={onChange}
							/>
							<TextField
								required
								fullWidth
								type="password"
								margin="dense"
								size="small"
								placeholder="Password"
								label="Password"
								name="password"
								value={password}
								onChange={onChange}
							/>
							<TextField
								required
								fullWidth
								size="small"
								margin="dense"
								name="phone"
								placeholder="Ex: (21) 965984315"
								type="tel"
								label="Phone"
								value={phone}
								onChange={onChange}
							/>
							<TextField
								required
								fullWidth
								size="small"
								margin="dense"
								name="cpf"
								placeholder="Ex: 12345678966"
								label="Cpf"
								value={cpf}
								onChange={onChange}
							/>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateField
									fullWidth
									required
									size="small"
									margin="dense"
									format="DD/MM/YYYY"
									value={brithDate}
									label="BrithDate"
									onChange={value => {
										onChangeDate('brithDate', value);
									}}
								/>
							</LocalizationProvider>
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
						type="submit"
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
