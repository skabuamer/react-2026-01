import { faAngleLeft, faAngleRight, faArrowRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Breadcrumb from "../components/Breadcrumb";
import schedules from "../data/eventsData";

const EventDetails = () => {
	const { id } = useParams();
	const event = schedules.find((event) => event.id == id);
	return (
		<>
			<Breadcrumb currentPage={event.title.text} />

			<div className="et-event-details-content py-[130px] lg:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
						{/* <!-- left content --> */}
						<div className="left">
							{/* <!-- img --> */}
							<div className="relative rounded-[8px] overflow-hidden ">
								<img src={event.img} alt="event-details-img" className="w-full aspect-770/411 object-cover" />
								{/* <!-- hall number tag --> */}
								<span className="absolute top-[20px] left-[20px] bg-etBlue rounded-[6px] text-white px-[12px] py-[5px] hidden font-normal text-[16px]">Hall No: 59</span>
							</div>

							{/* <!-- txt --> */}
							<div className="et-event-details-rich-text">
								<div dangerouslySetInnerHTML={{ __html: event.detailsText }}></div>

								<div className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px] mt-[38px] mb-[33px]">
									{event.innerImgs.map((img, index) => (
										<img key={index} src={img} alt="event-details-img" className="max-h-[306px] w-full object-cover rounded-[8px]" />
									))}
								</div>

								<div dangerouslySetInnerHTML={{ __html: event.detailsText2 }}></div>
							</div>

							{/* <!-- actions --> */}
							<div className="border-y border-[#d9d9d9] py-[24px] flex items-center xxs:flex-col gap-[20px]">
								<a href="#" className="inline-flex items-center h-[50px] rounded-full bg-etBlue px-[20px] text-[17px] font-medium text-white gap-[10px] hover:bg-etGray">
									{event.actions.btnText} <FontAwesomeIcon icon={faArrowRight} />
								</a>
								<div className="flex gap-[12px]">
									<span className="icon bg-etBlue w-[50px] aspect-square rounded-full outline-[2px] outline outline-white -outline-offset-[3px] flex items-center justify-center">
										<FontAwesomeIcon icon={faPhoneVolume} className="text-white text-[20px]" />
									</span>

									<span className="txt font-semibold text-etBlack">
										<span className="block text-[14px] mb-[2px]">{event.actions.callText}</span>
										<a href={`tel:${event.actions.callNumber}`} className="text-[18px] hover:text-etBlue">
											{event.actions.callNumber}
										</a>
									</span>
								</div>
							</div>

							{/* <!-- artists --> */}
							<div className="mt-[50px]">
								<h3 className="text-[30px] xs:text-[25px] font-semibold text-etBlack mb-[30px] xs:mb-[15px]">{event.artistsTitle}</h3>

								{event.artists.map((artist, index) => (
									// {/* <!-- single artist --> */}
									<div className="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
										{/* <!-- img --> */}
										<div className="rounded-[6px] overflow-hidden shrink-0">
											<img src={artist.img} alt="Artist Image" className="w-[168px] aspect-square" />
										</div>

										{/* <!-- txt --> */}
										<div className="grow">
											{/* <!-- heading  --> */}
											<div className="flex flex-wrap items-center justify-between gap-[10px] border-b border-[#d9d9d9] pb-[15px]">
												<div>
													<h5 className="font-semibold text-[20px] text-etBlack">
														<a href="#" className="hover:text-etBlue">
															{artist.name}
														</a>
													</h5>
													<span className="inline-block text-etGray2 text-[16px]">{artist.role}</span>
												</div>

												{/* <!-- socials --> */}
												<div className="flex gap-[15px] text-[16px]">
													{artist.socials.map((social, idx) => (
														<a key={idx} href={social.link} className="text-[#757277] hover:text-etBlue">
															<FontAwesomeIcon icon={social.icon} />
														</a>
													))}
												</div>
											</div>

											{/* <!-- description --> */}
											<p className="font-light text-etGray2 pt-[20px] text-[16px]">{artist.descr}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* <!-- right sidebar --> */}
						<div className="right max-w-full w-[370px] lg:w-[360px] shrink-0 space-y-[30px]">
							{/* <!-- ticket widget --> */}
							<div className="et-event-details-ticket-widgget border border-[#e5e5e5] rounded-[16px] overflow-hidden">
								{/* <!-- heading --> */}
								<div className="bg-etBlue p-[16px] xxs:p-[12px]">
									<h5 className="font-medium text-[20px] text-white text-center">Select Date and Time</h5>
								</div>

								{/* <!-- body  --> */}
								<div className="p-[22px] lg:p-[16px]">
									{/* <!-- time schedule --> */}
									<div className="flex justify-between items-center mt-[6px] mb-[16px]">
										<h6 className="font-medium text-[16px] text-[#232323]">Time Schedule</h6>

										<div className="flex gap-[20px] items-center text-[16px]" id="et-event-details-ticket-time-slider-nav">
											<button className="prev hover:text-etBlue">
												<i className="fa-solid fa-angle-left"></i>
												<FontAwesomeIcon icon={faAngleLeft} />
											</button>
											<button className="next hover:text-etBlue">
												{/* <i className="fa-solid fa-angle-right"></i> */}
												<FontAwesomeIcon icon={faAngleRight} />
											</button>
										</div>
									</div>

									{/* <!-- slider --> */}
									<Swiper modules={[Navigation]} slideToClickedSlide navigation={{ nextEl: "#et-event-details-ticket-time-slider-nav .next", prevEl: "#et-event-details-ticket-time-slider-nav .prev" }} slidesPerView={4.5} spaceBetween={10} className="et-event-details-ticket-time-slider swiper overflow-visible mb-[24px]">
										{/* {event.timeSchedule.map((time, index) => ( */}
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										<SwiperSlide className="w-max group">
											<span className="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
										</SwiperSlide>
										{/* ))} */}
									</Swiper>

									{/* <!-- events --> */}
									<form className="space-y-[10px] mb-[30px]">
										<div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule1" className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span className="flex items-center">
													<input type="radio" id="schedule1" name="options" value="schedule1" className="appearance-none" checked />
													<span className="before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">15,00 €</span>
												</span>
											</label>
										</div>

										<div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule2" className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span className="flex items-center">
													<input type="radio" id="schedule2" name="options" value="schedule2" className="appearance-none" />
													<span className="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">13,00 €</span>
												</span>
											</label>
										</div>

										<div className="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule3" className="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span className="flex items-center">
													<input type="radio" id="schedule3" name="options" value="schedule3" className="appearance-none" />
													<span className="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">14,00 €</span>
												</span>
											</label>
										</div>
									</form>

									{/* <!-- ticket quantity --> */}
									<div className="border-[0.5px] border-[#d9d9d9] px-[80px] xxs:px-[30px] rounded-full mb-[30px]">
										<div className="flex items-center justify-between gap-[15px] py-[17px]">
											<button type="button" id="decreaseButton" className="decrease font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
												<span className="h-[28px] leading-[22px]">&minus;</span>
											</button>
											<span className="text-[16px] font-light">
												<span id="ticketNumber">1</span> Ticket
											</span>

											<button type="button" id="increaseButton" className="increase font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
												<span className="h-[28px] leading-[22px]"> + </span>
											</button>
										</div>
									</div>

									{/* <!-- button --> */}
									<button className="bg-etBlue h-[50px] rounded-full px-[15px] flex items-center justify-center gap-x-[10px] w-full text-white text-[15px] hover:bg-[#000D83]">
										<span>
											<img src="/assets/img/ticket-icon.svg" alt="ticket icon" />
										</span>
										<span>15,00 €-get Tickets Now</span>
									</button>
								</div>
							</div>

							{/* <!-- location map --> */}
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-full h-[280px] rounded-[30px]"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
