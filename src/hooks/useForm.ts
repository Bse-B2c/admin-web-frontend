import { ChangeEvent, FormEvent, useState } from 'react';

/**
 * Custom hook to handle forms
 * @param state Object to inject in react state
 */
export const useForm = <T>(state: T) => {
	const [form, setForm] = useState<T>(state);

	const onChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>) => {
		setForm(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit =
		(onSubmit: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			onSubmit(form);
		};

	return {
		form,
		onChange,
		handleSubmit,
	};
};
