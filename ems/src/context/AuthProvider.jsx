import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	return (
		<div>
			<AuthContext.Provider value={"Amer"}>{children}</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
