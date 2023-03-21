import React, { lazy } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('@pages/Login'));
const Layout = lazy(() => import('@layouts/Layout'));

let theme = createTheme({
	palette: {
		mode: 'dark',
	},
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Routes>
				<Route path={'login'} element={<Login />} />
				<Route path={'/*'} element={<Layout />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
