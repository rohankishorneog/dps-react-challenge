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
		<table className="w-full">
			<UserDataTableHeader />
			<UserTableRows
				users={users}
				isOldest={isOldest}
				highlightOldest={highlightOldest}
			/>
		</table>
	);
};

export default UserDataTable;
