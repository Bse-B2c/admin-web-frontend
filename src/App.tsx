import React from 'react';
import Layout from '@layouts/Layout';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { grey, purple } from '@mui/material/colors';

let theme = createTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: grey[500],
		},
		background: {
			default: grey[100],
		},
	},
});
theme = responsiveFontSizes(theme);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Layout />
		</ThemeProvider>
	);
}

export default App;
