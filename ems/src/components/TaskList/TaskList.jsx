const TaskList = ({ data }) => {
	return (
		<div className="flex flex-wrap gap-5 p-5">
			{data.tasks.map((task, index) => {
				let bgColor = "bg-gray-500";

				if (task.newTask) bgColor = "bg-blue-500";
				else if (task.active) bgColor = "bg-green-500";
				else if (task.failed) bgColor = "bg-red-500";
				else if (task.completed) bgColor = "bg-purple-500";
				return (
					<div key={index} className={`${bgColor} rounded-xl p-5 text-white max-w-[calc(50%-10px)] flex-grow`}>
						<div className="flex justify-between items-center">
							<span className="font-medium text-sm bg-red-400 rounded px-2 py-1">{task.category}</span>
							<span className="text-sm">{task.date}</span>
						</div>
						<h2 className="text-2xl font-bold mb-3 mt-2">{task.title}</h2>
						<p className="text-sm font-medium">{task.description}</p>
					</div>
				);
			})}
		</div>
	);
};

export default TaskList;
