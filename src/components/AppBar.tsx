import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { styled } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { drawerWidth } from '@/components/Drawer';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: prop => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	...(open
		? {
				marginLeft: drawerWidth,
				width: `calc(100% - ${drawerWidth}px)`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
		  }
		: {
				width: `calc(100% - ${theme.spacing(7)} + 1px)`,
				[theme.breakpoints.up('sm')]: {
					width: `calc(100% - ${theme.spacing(8)} - 1px )`,
				},
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
		  }),
}));

export default AppBar;
