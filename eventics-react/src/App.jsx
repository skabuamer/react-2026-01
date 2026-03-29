import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import BlogDetails from "./components/BlogDetails";
import BlogsListing from "./components/BlogsListing";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import ContactPage from "./pages/ContactPage";
import Error404Page from "./pages/Error404Page";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventsPage from "./pages/EventsPage";
import FaqPage from "./pages/FaqPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import SponsorsPage from "./pages/SponsorsPage";
import TeamMemberDetailsPage from "./pages/TeamMemberDetailsPage";
import TeamPage from "./pages/TeamPage";
import VenuePage from "./pages/VenuePage";

const App = () => {
	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/events/:id" element={<EventDetailsPage />} />
					<Route path="/pricing" element={<PricingPage />} />
					<Route path="/gallery" element={<GalleryPage />} />
					<Route path="/faq" element={<FaqPage />} />
					<Route path="/sponsor" element={<SponsorsPage />} />
					<Route path="/venue" element={<VenuePage />} />
					<Route path="*" element={<Error404Page />} />
					<Route path="/team" element={<TeamPage />} />
					<Route path="/team/:id" element={<TeamMemberDetailsPage />} />
					<Route path="/news" element={<BlogsPage />}>
						<Route index element={<BlogsListing />} handle={{ breadcrumb: "Latest Blogs" }} />
						<Route path=":title" element={<BlogDetails handle={{ breadcrumb: (data) => data?.title || "Blog Details" }} />} />
					</Route>
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
