const TaskListNumbers = ({ data }) => {
	const stats = data.tasks.reduce(
		(acc, task) => {
			if (task.newTask) acc.newTask++;
			if (task.active) acc.active++;
			if (task.failed) acc.failed++;
			if (task.completed) acc.completed++;
			return acc;
		},
		{ newTask: 0, active: 0, failed: 0, completed: 0 },
	);
	return (
		<div className="flex flex-wrap gap-5 p-5">
			<div className="bg-blue-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">{stats.newTask}</h2>
				<h3 className="text-lg font-medium">New Task</h3>
			</div>
			<div className="bg-yellow-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">{stats.active}</h2>
				<h3 className="text-lg font-medium">Active Task</h3>
			</div>
			<div className="bg-emerald-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">{stats.completed}</h2>
				<h3 className="text-lg font-medium">Completed</h3>
			</div>
			<div className="bg-red-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">{stats.failed}</h2>
				<h3 className="text-lg font-medium">Failed</h3>
			</div>
		</div>
	);
};

export default TaskListNumbers;
