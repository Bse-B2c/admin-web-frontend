import { createContext, MouseEvent, useContext } from 'react';

interface Context {
	handleClick: (event: MouseEvent<HTMLElement>) => void;
	handleClose: () => void;
	anchorEl: null | HTMLElement;
}

export const PopperContext = createContext<Context | null>(null);

export const usePopperContext = () => {
	let context = useContext(PopperContext);

	if (!context)
		throw new Error(
			'Child components of Popper cannot be rendered outside the Popper component!'
		);

	return context;
};
