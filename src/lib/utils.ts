export const convertDateFormat = (value: string) => {
	const date = new Date(value);
	return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
