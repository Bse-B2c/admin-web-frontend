import React, { FC } from 'react';
import { Chip, ChipProps } from '@mui/material';
import { usePopperContext } from '@components/popper/PopperContext';

interface ChipButtonStateProps extends ChipProps {}
interface ChipButtonDispatchProps {}

export type ChipButtonProps = ChipButtonStateProps & ChipButtonDispatchProps;

const ChipButton: FC<ChipButtonProps> = ({ onClick, ...props }) => {
	const { handleClick } = usePopperContext();

	return <Chip {...props} onClick={handleClick} />;
};

export default ChipButton;
