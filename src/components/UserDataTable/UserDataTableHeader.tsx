const tableHeaders = ['Name', 'City', 'Birthday'];

const UserDataTableHeader = () => {
	return (
		<thead className="w-full">
			<tr className="w-full ">
				{tableHeaders.map((header, index) => (
					<th key={index} className="pl-4 text-left">
						{header}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default UserDataTableHeader;
