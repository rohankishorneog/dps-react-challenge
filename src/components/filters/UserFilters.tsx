import Filter from './Filter';

interface UserFiltersProps {
	handleSearchCityValue: (city: string) => void;
	handleSearchNameValue: (name: string) => void;
}

const UserFilters = ({
	handleSearchCityValue,
	handleSearchNameValue,
}: UserFiltersProps) => {
	return (
		<div className="flex w-full justify-between items-center gap-4 border rounded-md p-2">
			<Filter
				name="name"
				label="Name "
				handleChange={handleSearchNameValue}
			/>
			<Filter
				name="city"
				label="City"
				handleChange={handleSearchCityValue}
			/>
			<Filter
				name="oldest"
				label="Highlight oldest in the city"
				handleChange={() => {}}
			/>
		</div>
	);
};

export default UserFilters;
