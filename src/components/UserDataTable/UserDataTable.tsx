import UserDataTableHeader from './UserDataTableHeader';
import UserTableRows from './UserTableRows';

interface UserDataTableProps {
	users: User[];
	isOldest: (user: User) => boolean;
}

const UserDataTable = ({ users, isOldest }: UserDataTableProps) => {
	return (
		<table className="w-full">
			<UserDataTableHeader />
			<UserTableRows users={users} isOldest={isOldest} />
		</table>
	);
};

export default UserDataTable;
