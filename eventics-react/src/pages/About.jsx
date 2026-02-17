import AboutSection from "../components/AboutSection";
import Breadcrumb from "../components/Breadcrumb";
import History from "../components/History";
import SpeakersAbout from "../components/SpeakersAbout";
import Stats from "../components/Stats";
import TestimonialAbout from "../components/TestimonialAbout";

const About = () => {
   const currentPage = "About Us";
   return (
      <>
         <Breadcrumb currentPage={currentPage} />
         <AboutSection />
         <History />
         <SpeakersAbout />
         <Stats />
         <TestimonialAbout />
      </>
   );
};

export default About;
