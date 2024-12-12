interface UserTableRowsProps {
	users: User[];
}

const UserTableRows = ({ users }: UserTableRowsProps) => {
	return (
		<tbody>
			{users.map((user) => (
				<tr key={user.id}>
					<td>
						{user.firstName} {user.lastName}
					</td>
					<td>{user.address.city}</td>
					<td>{user.birthDate}</td>
				</tr>
			))}
		</tbody>
	);
};

export default UserTableRows;
