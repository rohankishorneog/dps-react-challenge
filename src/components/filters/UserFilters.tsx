import Filter from './Filter';

interface UserFiltersProps {
	handleSearchCityValue: (city: string) => void;
	handleSearchNameValue: (name: string) => void;
	handleOldestHighlight: (value: boolean) => void;
}

const UserFilters = ({
	handleSearchCityValue,
	handleSearchNameValue,
	handleOldestHighlight,
}: UserFiltersProps) => {
	return (
		<div className="flex w-full justify-between items-center gap-4">
			<Filter
				name="name"
				label="Name "
				handleChange={(value) => handleSearchNameValue(value as string)}
			/>
			<Filter
				name="city"
				label="City"
				handleChange={(value) => handleSearchCityValue(value as string)}
			/>
			<Filter
				name="oldest"
				label="Highlight oldest in the city"
				handleChange={(value) => {
					handleOldestHighlight(value as boolean);
				}}
			/>
		</div>
	);
};

export default UserFilters;
