import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/events/:id" element={<EventDetails />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
