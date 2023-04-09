import React, { FC } from 'react';
import { Modal } from '@components/modal';
import { Button, Grid } from '@mui/material';
import { Close, Save } from '@mui/icons-material';
import AddressForm from '@features/customer/components/dataManagement/form/AddressForm';

interface AddressModalStateProps {
	open: boolean;
}
interface AddressModalDispatchProps {
	onClose: () => void;
}

type AddressModalProps = AddressModalStateProps & AddressModalDispatchProps;

//TODO: Add onClick event in Create button
const AddressModal: FC<AddressModalProps> = ({ open, onClose }) => {
	return (
		<Modal open={open} alignment={'center'} buttonClose onClose={onClose}>
			<Modal.Header>Add Address</Modal.Header>
			<Modal.Content>
				<AddressForm />
			</Modal.Content>
			<Modal.Footer>
				<Grid container justifyContent="end">
					<Button
						size="small"
						color="secondary"
						variant="contained"
						startIcon={<Close />}
						sx={{ marginRight: 1 }}
						onClick={onClose}>
						Close
					</Button>
					<Button
						size="small"
						color="success"
						variant="contained"
						startIcon={<Save />}>
						Create
					</Button>
				</Grid>
			</Modal.Footer>
		</Modal>
	);
};

export default AddressModal;
