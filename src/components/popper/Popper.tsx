import React, { FC, ReactNode, MouseEvent, useState } from 'react';
import { Box, ClickAwayListener } from '@mui/material';
import { PopperContext } from '@components/popper/PopperContext';
import Button, { ButtonProps } from '@components/popper/buttons/Button';
import ChipButton, {
	ChipButtonProps,
} from '@components/popper/buttons/ChipButton';
import Content, { ContentProps } from '@components/popper/content/Content';

interface PopperComposition {
	Button: FC<ButtonProps>;
	ChipButton: FC<ChipButtonProps>;
	Content: FC<ContentProps>;
}

interface PopperStateProps {
	children: ReactNode;
}
interface PopperDispatchProps {}

type PopperProps = PopperStateProps & PopperDispatchProps;

const Popper: FC<PopperProps> & PopperComposition = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<ClickAwayListener onClickAway={handleClose}>
			<Box>
				<PopperContext.Provider value={{ handleClick, handleClose, anchorEl }}>
					<Box>{children}</Box>
				</PopperContext.Provider>
			</Box>
		</ClickAwayListener>
	);
};

Popper.Button = Button;
Popper.ChipButton = ChipButton;
Popper.Content = Content;

export default Popper;
