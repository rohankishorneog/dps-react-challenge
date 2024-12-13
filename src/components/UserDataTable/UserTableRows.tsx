interface UserTableRowsProps {
	users: User[];
	isOldest: (user: User) => boolean;
	highlightOldest: boolean;
}

const UserTableRows = ({
	users,
	isOldest,
	highlightOldest,
}: UserTableRowsProps) => {
	return (
		<tbody>
			{users.map((user) => (
				<tr
					key={user.id}
					className={`${
						isOldest(user) && highlightOldest
							? 'bg-blue-400'
							: 'bg-black'
					}`}
				>
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
