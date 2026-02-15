const VenueMap = () => {
   const venueMapData = {
      subTitle: "Event Venue Map",
      title: "Get Direction To The Event Venue",
      venue: {
         map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.073272543115!2d90.42018400883451!3d23.780404981765667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79a27d665a3%3A0x1f85a83218e0b92c!2sGulshan%20Lake!5e0!3m2!1sen!2sbd!4v1771138646664!5m2!1sen!2sbd",
         img: "/assets/img/cta-venue-img.jpg",
         btn: {
            text: "Get Direction",
            link: "#",
         },
      },
   };
   return (
      <div className="bg-[#EEF4FF] p-[40px] lg:p-[30px] xs:px-[20px] xs:pb-0 pb-0 lg:pb-0 rounded-[20px] overflow-hidden relative z-[1] before:absolute before:inset-0 before:bg-[url('../assets/img/cta-bg-1.jpg')] before:bg-cover before:bg-no-repeat before:bg-center before:-z-[1] before:mix-blend-multiply">
         <div className="mb-[22px]">
            <h6 className="et-section-sub-title anim-text">{venueMapData.subTitle}</h6>
            <h2 className="et-section-title anim-text">{venueMapData.title}</h2>
         </div>

         <div className="relative">
            <iframe src={venueMapData.venue.map} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[303px] rounded-tl-[20px] rounded-tr-[20px]"></iframe>

            <div className="absolute inset-[40px] top-auto flex rounded-[20px] overflow-hidden bg-white xxs:flex-col">
               <img src={venueMapData.venue.img} alt="venue image" className="shrink-0 w-[50%] xxs:w-full" />
               <div className="flex items-center justify-center w-full">
                  <a href={venueMapData.venue.btn.link} className="bg-etBlue rounded-full text-white h-[45px] px-[15px] text-[17px] my-[10px] flex items-center justify-center hover:bg-white hover:text-etBlue">
                     {venueMapData.venue.btn.text}
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default VenueMap;
