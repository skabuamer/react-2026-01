import Socials from "./Socials";

const Footer = () => {
   const footerContactInfos = [
      {
         title: "Event Venue",
         value: "4648 Rocky Road Philadelphia PA, 1920",
      },
      {
         title: "Send Email",
         value: "info@eventek.com",
      },
      {
         title: "Call Emergency",
         value: "+88012365499",
      },
   ];

   const footerLinkWidgets = [
      {
         title: "Find",
         titleSpan: "Events",
         links: [
            {
               text: "Outdoor Events",
               link: "#",
            },
            {
               text: "Indoor Events",
               link: "#",
            },
            {
               text: "Festivals",
               link: "#",
            },
            {
               text: "Concerts",
               link: "#",
            },
            {
               text: "Event Calendar",
               link: "#",
            },
         ],
      },
      {
         title: "Useful",
         titleSpan: "Links",
         links: [
            {
               text: "Log In",
               link: "#",
            },
            {
               text: "Register",
               link: "#",
            },
            {
               text: "About Eventek",
               link: "#",
            },
            {
               text: "How It Works",
               link: "#",
            },
         ],
      },
   ];

   const footerUpcomingEvents = [
      { title: "Upcoming", titleSpan: "Events" },
      {
         events: [
            {
               image: "/assets/img/cta-bg-2.jpg",
               date: "24, jan - 2024",
               title: "Web Developer Meetup",
               link: "#",
            },
            {
               image: "/assets/img/evenet-sched-2.jpg",
               date: "26, jan - 2024",
               title: "Frontend Meetup",
               link: "#",
            },
         ],
      },
   ];

   const footerTextContents = {
      logo: "/assets/img/logo-white.png",
      logoLink: "#",
      descr: "Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus sit amet magna elemen facilisis",
      copyrightText: "Copyright © 2026 Eventics. All rights reserved.",
   };

   return (
      <>
         {/* <!-- FOOTER SECTION START --> */}
         <footer className="et-footer bg-etBlack relative z-[1] before:absolute before:-z-[1] before:inset-0 before:bg-[url('../assets/img/footer-1-bg.jpg')] before:opacity-30 before:mix-blend-overlay text-white">
            <div className="et-1-container">
               {/* <!-- footer top --> */}
               <div className="et-footer-top pt-[130px] xl:pt-[80px] pb-[60px]">
                  {/* <!-- contact infos --> */}
                  <div className="bg-etBlue py-[35px] px-[40px] xl:px-[30px] rounded-[20px] mb-[60px] overflow-hidden relative z-[1] flex lg:flex-wrap justify-between lg:justify-center xs:justify-start items-center gap-[20px] before:absolute before:-z-[1] before:inset-0 before:bg-[url('../assets/img/contact-info-bg.jpg')] before:bg-cover before:bg-no-repeat before:bg-center before:opacity-40 before:mix-blend-multiply">
                     {footerContactInfos.map((info, idx) => {
                        return (
                           /* <!-- single info --> */
                           <div className="flex xxs:flex-col items-center xxs:items-start gap-[15px] xxs:gap-[10px]">
                              {/* <!-- icon --> */}
                              <div className="icon border border-white/15 rounded-full w-[63px] aspect-square shrink-0 flex items-center justify-center">
                                 <div className="w-[40px] aspect-square bg-white rounded-full flex items-center justify-center">
                                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6 0C4.40935 0.00211004 2.88445 0.634929 1.75969 1.75969C0.634929 2.88445 0.00211004 4.40935 0 6C0 10.3075 5.59 15.7025 5.8275 15.93C5.8737 15.9749 5.93558 16 6 16C6.06442 16 6.1263 15.9749 6.1725 15.93C6.41 15.7025 12 10.3075 12 6C11.9979 4.40935 11.3651 2.88445 10.2403 1.75969C9.11555 0.634929 7.59065 0.00211004 6 0ZM6 8.75C5.4561 8.75 4.92442 8.58871 4.47218 8.28654C4.01995 7.98437 3.66747 7.55488 3.45933 7.05238C3.25119 6.54988 3.19673 5.99695 3.30284 5.4635C3.40895 4.93005 3.67086 4.44005 4.05546 4.05546C4.44005 3.67086 4.93005 3.40895 5.4635 3.30284C5.99695 3.19673 6.54988 3.25119 7.05238 3.45933C7.55488 3.66747 7.98437 4.01995 8.28654 4.47218C8.58871 4.92442 8.75 5.4561 8.75 6C8.74956 6.72921 8.45969 7.42843 7.94406 7.94406C7.42843 8.45969 6.72921 8.74956 6 8.75Z" className="fill-etBlue" />
                                    </svg>
                                 </div>
                              </div>
                              {/* <!-- txt --> */}
                              <div>
                                 <span className="block font-medium text-[14px]">{info.title}</span>
                                 <h5 className="font-medium text-[20px]">{info.value}</h5>
                              </div>
                           </div>
                        );
                     })}
                  </div>

                  <div className="flex md:flex-wrap xs:w-full gap-x-[65px] xxl:gap-x-[45px] xl:gap-[30px] gap-y-[25px] justify-between md:justify-center xxs:justify-start">
                     {/* <!-- footer about --> */}
                     <div className="et-footer-about max-w-[295px] lg:max-w-none md:max-w-[300px] xs:max-w-full">
                        <a href={footerTextContents.logoLink} className="mb-[25px] inline-block">
                           <img src={footerTextContents.logo} alt="logo" />
                        </a>
                        <p className="font-light text-[#f2f2f2] text-[16px] mb-[25px]">{footerTextContents.descr}</p>
                        {/* <!-- social media --> */}
                        <Socials />
                     </div>

                     {footerLinkWidgets.map((widget, idx) => {
                        return (
                           /* <!-- widget --> */
                           <div key={idx} className="et-footer-widget shrink-0 xs:grow">
                              <h5 className="text-[20px] font-medium mb-[16px]">
                                 {widget.title} <span className="text-etBlue">{widget.titleSpan}</span>
                              </h5>

                              <ul className="space-y-[17px] text-[16px] font-light text-[#f2f2f2]">
                                 {widget.links.map((link, idx) => {
                                    return (
                                       <li key={idx}>
                                          <a href={link.link} className="flex items-center gap-[10px] hover:text-etBlue group">
                                             <span className="icon">
                                                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                   <path d="M0 15.875V2.28125C0 1.51953 0.615234 0.875 1.40625 0.875H9.84375C10.6055 0.875 11.25 1.51953 11.25 2.28125V15.875L5.625 12.5938L0 15.875Z" className="fill-transparent stroke-white group-hover:stroke-etBlue group-hover:fill-etBlue transition" />
                                                </svg>
                                             </span>
                                             <span className="txt">{link.text}</span>
                                          </a>
                                       </li>
                                    );
                                 })}
                              </ul>
                           </div>
                        );
                     })}

                     {/* <!-- widget --> */}
                     <div className="et-footer-widget shrink-0 max-w-[318px] xs:max-w-full xs:grow">
                        <h5 className="text-[20px] font-semibold mb-[16px]">
                           {footerUpcomingEvents[0].title} <span className="text-etBlue">{footerUpcomingEvents[0].titleSpan}</span>
                        </h5>

                        <div className="space-y-[30px]">
                           {footerUpcomingEvents[1].events.map((event, idx) => {
                              return (
                                 /* <!-- single upcoming events --> */
                                 <div className="flex items-center gap-x-[30px] xxs:gap-x-[15px]">
                                    <div className="rounded-[15px] overflow-hidden shrink-0">
                                       <img src={event.image} alt="Event Image" className="w-[80px] aspect-square object-cover" />
                                    </div>

                                    <div>
                                       <span className="date text-[16px] text-etGray flex items-center gap-[12px] mb-[8px]">
                                          <span className="icon">
                                             <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clipPath="url(#clip0_2043_1443)">
                                                   <path d="M14.125 1.75H13.375V0.5H12.125V1.75H3.875V0.5H2.625V1.75H1.875C0.841125 1.75 0 2.59113 0 3.625V14.625C0 15.6589 0.841125 16.5 1.875 16.5H14.125C15.1589 16.5 16 15.6589 16 14.625V3.625C16 2.59113 15.1589 1.75 14.125 1.75ZM14.75 14.625C14.75 14.9696 14.4696 15.25 14.125 15.25H1.875C1.53038 15.25 1.25 14.9696 1.25 14.625V6.375H14.75V14.625ZM14.75 5.125H1.25V3.625C1.25 3.28038 1.53038 3 1.875 3H2.625V4.25H3.875V3H12.125V4.25H13.375V3H14.125C14.4696 3 14.75 3.28038 14.75 3.625V5.125Z" fill="var(--et-blue)"></path>
                                                   <path d="M3.625 7.6875H2.375V8.9375H3.625V7.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M6.125 7.6875H4.875V8.9375H6.125V7.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M8.625 7.6875H7.375V8.9375H8.625V7.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M11.125 7.6875H9.875V8.9375H11.125V7.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M13.625 7.6875H12.375V8.9375H13.625V7.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M3.625 10.1875H2.375V11.4375H3.625V10.1875Z" fill="var(--et-blue)"></path>
                                                   <path d="M6.125 10.1875H4.875V11.4375H6.125V10.1875Z" fill="var(--et-blue)"></path>
                                                   <path d="M8.625 10.1875H7.375V11.4375H8.625V10.1875Z" fill="var(--et-blue)"></path>
                                                   <path d="M11.125 10.1875H9.875V11.4375H11.125V10.1875Z" fill="var(--et-blue)"></path>
                                                   <path d="M3.625 12.6875H2.375V13.9375H3.625V12.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M6.125 12.6875H4.875V13.9375H6.125V12.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M8.625 12.6875H7.375V13.9375H8.625V12.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M11.125 12.6875H9.875V13.9375H11.125V12.6875Z" fill="var(--et-blue)"></path>
                                                   <path d="M13.625 10.1875H12.375V11.4375H13.625V10.1875Z" fill="var(--et-blue)"></path>
                                                </g>
                                             </svg>
                                          </span>
                                          <span>{event.date}</span>
                                       </span>

                                       <h6 className="font-medium text-[20px] text-white">
                                          <a href={event.link} className="hover:text-etBlue">
                                             {event.title}
                                          </a>
                                       </h6>
                                    </div>
                                 </div>
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>

               {/* <!-- footer bottom --> */}
               <div className="et-footer-bottom border-t border-white/20 py-[34px]">
                  <p className="font-light text-[#f2f2f2] text-center text-[16px]">{footerTextContents.copyrightText}</p>
               </div>
            </div>
         </footer>
         {/* <!-- FOOTER SECTION END --> */}
      </>
   );
};

export default Footer;
