import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import BlogsPage from "./pages/BlogsPage";
import Error404 from "./pages/Error404";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import Faq from "./pages/Faq";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import SponsorsPage from "./pages/SponsorsPage";
import Team from "./pages/Team";
import TeamMember from "./pages/TeamMember";
import Venue from "./pages/Venue";

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
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/sponsor" element={<SponsorsPage />} />
					<Route path="/venue" element={<Venue />} />
					<Route path="*" element={<Error404 />} />
					<Route path="/team" element={<Team />} />
					<Route path="/team/:id" element={<TeamMember />} />
					<Route path="/news" element={<BlogsPage />} />
					<Route path="/news/:id" element={<BlogDetails />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
