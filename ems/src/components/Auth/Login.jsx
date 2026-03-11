import { useState } from "react";

const Login = ({ handleLogin }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		handleLogin(email, password);
		setEmail("");
		setPassword("");
	};
	return (
		<div className="place-content-center h-screen">
			<form onSubmit={submitHandler} className="max-w-xl mx-auto">
				<label className="mt-4 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Email:
					<input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
				</label>
				<br />
				<label className="mt-0 block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
					Password:
					<input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="password" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
				</label>
				<br />
				<button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
