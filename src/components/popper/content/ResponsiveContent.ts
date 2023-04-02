import { styled } from '@mui/material';

export const ResponsiveContent = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	[theme.breakpoints.down('sm')]: {
		maxWidth: 400,
	},
}));
