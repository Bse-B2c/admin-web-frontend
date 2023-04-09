import React, { FC } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

interface CustomerInfoStateProps {
	name: string;
	email: string;
	phone: string;
	cpf: string;
	brithDate: string;
	mainAddress?: string;
}
interface CustomerInfoDispatchProps {}

type CustomerInfoProps = CustomerInfoStateProps & CustomerInfoDispatchProps;

const CustomerInfo: FC<CustomerInfoProps> = ({
	name,
	email,
	cpf,
	phone,
	brithDate,
	mainAddress,
}) => {
	const labelColor = grey[500];
	return (
		<Card variant={'outlined'}>
			<CardContent>
				<Grid container direction={'column'} spacing={1}>
					<Grid item container justifyContent={'space-between'}>
						<Typography variant={'body1'}>
							<strong>Customer</strong>
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant={'subtitle2'} color={labelColor}>
							Name
						</Typography>
						<Typography variant={'body2'}>{name}</Typography>
					</Grid>
					<Grid item>
						<Typography variant={'subtitle2'} color={labelColor}>
							E-mail
						</Typography>
						<Typography variant={'body2'}>{email}</Typography>
					</Grid>
					<Grid item>
						<Typography variant={'subtitle2'} color={labelColor}>
							Phone
						</Typography>
						<Typography variant={'body2'}>{phone}</Typography>
					</Grid>
					<Grid item>
						<Typography variant={'subtitle2'} color={labelColor}>
							CPF
						</Typography>
						<Typography variant={'body2'}>{cpf}</Typography>
					</Grid>
					<Grid item>
						<Typography variant={'subtitle2'} color={labelColor}>
							Brith Date
						</Typography>
						<Typography variant={'body2'}>{brithDate}</Typography>
					</Grid>
					{mainAddress && (
						<Grid item>
							<Typography variant={'subtitle2'} color={labelColor}>
								Main Address
							</Typography>
							<Typography variant={'body2'}>{mainAddress}</Typography>
						</Grid>
					)}
				</Grid>
			</CardContent>
		</Card>
	);
};

export default CustomerInfo;
