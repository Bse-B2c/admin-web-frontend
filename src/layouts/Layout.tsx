import React, { FC } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
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
			<Container fixed>
				<DrawerHeader />
				<Content />
			</Container>
		</Box>
	);
};

export default Layout;
