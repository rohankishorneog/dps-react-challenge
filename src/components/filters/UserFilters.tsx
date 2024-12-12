import Filter from './Filter';

const UserFilters = () => {
	return (
		<div className="flex w-full justify-between items-center gap-4 border rounded-md p-2">
			<Filter name="name" label="Name " handleChange={() => {}} />
			<Filter name="city" label="City" handleChange={() => {}} />
			<Filter
				name="oldest"
				label="Highlight oldest in the city"
				handleChange={() => {}}
			/>
		</div>
	);
};

export default UserFilters;
