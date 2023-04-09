import { FormControl, Grid, TextField } from '@mui/material';
import React, { FC } from 'react';

interface AddressFormStateProps {}
interface AddressFormDispatchProps {}

type AddressFormProps = AddressFormStateProps & AddressFormDispatchProps;

const AddressForm: FC<AddressFormProps> = () => {
	return (
		<FormControl component={'form'} fullWidth>
			<Grid container direction={'column'} spacing={1} wrap={'wrap'}>
				<Grid item xs>
					<TextField
						required
						fullWidth
						size="small"
						margin="dense"
						name="streetName"
						placeholder="Ex: Rua Jardim Botânico"
						label="Street Name"
					/>
				</Grid>
				<Grid item container spacing={1}>
					<Grid item xs={12} md={6}>
						<TextField
							required
							size="small"
							fullWidth
							name="houseNumber"
							placeholder="Ex: 1008"
							label="House Number"
						/>
					</Grid>
					<Grid item xs={12} md={6}>
						<TextField
							required
							size="small"
							fullWidth
							name="apartment"
							placeholder="Ex: Jardim Botânico"
							label="Apartment"
						/>
					</Grid>
				</Grid>
				<Grid item container spacing={1}>
					<Grid item xs={12} md={4}>
						<TextField
							required
							size="small"
							fullWidth
							name="city"
							placeholder="Ex: Rio de Janeiro"
							label="City"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							required
							size="small"
							fullWidth
							name="contry"
							placeholder="Ex: Brasil"
							label="Country"
						/>
					</Grid>
					<Grid item xs={12} md={4}>
						<TextField
							required
							size="small"
							fullWidth
							name="zipCode"
							placeholder="Ex: 22470-180"
							label="Zip Code"
						/>
					</Grid>
				</Grid>
			</Grid>
		</FormControl>
	);
};

export default AddressForm;
