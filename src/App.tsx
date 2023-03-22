import React, { lazy, Suspense } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

const Login = lazy(() => import('@pages/Login'));
const Layout = lazy(() => import('@layouts/Layout'));
const RequireAuth = lazy(
	() => import('@features/authentication/components/RequireAuth')
);

let theme = createTheme({
	palette: {
		mode: 'dark',
	},
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Suspense>
				<Routes>
					<Route path={'login'} element={<Login />} />
					<Route element={<RequireAuth allowedRole={10} />}>
						<Route path={'/*'} element={<Layout />} />
					</Route>
				</Routes>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
