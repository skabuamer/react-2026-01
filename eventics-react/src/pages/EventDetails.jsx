import { faArrowRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import schedules from "../data/eventsData";

const EventDetails = () => {
	const { id } = useParams();
	const event = schedules.find((event) => event.id == id);
	return (
		<>
			<Breadcrumb currentPage={event.title.text} />

			<div class="et-event-details-content py-[130px] lg:py-[80px] md:py-[60px]">
				<div class="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div class="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
						{/* <!-- left content --> */}
						<div class="left">
							{/* <!-- img --> */}
							<div class="relative rounded-[8px] overflow-hidden ">
								<img src={event.img} alt="event-details-img" className="w-full aspect-770/411 object-cover" />
								{/* <!-- hall number tag --> */}
								<span class="absolute top-[20px] left-[20px] bg-etBlue rounded-[6px] text-white px-[12px] py-[5px] hidden font-normal text-[16px]">Hall No: 59</span>
							</div>

							{/* <!-- txt --> */}
							<div className="et-event-details-rich-text">
								<div dangerouslySetInnerHTML={{ __html: event.detailsText }}></div>

								<div class="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px] mt-[38px] mb-[33px]">
									{event.innerImgs.map((img, index) => (
										<img key={index} src={img} alt="event-details-img" class="max-h-[306px] w-full object-cover rounded-[8px]" />
									))}
								</div>

								<div dangerouslySetInnerHTML={{ __html: event.detailsText2 }}></div>
							</div>

							{/* <!-- actions --> */}
							<div class="border-y border-[#d9d9d9] py-[24px] flex items-center xxs:flex-col gap-[20px]">
								<a href="#" class="inline-flex items-center h-[50px] rounded-full bg-etBlue px-[20px] text-[17px] font-medium text-white gap-[10px] hover:bg-etGray">
									Register Yourself <FontAwesomeIcon icon={faArrowRight} />
								</a>
								<div class="flex gap-[12px]">
									<span class="icon bg-etBlue w-[50px] aspect-square rounded-full outline-[2px] outline outline-white -outline-offset-[3px] flex items-center justify-center">
										{/* <img src="/assets/img/call-icon.svg" alt="call icon" /> */}
										<FontAwesomeIcon icon={faPhoneVolume} className="text-white text-[20px]" />
									</span>

									<span class="txt font-semibold text-etBlack">
										<span class="block text-[14px] mb-[2px]">Call Us Now</span>
										<a href="tel:+208-555-0112" class="text-[18px] hover:text-etBlue">
											+208-555-0112
										</a>
									</span>
								</div>
							</div>

							{/* <!-- artists --> */}
							<div class="mt-[50px]">
								<h3 class="text-[30px] xs:text-[25px] font-semibold text-etBlack mb-[30px] xs:mb-[15px]">Event Artists</h3>

								{/* <!-- single artist --> */}
								<div class="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
									{/* <!-- img --> */}
									<div class="rounded-[6px] overflow-hidden shrink-0">
										<img src="/assets/img/artist-4.jpg" alt="Artist Image" class="w-[168px] aspect-square" />
									</div>

									{/* <!-- txt --> */}
									<div class="grow">
										{/* <!-- heading  --> */}
										<div class="flex flex-wrap items-center justify-between gap-[10px] border-b border-[#d9d9d9] pb-[15px]">
											<div>
												<h5 class="font-semibold text-[20px] text-etBlack">
													<a href="#" class="hover:text-etBlue">
														Ronald Richards
													</a>
												</h5>
												<span class="inline-block text-etGray2 text-[16px]">Singer</span>
											</div>

											{/* <!-- socials --> */}
											<div class="flex gap-[15px] text-[16px]">
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-facebook-f"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-twitter"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-linkedin-in"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-youtube"></i>
												</a>
											</div>
										</div>

										{/* <!-- description --> */}
										<p class="font-light text-etGray2 pt-[20px] text-[16px]">Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.</p>
									</div>
								</div>

								{/* <!-- single artist --> */}
								<div class="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
									{/* <!-- img --> */}
									<div class="rounded-[6px] overflow-hidden shrink-0">
										<img src="/assets/img/artist-5.jpg" alt="Artist Image" class="w-[168px] aspect-square" />
									</div>

									{/* <!-- txt --> */}
									<div class="grow">
										{/* <!-- heading  --> */}
										<div class="flex flex-wrap items-center justify-between gap-[10px] border-b border-[#d9d9d9] pb-[15px]">
											<div>
												<h5 class="font-semibold text-[20px] text-etBlack">
													<a href="#" class="hover:text-etBlue">
														Leslie Alexander
													</a>
												</h5>
												<span class="inline-block text-etGray2 text-[16px]">Singer</span>
											</div>

											{/* <!-- socials --> */}
											<div class="flex gap-[15px] text-[16px]">
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-facebook-f"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-twitter"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-linkedin-in"></i>
												</a>
												<a href="#" class="text-[#757277] hover:text-etBlue">
													<i class="fa-brands fa-youtube"></i>
												</a>
											</div>
										</div>

										{/* <!-- description --> */}
										<p class="font-light text-etGray2 pt-[20px] text-[16px]">Pellentesque pretium, mi in viverra faucibus, justo nunc dapibus lacus, sit amet consequat diam nisi eu mi. Integer diam erat, accumsan eget nisl eu, maximus feugiat odio. Proin eleifend.</p>
									</div>
								</div>
							</div>
						</div>

						{/* <!-- right sidebar --> */}
						<div class="right max-w-full w-[370px] lg:w-[360px] shrink-0 space-y-[30px]">
							{/* <!-- ticket widget --> */}
							<div class="et-event-details-ticket-widgget border border-[#e5e5e5] rounded-[16px] overflow-hidden">
								{/* <!-- heading --> */}
								<div class="bg-etBlue p-[16px] xxs:p-[12px]">
									<h5 class="font-medium text-[20px] text-white text-center">Select Date and Time</h5>
								</div>

								{/* <!-- body  --> */}
								<div class="p-[22px] lg:p-[16px]">
									{/* <!-- time schedule --> */}
									<div class="flex justify-between items-center mt-[6px] mb-[16px]">
										<h6 class="font-medium text-[16px] text-[#232323]">Time Schedule</h6>

										<div class="flex gap-[20px] items-center text-[16px]" id="et-event-details-ticket-time-slider-nav">
											<button class="prev hover:text-etBlue">
												<i class="fa-solid fa-angle-left"></i>
											</button>
											<button class="next hover:text-etBlue">
												<i class="fa-solid fa-angle-right"></i>
											</button>
										</div>
									</div>

									{/* <!-- slider --> */}
									<div class="et-event-details-ticket-time-slider swiper overflow-visible mb-[24px]">
										<div class="swiper-wrapper">
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
											<div class="swiper-slide w-max group">
												<span class="border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer group-[.swiper-slide-active]:bg-etBlue group-[.swiper-slide-active]:border-etBlue group-[.swiper-slide-active]:text-white">19:00</span>
											</div>
										</div>
									</div>

									{/* <!-- events --> */}
									<form class="space-y-[10px] mb-[30px]">
										<div class="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule1" class="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span class="flex items-center">
													<input type="radio" id="schedule1" name="options" value="schedule1" class="appearance-none" checked />
													<span class="before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">15,00 €</span>
												</span>
											</label>
										</div>

										<div class="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule2" class="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span class="flex items-center">
													<input type="radio" id="schedule2" name="options" value="schedule2" class="appearance-none" />
													<span class="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">13,00 €</span>
												</span>
											</label>
										</div>

										<div class="radio-container border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px]">
											<label for="schedule3" class="flex gap-[15px] relative font-normal text-[14px] text-[#232323]">
												<span>posuere turpis, eget molestie Nulla at nibh et.</span>
												<span class="flex items-center">
													<input type="radio" id="schedule3" name="options" value="schedule3" class="appearance-none" />
													<span class="font-normal text-[14px] text-[#232323] before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 mr-[28px]">14,00 €</span>
												</span>
											</label>
										</div>
									</form>

									{/* <!-- ticket quantity --> */}
									<div class="border-[0.5px] border-[#d9d9d9] px-[80px] xxs:px-[30px] rounded-full mb-[30px]">
										<div class="flex items-center justify-between gap-[15px] py-[17px]">
											<button type="button" id="decreaseButton" class="decrease font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
												<span class="h-[28px] leading-[22px]">&minus;</span>
											</button>
											<span class="text-[16px] font-light">
												<span id="ticketNumber">1</span> Ticket
											</span>

											<button type="button" id="increaseButton" class="increase font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
												<span class="h-[28px] leading-[22px]"> + </span>
											</button>
										</div>
									</div>

									{/* <!-- button --> */}
									<button class="bg-etBlue h-[50px] rounded-full px-[15px] flex items-center justify-center gap-x-[10px] w-full text-white text-[15px] hover:bg-[#000D83]">
										<span>
											<img src="/assets/img/ticket-icon.svg" alt="ticket icon" />
										</span>
										<span>15,00 €-get Tickets Now</span>
									</button>
								</div>
							</div>

							{/* <!-- location map --> */}
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.3318974837207!2d90.4133514479341!3d23.794983684888223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a494861707%3A0x59ab371b6ff2e0fd!2zR3Vsc2hhbiBTcXVhcmUg4KaX4KeB4Kay4Ka24Ka-4KaoIOCmuOCnjeCmleCmr-CmvOCmvuCmsA!5e0!3m2!1sen!2sbd!4v1710998994716!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-[280px] rounded-[30px]"></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
