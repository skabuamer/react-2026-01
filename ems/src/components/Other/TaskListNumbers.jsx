const TaskListNumbers = () => {
	return (
		<div className="flex flex-wrap gap-5 p-5">
			<div className="bg-blue-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">0</h2>
				<h3 className="text-lg font-medium">New Task</h3>
			</div>
			<div className="bg-yellow-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">0</h2>
				<h3 className="text-lg font-medium">New Task</h3>
			</div>
			<div className="bg-emerald-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">0</h2>
				<h3 className="text-lg font-medium">New Task</h3>
			</div>
			<div className="bg-red-500 rounded-xl p-5 text-white max-w-1/4 flex-grow">
				<h2 className="text-4xl font-bold mb-1">0</h2>
				<h3 className="text-lg font-medium">New Task</h3>
			</div>
		</div>
	);
};

export default TaskListNumbers;
