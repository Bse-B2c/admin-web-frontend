import React, { FC, useEffect } from 'react';
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Tooltip,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Drawer from '@components/Drawer';
import DrawerHeader from '@components/DrawerHeader';
import { RootState } from '@/store';
import { nav } from '@layouts/navBar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { close } from '@/store/app/appSlice';
import logo from '@/assets/react.svg';

interface SideBarStateProps {}
interface SideBarDispatchProps {}

type SideBarProps = SideBarStateProps & SideBarDispatchProps;

const SideBar: FC<SideBarProps> = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('sm'));
	const { open } = useSelector((state: RootState) => state.app);

	useEffect(() => {
		if (matches && open) {
			dispatch(close());
		}
	}, [matches, dispatch]);

	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader>
				<img src={logo} alt={'Logo'} />
			</DrawerHeader>
			<Divider />
			<List>
				{nav.map(({ label, icon, to }) => {
					const NavIcon = icon;
					return (
						<ListItem key={label} disablePadding sx={{ display: 'block' }}>
							<Tooltip title={label} placement="right">
								<ListItemButton
									onClick={() => navigate(to)}
									sx={{
										minHeight: 48,
										justifyContent: open ? 'initial' : 'center',
										px: 2.5,
									}}>
									<ListItemIcon
										sx={{
											minWidth: 0,
											mr: open ? 3 : 'auto',
											justifyContent: 'center',
										}}>
										<NavIcon />
									</ListItemIcon>
									<ListItemText
										primary={label}
										sx={{ opacity: open ? 1 : 0 }}
									/>
								</ListItemButton>
							</Tooltip>
						</ListItem>
					);
				})}
			</List>
		</Drawer>
	);
};

export default SideBar;
