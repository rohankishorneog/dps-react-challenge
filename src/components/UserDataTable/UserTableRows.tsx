import { convertDateFormat } from "../../lib/utils";

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
					className={`
            ${isOldest(user) && highlightOldest
					? 'bg-lime-800 text-white'
					: 'bg-transparent'} hover:bg-black text-xs md:text-sm  overflow-hidden group`}>
					<td
						className={`
              px-4 
              py-3 
              text-left 
              first:rounded-l-lg 
              last:rounded-r-lg 
              group-hover:bg-black
            `}
					>
						{user.firstName} {user.lastName}
					</td>
					<td
						className={`
              px-4 
              py-3 
              text-left 
              group-hover:bg-black
            `}
					>
						{user.address.city}
					</td>
					<td
						className={`
              px-4 
              py-3 
              text-left 
              first:rounded-l-lg 
              last:rounded-r-lg 
              group-hover:bg-black
            `}
					>
						{convertDateFormat(user.birthDate)}
					</td>
				</tr>
			))}
		</tbody>
	);
};

export default UserTableRows;
