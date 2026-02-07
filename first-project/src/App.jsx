import { X } from "lucide-react";
import { useState } from "react";

const App = () => {
	const [title, setTitle] = useState("");
	const [descr, setDescr] = useState("");
	const [task, setTask] = useState([]);

	const submitHandler = (e) => {
		e.preventDefault();

		const copyTasks = [...task];
		copyTasks.push({ title, descr });
		setTask(copyTasks);

		setTitle("");
		setDescr("");
	};

	const deleteTask = (idx) => {
		const copyTasks = [...task];
		copyTasks.splice(idx, 1);
		setTask(copyTasks);
	};

	return (
		<div className="p-8">
			<h1 className="text-4xl font-bold text-center">Note App</h1>
			<form
				onSubmit={(e) => {
					submitHandler(e);
				}}
				className="w-full max-w-md mx-auto mt-5 p-6 bg-white rounded-lg shadow-md flex flex-col items-center"
			>
				<input
					type="text"
					placeholder="Enter Note Title"
					className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>

				<textarea
					placeholder="Enter Note Description"
					className="w-full mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
					value={descr}
					onChange={(e) => {
						setDescr(e.target.value);
					}}
				></textarea>

				<button disabled={!title.trim() || !descr.trim()} className={`px-4 py-2 rounded-md text-white ${!title.trim() || !descr.trim() ? "bg-gray-400 cursor-not-allowed" : "bg-red-500"}`}>
					Add Note
				</button>
			</form>

			<div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md w-full max-w-4xl mx-auto">
				<h2 className="text-2xl font-semibold mb-4">Notes</h2>
				{task.map(function (elem, idx) {
					return (
						<div key={idx} className="bg-white p-4 rounded-md shadow-md mb-4">
							<div className="flex gap-3.5 items-center justify-between mb-2">
								<h3 className="text-lg font-semibold">{elem.title}</h3>
								<button
									type="button"
									className="shrink-0 text-gray-500 border border-gray-500 w-5.5 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200"
									onClick={() => {
										deleteTask(idx);
									}}
								>
									<X size={16} strokeWidth={1} />
								</button>
							</div>
							<p className="text-gray-600">{elem.descr}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default App;
