interface ResponseData {
	users: User[];
	total: number;
	skip: number;
	limit: number;
}

export const getUserData = async () => {
	try {
		const response = await fetch('https://dummyjson.com/users');

		if (!response.ok) {
			throw new Error('Unable to fetch user data.');
		}

		const data = await response.json();

		return data as ResponseData;
	} catch (error) {
		console.log(error);
	}
};
