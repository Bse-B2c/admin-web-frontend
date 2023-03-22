import React, { FC, useState } from 'react';
import {
	Alert,
	CircularProgress,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	Grid,
	IconButton,
	InputAdornment,
	InputLabel,
	Link,
	OutlinedInput,
} from '@mui/material';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import { useForm } from '@hooks/useForm';
import { useLoginMutation } from '@features/authentication/services/auth';
import { setTokens } from '@features/authentication';
import { ApiResponse } from '@/model/ApiResponse';
import { useNavigate } from 'react-router-dom';

interface LoginFormState {
	email: string;
	password: string;
}

interface LoginFormStateProps {}
interface LoginFormDispatchProps {}

type LoginFormProps = LoginFormStateProps & LoginFormDispatchProps;

const LoginForm: FC<LoginFormProps> = () => {
	const navigate = useNavigate();
	const [login, { isLoading, isError, error }] = useLoginMutation();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const {
		form: { email, password },
		onChange,
		handleSubmit,
	} = useForm<LoginFormState>({
		email: '',
		password: '',
	});

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const onSubmit = handleSubmit(async data => {
		try {
			const { token, refreshToken } = await login(data).unwrap();
			setTokens({ token, refreshToken: refreshToken?.key || '' });
			navigate('/');
		} catch (e) {}
	});

	let alert: JSX.Element | null = null;

	if (isError && error) {
		const { data } = error as unknown as { data: ApiResponse<unknown> };

		alert = (
			<Grid item xs>
				<Alert severity="error">{data.error?.message}</Alert>
			</Grid>
		);
	}
	return (
		<Grid
			container
			component="form"
			onSubmit={onSubmit}
			direction={'column'}
			spacing={1}>
			<Grid item xs>
				<FormControl fullWidth>
					<InputLabel htmlFor={'outlined-email'}>E-mail *</InputLabel>
					<OutlinedInput
						fullWidth
						required
						name={'email'}
						id={'outlined-email'}
						label="E-mail"
						type={'email'}
						value={email}
						onChange={onChange}
						endAdornment={
							<InputAdornment position="end" disablePointerEvents>
								<IconButton aria-label="email icon" edge="end">
									<Email />
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Grid>
			<Grid item xs>
				<FormControl fullWidth>
					<InputLabel htmlFor={'outlined-password'}>Password *</InputLabel>
					<OutlinedInput
						fullWidth
						required
						name={'password'}
						id={'outlined-password'}
						label="Password"
						type={showPassword ? 'text' : 'password'}
						value={password}
						onChange={onChange}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end">
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						}
					/>
				</FormControl>
			</Grid>
			<Grid item xs>
				<FormControlLabel
					control={<Checkbox value="remember" color="primary" />}
					label="Remember me"
				/>
			</Grid>
			<Grid item xs>
				<Button
					type={'submit'}
					fullWidth
					variant={'contained'}
					color={'primary'}>
					{!isLoading ? (
						<span>Sign In</span>
					) : (
						<CircularProgress color={'inherit'} size={25} />
					)}
				</Button>
			</Grid>
			<Grid item xs textAlign={'center'}>
				<Link href="#" variant="body2">
					Forgot password?
				</Link>
			</Grid>
			{alert}
		</Grid>
	);
};

export default LoginForm;
