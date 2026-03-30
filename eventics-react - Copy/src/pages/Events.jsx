import Breadcrumb from "../components/Breadcrumb";
import EventCard from "../components/EventCard";
import EventsSlider from "../components/EventsSlider";

const Events = () => {
   const currentPage = "All Events";

   return (
      <>
         <Breadcrumb currentPage={currentPage} />
         <EventsSlider />
         <EventCard />
      </>
   );
};

export default Events;
