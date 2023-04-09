import {
	Button,
	Card,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@mui/material';
import React, { FC, useState } from 'react';
import { Add, ArrowBack, ArrowForward } from '@mui/icons-material';
import Address from '@features/customer/components/dataManagement/Address';
import AddressModal from '@features/customer/components/dataManagement/AddressModal';

interface AddressManagementStateProps {}
interface AddressManagementDispatchProps {}

type AddressManagementProps = AddressManagementStateProps &
	AddressManagementDispatchProps;

const AddressManagement: FC<AddressManagementProps> = () => {
	const [open, setOpen] = useState(false);

	const onToggle = () => setOpen(prevState => !prevState);

	return (
		<>
			<AddressModal open={open} onClose={onToggle} />
			<Card variant="outlined">
				<CardContent>
					<Grid container direction={'column'} spacing={2}>
						<Grid item xs>
							<Grid container justifyContent={'space-between'}>
								<Typography variant={'h6'}>Add Address</Typography>
								<Button
									onClick={onToggle}
									size="small"
									variant="outlined"
									startIcon={<Add />}>
									Add
								</Button>
							</Grid>
						</Grid>
						<Grid item xs>
							<Address
								id={1}
								isPinned
								streetName="Rua Engenheiro Marcelo Teixeira Bradão"
								houseNumber={15}
								apartment="apt 102"
								zipCode="21625490"
								city="Rio de Janeiro"
								country="Brazil"
								onDelete={id => {}}
								onEdit={id => {}}
								onPinned={id => {}}
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
						size={'small'}
						color={'secondary'}
						variant={'contained'}
						startIcon={<ArrowBack />}>
						Back
					</Button>
					<Button
						size={'small'}
						color={'secondary'}
						variant={'contained'}
						endIcon={<ArrowForward />}>
						Next
					</Button>
				</CardActions>
			</Card>
		</>
	);
};

export default AddressManagement;
