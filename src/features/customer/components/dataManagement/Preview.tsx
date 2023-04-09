import React, { FC } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import { ArrowBack, Done } from '@mui/icons-material';
import Address from '@features/customer/components/dataManagement/Address';
import CustomerInfo from '@features/customer/components/CustomerInfo';

interface PreviewStateProps {}
interface PreviewDispatchProps {}

type PreviewProps = PreviewStateProps & PreviewDispatchProps;

const Preview: FC<PreviewProps> = () => {
	return (
		<Card variant={'outlined'}>
			<CardContent>
				<Grid container justifyContent={'center'} spacing={1}>
					<Grid item>
						<CustomerInfo
							name={'Rodrigo Limões'}
							email={'rolimoes@gmail.com'}
							brithDate={'21 set. 1998'}
							cpf={'1232342'}
							phone={'1234445'}
						/>
					</Grid>
					<Grid item>
						<Card variant={'outlined'}>
							<CardContent>
								<Grid container direction={'column'} spacing={1}>
									<Grid item xs>
										<Grid container justifyContent={'space-between'}>
											<Typography variant={'body1'}>
												<strong>Addresses</strong>
											</Typography>
										</Grid>
									</Grid>
									<Grid item container direction={'column'} spacing={1} xs>
										<Grid item>
											<Address
												id={1}
												isPinned
												isViewMode
												streetName="Rua Engenheiro Marcelo Teixeira Bradão"
												houseNumber={15}
												apartment="apt 102"
												zipCode="21625490"
												city="Rio de Janeiro"
												country="Brazil"
											/>
										</Grid>
										<Grid item>
											<Address
												id={1}
												isViewMode
												streetName="Rua Engenheiro Marcelo Teixeira Bradão"
												houseNumber={15}
												apartment="apt 102"
												zipCode="21625490"
												city="Rio de Janeiro"
												country="Brazil"
											/>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
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
					size={'small'}
					color={'secondary'}
					variant={'contained'}
					startIcon={<ArrowBack />}>
					Back
				</Button>
				<Button
					size={'small'}
					color={'primary'}
					variant={'contained'}
					startIcon={<Done />}>
					Conclude
				</Button>
			</CardActions>
		</Card>
	);
};

export default Preview;
