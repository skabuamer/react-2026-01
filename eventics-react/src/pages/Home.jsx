import AboutSection from "../components/AboutSection";
import Blogs from "../components/Blogs";
import Countdown from "../components/CountDown";
import CTA from "../components/CTA";
import EventTabs from "../components/EventTabs";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSlider from "../components/HeroSlider";
import Pricing from "../components/Pricing";
import Speakers from "../components/Speakers";
import Sponsors from "../components/Sponsors";
import Stats from "../components/Stats";
import Testimonial from "../components/Testimonial";
import VenueMap from "../components/VenueMap";

const Home = () => {
   return (
      <>
         {/* <Header /> */}

         <main>
            {/* <!-- BANNER SECTION START --> */}
            <HeroSlider />
            {/* <!-- BANNER SECTION END --> */}

            {/* <!-- ABOUT SECTION START --> */}
            <AboutSection />
            {/* <!-- ABOUT SECTION END --> */}

            {/* <!-- COUNTDOWN SECTION START --> */}
            <Countdown />
            {/* <!-- COUNTDOWN SECTION END --> */}

            {/* <!-- FEATURES SECTION STAR --> */}
            <Features />
            {/* <!-- FEATURES SECTION end --> */}

            {/* <!-- EVENT SCHEDULE SECTION START --> */}
            <EventTabs />
            {/* <!-- EVENT SCHEDULE SECTION END --> */}

            {/* <!-- STATS SECTION START --> */}
            <Stats />
            {/* <!-- STATS SECTION END --> */}

            {/* <!-- SPEAKERS SECTION START --> */}
            <Speakers />
            {/* <!-- SPEAKERS SECTION END --> */}

            {/* <!-- TESTIMONIAL SECTION START --> */}
            <Testimonial />
            {/* <!-- TESTIMONIAL SECTION END --> */}

            {/* <!-- PRICING SECTION START --> */}
            <Pricing />
            {/* <!-- PRICING SECTION END --> */}

            {/* <!-- GALLERY SECTION START --> */}
            <Gallery />
            {/* <!-- GALLERY SECTION END --> */}

            {/* <!-- SPONSORS & CTA SECTION START --> */}
            <section className="et-cta py-[130px] lg:py-[80px] md:py-[60px] relative z-[1]">
               <div className="et-1-container">
                  {/* <!-- sponsors --> */}
                  <Sponsors />

                  {/* <!-- cta --> */}
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-[30px]">
                     {/* <!-- venue map --> */}
                     <VenueMap />

                     {/* <!-- join card --> */}
                     <CTA />
                  </div>
               </div>

               {/* <!-- vectors --> */}
               <div className="xs:hidden">
                  <img src="/assets/img/features-vector-1.png" alt="vector" className="pointer-events-none absolute top-[372px] left-[40px] -z-[1]" />
                  <img src="/assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[207px] right-[106px] -z-[1]" />
               </div>
            </section>
            {/* <!-- SPONSORS & CTA SECTION END --> */}

            {/* <!-- BLOG/NEWS SECTION START --> */}
            <Blogs />
            {/* <!-- BLOG/NEWS SECTION END --> */}
         </main>

         <Footer />
      </>
   );
};

export default Home;
