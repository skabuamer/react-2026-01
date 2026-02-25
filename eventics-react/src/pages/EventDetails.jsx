import { faArrowRight, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import "swiper/css";
import Breadcrumb from "../components/Breadcrumb";
import EventTicketWidget from "../components/EventTicketWidget";
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
									<div key={index} className="border border-[#d9d9d9] rounded-[12px] p-[30px] lg:p-[20px] flex xs:flex-col gap-x-[25px] gap-y-[10px] mb-[30px]">
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
							<EventTicketWidget timings={event.ticket.timings} levels={event.ticket.levels} eventName={event.title.text} />

							{/* <!-- location map --> */}
							<div dangerouslySetInnerHTML={{ __html: event.locationMap }} className="event-map"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default EventDetails;
