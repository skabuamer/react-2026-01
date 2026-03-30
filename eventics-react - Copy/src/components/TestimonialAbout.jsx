import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from "../data/testimonialData";

const TestimonialAbout = () => {
   return (
      <section className="et-testimonial overflow-hidden py-[130px] xl:py-[80px] md:py-[60px]">
         <div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
            {/* <!-- heading --> */}
            <div className="et-testimonial-heading text-center mb-[46px] xl:mb-[26px] lg:mb-[16px] gap-[15px]">
               <h6 className="et-section-sub-title anim-text">Testimonials</h6>
               <h2 className="et-section-title anim-text">See Our Clients Feedback</h2>
            </div>

            {/* <!-- slider --> */}
            <Swiper
               className="et-testimonial-slider overflow-visible!"
               slidesPerView={2.1}
               spaceBetween={30}
               modules={[Autoplay, Navigation, Pagination]}
               loop
               autoplay
               watchSlidesProgress
               navigation={{ prevEl: ".et-testimonial-slider-nav .prev", nextEl: ".et-testimonial-slider-nav .next" }}
               breakpoints={{
                  0: {
                     slidesPerView: 1,
                  },
                  576: {
                     slidesPerView: 2,
                     spaceBetween: 20,
                  },
                  992: {
                     spaceBetween: 30,
                  },
               }}
            >
               {testimonials.map((testimonial, idx) => {
                  return (
                     <SwiperSlide key={idx}>
                        <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                           {/* <!-- single testimony heading --> */}
                           <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                              <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                                 <img src={testimonial.reviewer.img} alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                              </div>
                           </div>

                           <div className="text-center">
                              <h5 className="text-black font-medium text-[20px] mb-[3px]">{testimonial.reviewer.name}</h5>
                              <h6 className="text-[16px] text-etGray font-normal mb-[20px]">{testimonial.reviewer.designation}</h6>
                              <p className="text-[16px] text-etGray font-normal mb-[20px]">{testimonial.review}</p>
                           </div>

                           {/* <!-- quotation icon --> */}
                           <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                              <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                           </div>

                           {/* <!-- rating stars --> */}
                           <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                              {[...Array(5)].map((_, idx) => (
                                 <img key={idx} src="assets/img/star-blue.svg" alt="star" className={idx < testimonial.rating ? "" : "opacity-25"} />
                              ))}
                              {/* <img src="assets/img/star-blue.svg" alt="star" />
										<img src="assets/img/star-blue.svg" alt="star" />
										<img src="assets/img/star-blue.svg" alt="star" />
										<img src="assets/img/star-blue.svg" alt="star" className="opacity-25" /> */}
                           </div>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>

            <div className="et-2-testimonial-slider swiper !overflow-visible hidden!">
               <div className="swiper-wrapper">
                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide"></div>

                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide">
                     <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                        {/* <!-- single testimony heading --> */}
                        <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                           <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                              <img src="assets/img/reviewer-2.png" alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                           </div>
                        </div>

                        <div className="text-center">
                           <h5 className="text-black font-medium text-[20px] mb-[3px]">Leslie Alexander</h5>
                           <h6 className="text-[16px] text-etGray font-normal mb-[20px]">Graphic designer</h6>
                           <p className="text-[16px] text-etGray font-normal mb-[20px]">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo</p>
                        </div>

                        {/* <!-- quotation icon --> */}
                        <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                           <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                        </div>

                        {/* <!-- rating stars --> */}
                        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" className="opacity-25" />
                        </div>
                     </div>
                  </div>

                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide">
                     <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                        {/* <!-- single testimony heading --> */}
                        <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                           <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                              <img src="assets/img/reviewer-3.png" alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                           </div>
                        </div>

                        <div className="text-center">
                           <h5 className="text-black font-medium text-[20px] mb-[3px]">Ronald Richards</h5>
                           <h6 className="text-[16px] text-etGray font-normal mb-[20px]">Nursing Assistant</h6>
                           <p className="text-[16px] text-etGray font-normal mb-[20px]">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo</p>
                        </div>

                        {/* <!-- quotation icon --> */}
                        <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                           <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                        </div>

                        {/* <!-- rating stars --> */}
                        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" className="opacity-25" />
                        </div>
                     </div>
                  </div>

                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide">
                     <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                        {/* <!-- single testimony heading --> */}
                        <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                           <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                              <img src="assets/img/reviewer-1.png" alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                           </div>
                        </div>

                        <div className="text-center">
                           <h5 className="text-black font-medium text-[20px] mb-[3px]">Esther Howard</h5>
                           <h6 className="text-[16px] text-etGray font-normal mb-[20px]">Nursing Assistant</h6>
                           <p className="text-[16px] text-etGray font-normal mb-[20px]">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo</p>
                        </div>

                        {/* <!-- quotation icon --> */}
                        <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                           <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                        </div>

                        {/* <!-- rating stars --> */}
                        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" className="opacity-25" />
                        </div>
                     </div>
                  </div>

                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide">
                     <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                        {/* <!-- single testimony heading --> */}
                        <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                           <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                              <img src="assets/img/reviewer-1.png" alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                           </div>
                        </div>

                        <div className="text-center">
                           <h5 className="text-black font-medium text-[20px] mb-[3px]">Esther Howard</h5>
                           <h6 className="text-[16px] text-etGray font-normal mb-[20px]">Nursing Assistant</h6>
                           <p className="text-[16px] text-etGray font-normal mb-[20px]">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo</p>
                        </div>

                        {/* <!-- quotation icon --> */}
                        <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                           <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                        </div>

                        {/* <!-- rating stars --> */}
                        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" className="opacity-25" />
                        </div>
                     </div>
                  </div>

                  {/* <!-- single testimony  --> */}
                  <div className="swiper-slide">
                     <div className="et-testimony relative p-[40px] lg:p-[30px] md:p-[20px] border border-[#D4DCED] rounded-[16px] mt-[60px]">
                        {/* <!-- single testimony heading --> */}
                        <div className="et-testimony__heading flex items-end justify-center mb-[17px] lg:mb-[12px] -mt-[100px] md:-mt-[80px]">
                           <div className="et-testimony__img rounded-full overflow-hidden border border-etBlue p-[7px] w-max max-w-full">
                              <img src="assets/img/reviewer-1.png" alt="reviewer image" className="w-[100px] sm:w-[80px] h-[100px] sm:h-[80px] rounded-full" />
                           </div>
                        </div>

                        <div className="text-center">
                           <h5 className="text-black font-medium text-[20px] mb-[3px]">Esther Howard</h5>
                           <h6 className="text-[16px] text-etGray font-normal mb-[20px]">Nursing Assistant</h6>
                           <p className="text-[16px] text-etGray font-normal mb-[20px]">Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo</p>
                        </div>

                        {/* <!-- quotation icon --> */}
                        <div className="absolute top-[40px] sm:top-[20px] left-[40px] sm:left-[20px]">
                           <img src="assets/img/quotation-blue.svg" alt="quotation mark" />
                        </div>

                        {/* <!-- rating stars --> */}
                        <div className="absolute bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] flex gap-[6px] bg-white shadow-[0_4px_25px_rgba(56,75,255,0.15)] p-[12px] rounded-full">
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" />
                           <img src="assets/img/star-blue.svg" alt="star" className="opacity-25" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default TestimonialAbout;
