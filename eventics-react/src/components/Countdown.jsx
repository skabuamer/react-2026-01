import { useEffect, useState } from "react";

const Countdown = () => {
   const [timeLeft, setTimeLeft] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
   });

   const eventDate = new Date("2026-02-09T19:25:00");

   useEffect(() => {
      const interval = setInterval(() => {
         const now = new Date();
         const difference = eventDate - now;

         if (difference <= 0) {
            clearInterval(interval);
            return;
         }

         const days = Math.floor(difference / (1000 * 60 * 60 * 24));
         const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
         const minutes = Math.floor((difference / (1000 * 60)) % 60);
         const seconds = Math.floor((difference / 1000) % 60);

         setTimeLeft({
            days,
            hours,
            minutes,
            seconds,
         });
      }, 1000);

      return () => clearInterval(interval); // cleanup on unmount
   }, []);

   return (
      <>
         <div className="et-1-container rev-slide-up relative z-[2]">
            <div className="bg-etBlue relative z-[1] p-[60px] sm:p-[40px] xs:px-[20px] rounded-[20px] overflow-hidden -mb-[114px] shadow-[0_4px_50px_rgba(18,96,254,0.2)] after:absolute after:inset-0 after:-z-[1] after:bg-[url(../assets/img/et-counter-bg.jpg)] after:bg-cover after:bg-no-repeat after:mix-blend-screen flex items-center md:flex-wrap gap-y-[20px]">
               <div className="pr-[54px] border-r md:border-r-0 border-white/20 md:text-center md:pr-0 md:w-full">
                  <h2 className="et-section-title !text-white mb-[28px] anim-text">Count Every Second Until Event.</h2>
                  <a href="contact.html" className="et-btn bg-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] text-white font-normal text-[17px] rounded-full border-white border hover:!bg-white hover:!text-etBlue">
                     Buy Ticket
                  </a>
               </div>

               {/* <!-- counter --> */}
               <div className="et-countdown flex sm:flex-wrap justify-center gap-y-[10px] md:w-full *:border-r *:sm:border-r-0 *:border-white/20 *:px-[46px] *:sm:px-[26px] *:xs:px-[16px] font-medium text-white text-[16px] text-center">
                  <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
                     <span className="days number block">{timeLeft.days}</span>
                     <span>Days</span>
                  </div>

                  <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
                     <span className="hours number block">{timeLeft.hours}</span>
                     <span>Hours</span>
                  </div>

                  <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
                     <span className="minutes number block">{timeLeft.minutes}</span>
                     <span>Minutes</span>
                  </div>

                  <div className="last:pr-0 last:md:pr-[30px] last:xs:pr-[20px] last:border-r-0">
                     <span className="seconds number block">{timeLeft.seconds}</span>
                     <span>Seconds</span>
                  </div>
               </div>

               {/* <!-- vectors --> */}
               <div className="sm:hidden">
                  <img src="/assets/img/counter-vector.png" alt="vector" className="pointer-events-none absolute top-[26px] left-[53%]" />
                  <img src="/assets/img/counter-vector.png" alt="vector" className="pointer-events-none absolute bottom-[33px] right-[90px]" />
               </div>
            </div>
         </div>
      </>
   );
};

export default Countdown;
