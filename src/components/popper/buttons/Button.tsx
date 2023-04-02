import React, { FC, ReactNode } from 'react';
import MuiButton from '@mui/material/Button';
import { usePopperContext } from '@components/popper/PopperContext';

interface ButtonStateProps {
	children: ReactNode;
}
interface ButtonDispatchProps {}

export type ButtonProps = ButtonStateProps & ButtonDispatchProps;

const Button: FC<ButtonProps> = ({ children }) => {
	const { handleClick } = usePopperContext();

	return (
		<MuiButton size={'small'} onClick={handleClick}>
			{children}
		</MuiButton>
	);
};

export default Button;
