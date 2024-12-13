import UserDataTableHeader from './UserDataTableHeader';
import UserTableRows from './UserTableRows';

interface UserDataTableProps {
	users: User[];
	isOldest: (user: User) => boolean;
	highlightOldest: boolean;
}

const UserDataTable = ({
	users,
	isOldest,
	highlightOldest,
}: UserDataTableProps) => {
	return (
		<div className="w-full border rounded-lg bg-gray-700 border-gray-950 p-2 ">
			<table className="w-full border-spacing-y-2 border-separate">
				<UserDataTableHeader />
				<UserTableRows
					users={users}
					isOldest={isOldest}
					highlightOldest={highlightOldest}
				/>
			</table>
		</div>
	);
};

export default UserDataTable;
