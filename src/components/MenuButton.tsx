import { Icon, IconButton, Menu, MenuItem } from '@mui/material';
import React, { FC } from 'react';
import { v4 as uuidV4 } from 'uuid';

interface MenuButtonStateProps {
	children: any;
	options: Array<{ icon?: JSX.Element; label?: string; onClick?: () => void }>;
}
interface MenuButtonDispatchProps {}

type MenuButtonProps = MenuButtonStateProps & MenuButtonDispatchProps;

const MenuButton: FC<MenuButtonProps> = ({ children, options }) => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton
				size={'small'}
				aria-label="more"
				id="long-button"
				aria-controls={open ? 'long-menu' : undefined}
				aria-expanded={open ? 'true' : undefined}
				aria-haspopup="true"
				onClick={handleClick}>
				{children}
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					'aria-labelledby': 'long-button',
				}}
				onClose={handleClose}
				onClick={handleClose}
				anchorEl={anchorEl}
				open={open}>
				{options.map(({ onClick, icon, label }) => (
					<MenuItem
						key={uuidV4()}
						onClick={() => {
							handleClose();
							if (onClick) onClick();
						}}>
						{icon && <Icon sx={{ marginRight: 2 }}>{icon}</Icon>}
						{label && <span>{label}</span>}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default MenuButton;
