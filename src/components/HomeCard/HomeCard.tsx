import { useEffect, useState, useMemo } from 'react';
import UserFilters from '../filters/UserFilters';
import UserDataTable from '../UserDataTable/UserDataTable';
import { getUserData } from '../../api/userApi';
import EmptyScreen from '../emptyScreen/EmptyScreen';

const HomeCard = () => {
	const [userData, setUserData] = useState<User[]>([]);

	const [searchCriteria, setSearchCriteria] = useState({
		name: '',
		city: '',
	});

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				setIsLoading(true);
				const response = await getUserData();

				if (response) {
					setUserData(response.users);
				} else {
					throw new Error('Failed to fetch user data');
				}
			} catch (err) {
				setError(
					err instanceof Error
						? err.message
						: 'An unknown error occurred'
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	const filteredData = useMemo(() => {
		if (!searchCriteria.name && !searchCriteria.city) {
			return userData;
		}

		return userData.filter((user) => {
			const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
			const nameMatch =
				!searchCriteria.name ||
				fullName.includes(searchCriteria.name.toLowerCase());

			const cityMatch =
				!searchCriteria.city ||
				user.address.city
					.toLowerCase()
					.includes(searchCriteria.city.toLowerCase());

			return nameMatch && cityMatch;
		});
	}, [userData, searchCriteria]);

	const handleSearchChange = (type: 'name' | 'city', value: string) => {
		setSearchCriteria((prev) => ({
			...prev,
			[type]: value,
		}));
	};

	if (isLoading) {
		return (
			<div className="flex justify-center items-center h-full">
				Loading users...
			</div>
		);
	}

	if (error) {
		return <div className="text-red-500 text-center">Error: {error}</div>;
	}

	return (
		<div className="w-full">
			<UserFilters
				handleSearchNameValue={(name) =>
					handleSearchChange('name', name)
				}
				handleSearchCityValue={(city) =>
					handleSearchChange('city', city)
				}
			/>

			{filteredData.length === 0 ? (
				<EmptyScreen />
			) : (
				<UserDataTable users={filteredData} />
			)}
		</div>
	);
};

export default HomeCard;
