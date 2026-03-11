import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
	return (
		<div>
			<Header />
			<TaskListNumbers />
			<TaskList />
		</div>
	);
};

export default EmployeeDashboard;
