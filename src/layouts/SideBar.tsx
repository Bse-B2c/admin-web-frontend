import React, { FC } from 'react';
import logo from '@/assets/react.svg';
import {
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Drawer from '@components/Drawer';
import DrawerHeader from '@components/DrawerHeader';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

interface SideBarStateProps {}
interface SideBarDispatchProps {}

type SideBarProps = SideBarStateProps & SideBarDispatchProps;

const SideBar: FC<SideBarProps> = () => {
	const { open } = useSelector((state: RootState) => state.appBar);

	return (
		<Drawer variant="permanent" open={open}>
			<DrawerHeader>
				<img src={logo} />
			</DrawerHeader>
			<Divider />
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
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
								<DashboardIcon />
							</ListItemIcon>
							<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default SideBar;
