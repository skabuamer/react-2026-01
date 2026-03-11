const CreateTask = () => {
	return (
		<div className="bg-[#f1f1f1] text-[#1c1c1c] p-5 m-5 rounded-xl shadow-md">
			<h2 className="text-2xl font-bold mb-4">Create A Task</h2>

			<form className="grid grid-cols-2 gap-10">
				<div className="space-y-4">
					<div>
						<label className="block mb-1" htmlFor="taskTitle">
							Task Title
						</label>
						<input className="border border-[#d8d8d8] h-[40px] px-[12px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" type="text" name="taskTitle" id="taskTitle" placeholder="Make a Dashboard" />
					</div>
					<div>
						<label className="block mb-1" htmlFor="taskDate">
							Date
						</label>
						<input className="border border-[#d8d8d8] h-[40px] px-[12px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" type="date" name="taskDate" id="taskDate" />
					</div>
					<div>
						<label className="block mb-1" htmlFor="assignedEmployee">
							Assign To
						</label>
						<input className="border border-[#d8d8d8] h-[40px] px-[12px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" type="text" name="assignedEmployee" id="assignedEmployee" placeholder="John Doe" />
					</div>
					<div>
						<label className="block mb-1" htmlFor="taskCategory">
							Category
						</label>
						<input className="border border-[#d8d8d8] h-[40px] px-[12px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" type="text" name="taskCategory" id="taskCategory" placeholder="Design, Development etc" />
					</div>
				</div>

				<div className="flex flex-col h-full gap-y-4">
					<div className="flex-grow flex flex-col">
						<label className="block mb-1" htmlFor="taskDescription">
							Description
						</label>
						<textarea className="border border-[#d8d8d8] flex-grow px-[12px] xs:px-[15px] rounded-[4px] w-full focus:outline-none align-top" name="taskDescription" id="taskDescription"></textarea>
					</div>
					<button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md hover:bg-gray-600">Create Task</button>
				</div>
			</form>
		</div>
	);
};

export default CreateTask;
