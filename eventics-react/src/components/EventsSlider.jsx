import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import schedules from "../data/eventsData";
const EventsSlider = () => {
	return (
		<div className="container mx-auto max-w-[1200px] pt-[120px] lg:pt-[80px] md:pt-[60px] px-[12px] xl:max-w-full">
			<div className="relative">
				<Swiper
					slidesPerView={1}
					loop
					modules={[Navigation]}
					navigation={{
						prevEl: ".et-events-slider-nav .prev",
						nextEl: ".et-events-slider-nav .next",
					}}
					className="et-events-slider"
				>
					{schedules.map((schedule, idx) => (
						<SwiperSlide key={idx} className="group">
							<div style={{ backgroundImage: `url(${schedule.img})` }} className="et-event bg-cover bg-no-repeat bg-center relative z-[1] rounded-[20px] overflow-hidden before:content-normal before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-black/70 before:-z-[1]">
								<div className="txt h-full flex flex-col justify-between items-start gap-[265px] lg:gap-[215px] xxs:gap-[165px] p-[40px] lg:p-[20px] pb-[50px] md:pb-[80px] text-white">
									<div>
										<div className="bg-etBlue rounded-full px-[15px] py-[4px]">
											<span className="font-light text-[18px]">Upcoming Event</span>
										</div>
									</div>

									<div>
										{/* <!-- date --> */}
										<div className="et-schedule-date-time border border-[rgba(217,217,217,0.89)] py-[4.5px] px-[15px] rounded-full inline-flex items-center justify-center xxs:flex-wrap gap-x-[24px] gap-y-[10px] mb-[20px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms]">
											<div className="date flex items-center gap-[10px]">
												<span className="icon">
													<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
														<g clip-path="url(#clip0_2043_1443)">
															<path d="M14.125 1.75H13.375V0.5H12.125V1.75H3.875V0.5H2.625V1.75H1.875C0.841125 1.75 0 2.59113 0 3.625V14.625C0 15.6589 0.841125 16.5 1.875 16.5H14.125C15.1589 16.5 16 15.6589 16 14.625V3.625C16 2.59113 15.1589 1.75 14.125 1.75ZM14.75 14.625C14.75 14.9696 14.4696 15.25 14.125 15.25H1.875C1.53038 15.25 1.25 14.9696 1.25 14.625V6.375H14.75V14.625ZM14.75 5.125H1.25V3.625C1.25 3.28038 1.53038 3 1.875 3H2.625V4.25H3.875V3H12.125V4.25H13.375V3H14.125C14.4696 3 14.75 3.28038 14.75 3.625V5.125Z" fill="var(--white)"></path>
															<path d="M3.625 7.6875H2.375V8.9375H3.625V7.6875Z" fill="var(--white)"></path>
															<path d="M6.125 7.6875H4.875V8.9375H6.125V7.6875Z" fill="var(--white)"></path>
															<path d="M8.625 7.6875H7.375V8.9375H8.625V7.6875Z" fill="var(--white)"></path>
															<path d="M11.125 7.6875H9.875V8.9375H11.125V7.6875Z" fill="var(--white)"></path>
															<path d="M13.625 7.6875H12.375V8.9375H13.625V7.6875Z" fill="var(--white)"></path>
															<path d="M3.625 10.1875H2.375V11.4375H3.625V10.1875Z" fill="var(--white)"></path>
															<path d="M6.125 10.1875H4.875V11.4375H6.125V10.1875Z" fill="var(--white)"></path>
															<path d="M8.625 10.1875H7.375V11.4375H8.625V10.1875Z" fill="var(--white)"></path>
															<path d="M11.125 10.1875H9.875V11.4375H11.125V10.1875Z" fill="var(--white)"></path>
															<path d="M3.625 12.6875H2.375V13.9375H3.625V12.6875Z" fill="var(--white)"></path>
															<path d="M6.125 12.6875H4.875V13.9375H6.125V12.6875Z" fill="var(--white)"></path>
															<path d="M8.625 12.6875H7.375V13.9375H8.625V12.6875Z" fill="var(--white)"></path>
															<path d="M11.125 12.6875H9.875V13.9375H11.125V12.6875Z" fill="var(--white)"></path>
															<path d="M13.625 10.1875H12.375V11.4375H13.625V10.1875Z" fill="var(--white)"></path>
														</g>
														<defs>
															<clipPath id="clip0_2043_1443">
																<rect width="16" height="16" fill="white" transform="translate(0 0.5)"></rect>
															</clipPath>
														</defs>
													</svg>
												</span>

												<span className="font-light text-[16px]">24, Jan - 2024</span>
											</div>
										</div>

										{/* <!-- title --> */}
										<h3 className="et-schedule-title text-[30px] xxs:text-[25px] font-medium leading-[1.4] max-w-[470px] mb-[8px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms] delay-[500ms]">
											<Link to={`/events/${schedule.id}`} className="hover:text-etBlue">
												{schedule.title.text}
											</Link>
										</h3>

										{/* <!-- location --> */}
										<div className="et-schedule-loaction flex items-center gap-[12px] translate-y-[30px] opacity-0 group-[.swiper-slide-active]:translate-y-0 group-[.swiper-slide-active]:opacity-100 transition ease-linear duration-[500ms] delay-[1100ms]">
											<span className="icon">
												<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M5.99998 0C2.80482 0 0.205383 2.59944 0.205383 5.79456C0.205383 9.75981 5.39098 15.581 5.61176 15.8269C5.81913 16.0579 6.1812 16.0575 6.3882 15.8269C6.60898 15.581 11.7946 9.75981 11.7946 5.79456C11.7945 2.59944 9.1951 0 5.99998 0ZM5.99998 8.70997C4.39241 8.70997 3.0846 7.40212 3.0846 5.79456C3.0846 4.187 4.39245 2.87919 5.99998 2.87919C7.60751 2.87919 8.91532 4.18703 8.91532 5.79459C8.91532 7.40216 7.60751 8.70997 5.99998 8.70997Z" fill="var(--et-blue)"></path>
												</svg>
											</span>
											<h6 className="font-kanit font-normal text-[16px]">{schedule.location}</h6>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* <!-- nav --> */}
				<div className="et-events-slider-nav flex gap-[16px] absolute -bottom-[20px] left-[50%] -translate-x-[50%] z-[1]">
					<button className="prev w-[60px] h-[60px] border border-[#d9d9d9] rounded-full text-[18px] hover:bg-etBlue hover:border-etBlue hover:text-white">
						<FontAwesomeIcon icon={faArrowLeftLong} />
					</button>
					<button className="next w-[60px] h-[60px] border border-[#d9d9d9] rounded-full text-[18px] hover:bg-etBlue hover:border-etBlue hover:text-white">
						<FontAwesomeIcon icon={faArrowRightLong} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default EventsSlider;
