import React, { FC, useEffect } from 'react';
import { SwitchThemeMode } from '@components/switchTheme/style';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { setMode } from '@store/app/appSlice';
import { ThemeMode } from '@/model/ThemeMode';

interface SwitchThemeStateProps {}
interface SwitchThemeDispatchProps {}

type SwitchThemeProps = SwitchThemeStateProps & SwitchThemeDispatchProps;

const SwitchTheme: FC<SwitchThemeProps> = () => {
	const dispatch = useDispatch();
	const { mode } = useSelector((state: RootState) => state.app);

	useEffect(() => {
		dispatch(setMode(getMode() ?? 'light'));
	}, []);

	const getMode = (): ThemeMode =>
		(localStorage.getItem('mode') as ThemeMode) ?? 'light';

	return (
		<SwitchThemeMode
			size={'small'}
			onChange={e => {
				const currentMode = e.target.checked ? 'dark' : 'light';
				dispatch(setMode(currentMode));
				localStorage.setItem('mode', currentMode);
			}}
			checked={mode === 'dark'}
		/>
	);
};

export default SwitchTheme;
