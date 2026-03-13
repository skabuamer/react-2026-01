import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
	const [user, setUser] = useState(null);
	const authData = useContext(AuthContext);
	const [loggedInUserData, setLoggedInUserData] = useState(null);

	useEffect(() => {
		const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
		if (loggedInUser) {
			setUser(loggedInUser.role);
			// setLoggedInUserData(loggedInUser);
			// setLoggedInUserData(loggedInUser.role == "employee" ? authData.employees.find((emp) => emp.email == loggedInUser.email) : null);
		}
	}, [authData]);

	const handleLogin = (email, password) => {
		if (email == "admin@me.com" && password == "123") {
			setUser("admin");
			localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
		} else if (authData) {
			const employee = authData.employees.find((emp) => emp.email == email && emp.password == password);
			if (employee) {
				setUser("employee");
				setLoggedInUserData(employee);
				localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
			}
		} else {
			alert("Invalid email or password");
		}
	};

	return (
		<>
			{!user ? <Login handleLogin={handleLogin} /> : null}
			{user == "admin" ? <AdminDashboard /> : user == "employee" && <EmployeeDashboard loggedInUserData={loggedInUserData} />}
		</>
	);
};

export default App;
