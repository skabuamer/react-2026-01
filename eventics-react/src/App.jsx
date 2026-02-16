import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/scss/style.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </>
   );
};

export default App;
