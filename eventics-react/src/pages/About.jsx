import AboutSection from "../components/AboutSection";
import Breadcrumb from "../components/Breadcrumb";
import SpeakersAbout from "../components/SpeakersAbout";

const About = () => {
   const currentPage = "About Us";
   return (
      <>
         <Breadcrumb currentPage={currentPage} />
         <AboutSection />
         <SpeakersAbout />
      </>
   );
};

export default About;
