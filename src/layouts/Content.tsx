import React, { FC } from 'react';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { routes } from '@/routes';

interface ContentStateProps {}

interface ContentDispatchProps {}

type ContentProps = ContentDispatchProps & ContentStateProps;

const Content: FC<ContentProps> = () => {
	return (
		<Container
			disableGutters
			maxWidth={'xl'}
			sx={{ paddingTop: 2, flexGrow: 1 }}
			component="main">
			<Routes>
				{routes.map((route, index) => {
					const Element = route.element;

					return (
						<Route
							path={route.path}
							key={`${route.name}-${index}`}
							element={<Element />}
						/>
					);
				})}
			</Routes>
		</Container>
	);
};

export default Content;
