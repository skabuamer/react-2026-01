import Header from "../Other/Header";
import TaskListNumbers from "../Other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ loggedInUserData }) => {
	return (
		<div>
			<Header data={loggedInUserData} />
			<TaskListNumbers data={loggedInUserData} />
			<TaskList data={loggedInUserData} />
		</div>
	);
};

export default EmployeeDashboard;
