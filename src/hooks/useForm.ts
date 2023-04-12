import { ChangeEvent, FormEvent, useState } from 'react';
import { Dayjs } from 'dayjs';

interface Validation {
	required?: {
		value: boolean;
		message: string;
	};
	pattern?: {
		value: RegExp;
		message: string;
	};
}

/**
 * Custom hook to handle forms
 * @param state Object to inject in react state
 * @param validationRules Configuration to validate the form
 */
export const useForm = <T>(
	state: T,
	validationRules?: { [key: string]: Validation }
) => {
	const [form, setForm] = useState<T>(state);
	const [errors, setErrors] = useState<{
		[key: string]: string | undefined;
	} | null>(null);

	const onChange = ({
		target: { name, value },
	}: ChangeEvent<HTMLInputElement>) => {
		setForm(prevState => ({ ...prevState, [name]: value }));
	};

	const handleSubmit =
		(onSubmit: (data: T) => void) => (event: FormEvent<HTMLFormElement>) => {
			event.preventDefault();
			const error = validationRules ? validate(form) : null;
			if (!error) onSubmit(form);
		};

	const onChangeDate = (key: string, value: Dayjs | null) => {
		setForm(prevState => ({ ...prevState, [key]: value }));
	};

	const validate = (data: T) => {
		let validationErrors = {};

		if (validationRules) {
			for (const key in validationRules) {
				const { required, pattern } = validationRules[key];
				const currentValue = data[key as keyof T];

				if (required && required.value) {
					if ([undefined, null, ''].includes(currentValue as any)) {
						validationErrors = {
							...validationErrors,
							[key]: required?.message,
						};
						continue;
					}
				}

				if (pattern && pattern.value && typeof currentValue === 'string') {
					if (!pattern.value.test(currentValue)) {
						validationErrors = {
							...validationErrors,
							[key]: pattern?.message,
						};
					}
				}
			}
		}
		const existErrors = Object.keys(validationErrors).length > 0;

		if (existErrors) setErrors(validationErrors);

		return existErrors ? validationErrors : null;
	};

	return {
		form,
		errors,
		onChange,
		onChangeDate,
		handleSubmit,
		setForm,
	};
};
