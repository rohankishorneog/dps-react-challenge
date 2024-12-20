import { useEffect, useState, useMemo } from 'react';
import UserFilters from '../filters/UserFilters';
import UserDataTable from '../UserDataTable/UserDataTable';
import { getUserData } from '../../api/userApi';
import EmptyScreen from '../emptyScreen/EmptyScreen';
import { useDebounce } from '../../hooks/useDebounce';

const HomeCard = () => {
	const [userData, setUserData] = useState<User[]>([]);

	const [searchCriteria, setSearchCriteria] = useState({
		name: '',
		city: '',
	});

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [highlightOldest, setHighlightOldest] = useState<boolean>(false);

	const debouncedName = useDebounce(searchCriteria.name, 1000);
	const debouncedCity = useDebounce(searchCriteria.city, 1000);

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

	const ageCityMap = useMemo(() => {
		const result: Record<string, number> = {};

		userData.forEach((user) => {
			if (result[user.address.city]) {
				result[user.address.city] = Math.max(
					result[user.address.city],
					user.age
				);
			} else {
				result[user.address.city] = user.age;
			}
		});

		return result;
	}, [userData]);

	const isOldest = (user: User) => user.age >= ageCityMap[user.address.city];

	const filteredData = useMemo(() => {
		if (!debouncedName && !debouncedCity) {
			return userData;
		}

		return userData.filter((user) => {
			const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
			const nameMatch =
				!debouncedName ||
				fullName.includes(debouncedName.toLowerCase());

			const cityMatch =
				!debouncedCity ||
				user.address.city
					.toLowerCase()
					.includes(debouncedCity.toLowerCase());

			return nameMatch && cityMatch;
		});
	}, [userData, debouncedName, debouncedCity]);

	const handleOldestHighlight = (value: boolean) => {
		setHighlightOldest(value);
	};

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
		<div className="w-full flex flex-col gap-2 p-4 border rounded-lg">
			<UserFilters
				handleSearchNameValue={(name) =>
					handleSearchChange('name', name)
				}
				handleSearchCityValue={(city) =>
					handleSearchChange('city', city)
				}
				handleOldestHighlight={handleOldestHighlight}
			/>

			{filteredData.length === 0 ? (
				<EmptyScreen />
			) : (
				<UserDataTable
					users={filteredData}
					isOldest={isOldest}
					highlightOldest={highlightOldest}
				/>
			)}
		</div>
	);
};

export default HomeCard;
