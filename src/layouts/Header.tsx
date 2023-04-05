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
import { setOpen, close } from '@store/app/appSlice';
import AccountMenu from '@components/AccountMenu';
import { useLocation } from 'react-router-dom';
import SwitchTheme from '@components/switchTheme/SwitchTheme';

interface HeaderStateProps {}
interface HeaderDispatchProps {}

type HeaderProps = HeaderStateProps & HeaderDispatchProps;

const Header: FC<HeaderProps> = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const { open } = useSelector((state: RootState) => state.app);

	const paths = pathname.split('/').filter(path => path !== '') ?? [];
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
						<Link underline="hover" color="inherit" href={'/dashboard'}>
							panel
						</Link>
						{paths.map((path, index) => {
							const href = paths.slice(0, index).join('/');
							const isLastPath = index === paths.length - 1;

							return !isLastPath ? (
								<Link
									key={`${path}-${index}`}
									underline="hover"
									color={'inherit'}
									href={href}>
									{path}
								</Link>
							) : (
								<Typography key={`${path}-${index}`} color={'text.primary'}>
									{path}
								</Typography>
							);
						})}
					</Breadcrumbs>
				</Box>
				<SwitchTheme />
				<AccountMenu />
			</Toolbar>
		</AppBar>
	);
};

export default Header;
