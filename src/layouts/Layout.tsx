import React, { FC } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from '@layouts/Header';
import SideBar from '@layouts/SideBar';
import Content from '@layouts/Content';
import DrawerHeader from '@components/DrawerHeader';

interface LayoutStateProps {}
interface LayoutDispatchProps {}

type LayoutProps = LayoutStateProps & LayoutDispatchProps;

const Layout: FC<LayoutProps> = () => {
	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<Header />
			<SideBar />
			<Box>
				<DrawerHeader />
				<Content />
			</Box>
		</Box>
	);
};

export default Layout;
