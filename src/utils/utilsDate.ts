export const formatDate = (isoDate: string, locale: 'pt-br' | 'en-US') => {
	const date = new Date(isoDate);

	return new Intl.DateTimeFormat(locale).format(date);
};
