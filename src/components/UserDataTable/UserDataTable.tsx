import UserDataTableHeader from './UserDataTableHeader';
import UserTableRows from './UserTableRows';

interface UserDataTableProps {
	users: User[];
}

const UserDataTable = ({ users }: UserDataTableProps) => {
	return (
		<table className="w-full">
			<UserDataTableHeader />
			<UserTableRows users={users} />
		</table>
	);
};

export default UserDataTable;
