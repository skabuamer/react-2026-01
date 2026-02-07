import axios from "axios";
import { useEffect, useState } from "react";

function App() {
	const [userData, setUserData] = useState([]);
	const [index, setIndex] = useState(1);

	const getUserData = async () => {
		const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`);
		setUserData(response.data);
	};

	useEffect(() => {
		getUserData();
	}, [index]);

	let printUserData = <h3 className="text-center text-2xl font-medium">Loading...</h3>;

	if (userData.length > 0) {
		printUserData = userData.map(function (elem, idx) {
			return (
				<div key={idx}>
					<div className="h-80">
						<img src={elem.download_url} alt="" className="w-full h-full object-cover rounded-2xl" />
					</div>
					<h2 className="text-xl font-medium">{elem.author}</h2>
				</div>
			);
		});
	}

	return (
		<>
			<h2 className="text-4xl font-bold text-center p-5">{index}</h2>

			<div className="grid grid-cols-4 gap-2.5 p-5">{printUserData}</div>

			<div className="flex gap-5 justify-center *:bg-green-800 *:text-white *:p-2 *:rounded-lg">
				<button
					onClick={() => {
						if (index > 1) {
							setIndex(index - 1);
							setUserData([]);
						}
					}}
				>
					Previous
				</button>
				<button
					onClick={() => {
						// if (index < 10) {
						setIndex(index + 1);
						setUserData([]);
						// }
					}}
				>
					Next
				</button>
			</div>
		</>
	);
}

export default App;
