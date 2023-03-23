import React, { FC } from 'react';
import {
	Box,
	Breadcrumbs,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import MenuIconOpen from '@mui/icons-material/MenuOpen';
import AppBar from '@components/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setOpen, close } from '@store/appBar/appBarSlice';
import AccountMenu from '@components/AccountMenu/AccountMenu';

interface HeaderStateProps {}
interface HeaderDispatchProps {}

type HeaderProps = HeaderStateProps & HeaderDispatchProps;

const Header: FC<HeaderProps> = () => {
	const dispatch = useDispatch();
	const { open } = useSelector((state: RootState) => state.appBar);
	return (
		<AppBar elevation={1} position={'fixed'} open={open} color={'inherit'}>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					onClick={() => {
						if (open) {
							dispatch(close());
						} else {
							dispatch(setOpen());
						}
					}}
					edge="start"
					sx={{
						marginRight: 5,
					}}>
					{open ? <MenuIconOpen /> : <MenuIcon />}
				</IconButton>
				<Box component="div" sx={{ flexGrow: 1 }}>
					<Breadcrumbs aria-label="breadcrumb">
						<Link underline="hover" color="inherit" href="/">
							MUI
						</Link>
						<Link underline="hover" color="inherit" href="/">
							Core
						</Link>
						<Typography color={'text.primary'}>Breadcrumbs</Typography>
					</Breadcrumbs>
				</Box>
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
