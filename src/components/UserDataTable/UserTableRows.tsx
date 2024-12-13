interface UserTableRowsProps {
	users: User[];
	isOldest: (user: User) => boolean;
}

const UserTableRows = ({ users, isOldest }: UserTableRowsProps) => {
	return (
		<tbody>
			{users.map((user) => (
				<tr
					key={user.id}
					className={`${isOldest(user) ? 'bg-blue-400' : 'bg-black'}`}
				>
					{console.log(isOldest(user))}
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
