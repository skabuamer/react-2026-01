import AllTasks from "../Other/AllTasks";
import CreateTask from "../Other/CreateTask";
import Header from "../Other/Header";

const AdminDashboard = () => {
	return (
		<div>
			<Header />
			<CreateTask />
			<AllTasks />
		</div>
	);
};

export default AdminDashboard;
