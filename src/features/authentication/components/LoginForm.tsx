import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import {
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

interface LoginFormState {
	email: string;
	password: string;
}

interface LoginFormStateProps {}
interface LoginFormDispatchProps {}

type LoginFormProps = LoginFormStateProps & LoginFormDispatchProps;

const LoginForm: FC<LoginFormProps> = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [{ email, password }, setLoginForm] = useState<LoginFormState>({
		email: '',
		password: '',
	});

	const handleClickShowPassword = () => setShowPassword(show => !show);

	const onChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>) => {
		setLoginForm(prevState => ({ ...prevState, [name]: value }));
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

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
					Sign In
				</Button>
			</Grid>
			<Grid item xs textAlign={'center'}>
				<Link href="#" variant="body2">
					Forgot password?
				</Link>
			</Grid>
		</Grid>
	);
};

export default LoginForm;
