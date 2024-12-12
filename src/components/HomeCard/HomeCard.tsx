import { useEffect, useState } from 'react';
import UserFilters from '../filters/UserFilters';
import UserDataTable from '../UserDataTable/UserDataTable';
import { getUserData } from '../../api/userApi';

const HomeCard = () => {
	const [userData, setUserData] = useState<User[]>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getUserData();
				if (data) setUserData(data.users);
				console.log(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	if (!userData || userData.length === 0) {
		return <div>No data as of now</div>;
	}

	return (
		<div
			className="
        w-full"
		>
			<UserFilters />
			<UserDataTable users={userData} />
		</div>
	);
};

export default HomeCard;
