const tableHeaders = ['Name', 'City', 'Birthday'];

const UserDataTableHeader = () => {
	return (
		<thead className="w-full">
			<tr className="w-full ">
				{tableHeaders.map((header, index) => (
					<th key={index}>{header}</th>
				))}
			</tr>
		</thead>
	);
};

export default UserDataTableHeader;
