import React, { FC, useEffect } from 'react';
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
import { ArrowForward, Save } from '@mui/icons-material';
import { grey } from '@mui/material/colors';
import { useForm } from '@hooks/useForm';
import { DateField, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useUpdateCustomerMutation } from '@features/customer/services/customerApi';

interface Form {
	name: string;
	email: string;
	phone: string;
	cpf: string;
	brithDate: Dayjs | null;
}

interface CustomerFormStateProps {
	customerData?: {
		id: number;
		name: string;
		email: string;
		phone: string;
		cpf: string;
		brithDate: string;
	};
}
interface CustomerFormDispatchProps {
	handleNext: () => void;
}

type CustomerFormProps = CustomerFormStateProps & CustomerFormDispatchProps;

const CustomerForm: FC<CustomerFormProps> = ({ customerData, handleNext }) => {
	const [updateCustomer] = useUpdateCustomerMutation();
	const { form, onChange, onChangeDate, handleSubmit, setForm, errors } =
		useForm<Form>(
			{
				name: '',
				cpf: '',
				brithDate: null,
				email: '',
				phone: '',
			},
			{
				name: {
					required: { value: true, message: 'Name cannot be empty' },
				},
				email: {
					required: { value: true, message: 'Email cannot be empty' },
					pattern: {
						value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/g,
						message: 'Invalid email address',
					},
				},
				phone: {
					required: { value: true, message: 'Phone cannot be empty' },
				},
				cpf: {
					required: { value: true, message: 'Cpf cannot be empty' },
				},
			}
		);

	useEffect(() => {
		if (customerData) {
			setForm({
				...customerData,
				brithDate: customerData.brithDate
					? dayjs(customerData.brithDate)
					: null,
			});
		}
	}, [customerData]);

	const onSubmit = handleSubmit(async ({ brithDate, ...formState }) => {
		if (customerData) {
			const id = customerData.id;
			const { error } = await updateCustomer({
				id,
				brithDate: brithDate?.toISOString() || '',
				...formState,
			}).unwrap();

			if (!error) handleNext();
		}
	});

	return (
		<Card variant="outlined" sx={{ width: '50%' }}>
			<FormControl component={'form'} fullWidth onSubmit={onSubmit}>
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
								error={!!errors?.name ?? undefined}
								helperText={errors?.name ?? undefined}
								fullWidth
								size="small"
								margin="normal"
								name="name"
								placeholder="Ex: Rodrigo Limões"
								label="Name"
								value={form.name}
								onChange={onChange}
							/>
							<TextField
								error={!!errors?.email ?? undefined}
								helperText={errors?.email ?? undefined}
								fullWidth
								size="small"
								margin="dense"
								name="email"
								placeholder="Ex: rodrigo@gmail.com"
								label="Email"
								value={form.email}
								onChange={onChange}
							/>
							<TextField
								error={!!errors?.phone ?? undefined}
								helperText={errors?.phone ?? undefined}
								fullWidth
								size="small"
								margin="dense"
								name="phone"
								placeholder="Ex: (21) 965984315"
								type="tel"
								label="Phone"
								value={form.phone}
								onChange={onChange}
							/>
							<TextField
								error={!!errors?.cpf ?? undefined}
								helperText={errors?.cpf ?? undefined}
								fullWidth
								size="small"
								margin="dense"
								name="cpf"
								placeholder="Ex: 12345678912"
								label="Cpf"
								value={form.cpf}
								onChange={onChange}
							/>
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateField
									fullWidth
									required
									size="small"
									margin="dense"
									format="DD/MM/YYYY"
									value={form.brithDate}
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
					{customerData ? (
						<>
							<Button
								variant={'contained'}
								color={'secondary'}
								size={'small'}
								onClick={() => handleNext()}
								endIcon={<ArrowForward />}>
								Next
							</Button>
							<Button
								type="submit"
								variant={'contained'}
								color={'success'}
								size={'small'}
								startIcon={<Save />}>
								Save
							</Button>
						</>
					) : (
						<Button
							type="submit"
							variant={'contained'}
							color={'success'}
							size={'small'}
							startIcon={<Save />}>
							Create
						</Button>
					)}
				</CardActions>
			</FormControl>
		</Card>
	);
};

export default CustomerForm;
