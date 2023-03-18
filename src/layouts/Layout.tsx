import React, { FC } from 'react';
import Grid from '@mui/material/Grid';

interface LayoutStateProps {}
interface LayoutDispatchProps {}

type LayoutProps = LayoutStateProps & LayoutDispatchProps;

const Layout: FC<LayoutProps> = () => {
	return (
		<Grid container>
			<div>Menu</div>
			<div>Sidebar</div>
			<div>content</div>
		</Grid>
	);
};

export default Layout;
