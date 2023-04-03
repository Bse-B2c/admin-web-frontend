import React, { lazy, Suspense, useMemo } from 'react';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Login = lazy(() => import('@pages/Login'));
const Layout = lazy(() => import('@layouts/Layout'));
const RequireAuth = lazy(
	() => import('@features/authentication/components/RequireAuth')
);

function App() {
	const { mode } = useSelector((state: RootState) => state.app);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: mode ?? 'light',
				},
			}),
		[mode]
	);

	return (
		<ThemeProvider theme={responsiveFontSizes(theme)}>
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
