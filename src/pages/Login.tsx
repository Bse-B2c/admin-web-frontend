import React, { FC } from 'react';
import {
	Avatar,
	Box,
	Card,
	CardContent,
	Container,
	CssBaseline,
	Grid,
	Typography,
} from '@mui/material';
import AdminPanelSettings from '@mui/icons-material/AdminPanelSettings';
import { LoginForm } from '@features/authentication';

interface LoginStateProps {}
interface LoginDispatchProps {}

type LoginProps = LoginStateProps & LoginDispatchProps;

const Login: FC<LoginProps> = () => {
	return (
		<Container component={'main'} maxWidth={'xl'} sx={{ minHeight: '100vh' }}>
			<CssBaseline />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
				}}>
				<Card
					elevation={1}
					sx={{
						width: '40%',
					}}>
					<CardContent
						sx={{
							p: 3,
						}}>
						<Grid container direction={'column'}>
							<Grid
								item
								xs
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									marginBottom: 4,
								}}>
								<Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
									<AdminPanelSettings />
								</Avatar>
								<Typography component={'h1'} variant={'h5'}>
									Admin Panel
								</Typography>
							</Grid>
							<LoginForm />
						</Grid>
					</CardContent>
				</Card>
			</Box>
		</Container>
	);
};

export default Login;
