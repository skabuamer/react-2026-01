import { useState } from "react";
import { Link } from "react-router-dom";
import schedules from "../data/eventsData";

const EventCard = () => {
	const tabs = [
		{ name: "corporate", label: "Corporate event" },
		{ name: "club", label: "Club Gigs" },
		{ name: "concert", label: "Indoor Concerts" },
	];

	const [activeTab, setActiveTab] = useState(tabs[0].name);

	return (
		<div className="py-[130px] lg:py-[80px] md:py-[60px] overflow-hidden">
			{/* <!-- EVENTS SECTION START --> */}
			<section className="et-all-events">
				<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div className="flex lg:flex-wrap items-center justify-between lg:justify-center gap-y-[15px] shadow-[0_4px_50px_rgba(0,0,0,0.07)] mb-[60px] rounded-full xxs:rounded-[30px] lg:py-[15px] px-[30px] pr-[6px] md:px-[20px] md:pr-[6px] py-[20px]">
						<div className="et-events-tab-navs w-[50%] lg:w-full flex xs:flex-wrap shrink-0 lg:justify-center gap-[45px] md:gap-[30px] xxs:gap-[20px] md:gap-y-[15px]">
							{tabs.map((tab, idx) => {
								return (
									<button
										onClick={() => {
											setActiveTab(tab.name);
										}}
										key={idx}
										data-tab={`et-event-tab${idx + 1}`}
										className={`tab-nav border-r border-[#d9d9d9] text-[18px] font-medium text-etBlack pr-[45px] md:pr-[30px] xxs:pr-[20px] hover:text-etBlue group last:border-0 last:pr-0 ${activeTab == tab.name ? "active" : ""}`}
									>
										<span className="group-[.active]:text-etBlue">{tab.label}</span>
									</button>
								);
							})}
						</div>
					</div>

					<div className="et-schedules-tab-container">
						{tabs.map((tab, idx) => (
							<div key={idx} id="et-event-tab1" className={`et-tab ${activeTab == tab.name ? "active" : ""}`}>
								<div className="all-scheduled-events space-y-[30px]">
									{schedules
										.filter((schedule) => schedule.category == tab.name)
										.map((schedule, idx) => (
											//    {/* <!-- single schedule --> */}
											<div key={idx} className="et-schedule flex md:flex-wrap gap-x-[30px] gap-y-[20px] justify-between rev-slide-up">
												{/* <!-- img --> */}
												<div className="w-[270px] h-[226px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] shrink-0 rounded-[20px] overflow-hidden">
													<img src={schedule.img} alt="scehduled-event-cover" />
												</div>

												{/* <!-- text --> */}
												<div className="px-[37px] sm:px-[22px] py-[30px] shadow-[0_4px_60px_rgba(18,96,254,0.12)] w-full rounded-[20px] flex gap-y-[15px] xs:flex-col items-center xs:items-start">
													<div className="et-schedule__heading pr-[40px] sm:pr-[25px] xs:pr-0 mr-[40px] sm:mr-[25px] xs:mr-0 border-r xs:border-r-0 border-[#d9d9d9]">
														{/* <!-- date & time --> */}
														<div className="et-schedule-date-time border border-[rgba(217,217,217,0.89)] py-[7px] px-[15px] rounded-full inline-flex xxs:w-full items-center justify-center gap-x-[24px] gap-y-[10px] mb-[10px] xxs:border-0 xxs:p-0 xxs:justify-start">
															<div className="date flex items-center gap-[10px]">
																<span className="icon">
																	<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<g clipPath="url(#clip0_2043_1443)">
																			<path d="M14.125 1.75H13.375V0.5H12.125V1.75H3.875V0.5H2.625V1.75H1.875C0.841125 1.75 0 2.59113 0 3.625V14.625C0 15.6589 0.841125 16.5 1.875 16.5H14.125C15.1589 16.5 16 15.6589 16 14.625V3.625C16 2.59113 15.1589 1.75 14.125 1.75ZM14.75 14.625C14.75 14.9696 14.4696 15.25 14.125 15.25H1.875C1.53038 15.25 1.25 14.9696 1.25 14.625V6.375H14.75V14.625ZM14.75 5.125H1.25V3.625C1.25 3.28038 1.53038 3 1.875 3H2.625V4.25H3.875V3H12.125V4.25H13.375V3H14.125C14.4696 3 14.75 3.28038 14.75 3.625V5.125Z" fill="var(--et-blue)" />
																			<path d="M3.625 7.6875H2.375V8.9375H3.625V7.6875Z" fill="var(--et-blue)" />
																			<path d="M6.125 7.6875H4.875V8.9375H6.125V7.6875Z" fill="var(--et-blue)" />
																			<path d="M8.625 7.6875H7.375V8.9375H8.625V7.6875Z" fill="var(--et-blue)" />
																			<path d="M11.125 7.6875H9.875V8.9375H11.125V7.6875Z" fill="var(--et-blue)" />
																			<path d="M13.625 7.6875H12.375V8.9375H13.625V7.6875Z" fill="var(--et-blue)" />
																			<path d="M3.625 10.1875H2.375V11.4375H3.625V10.1875Z" fill="var(--et-blue)" />
																			<path d="M6.125 10.1875H4.875V11.4375H6.125V10.1875Z" fill="var(--et-blue)" />
																			<path d="M8.625 10.1875H7.375V11.4375H8.625V10.1875Z" fill="var(--et-blue)" />
																			<path d="M11.125 10.1875H9.875V11.4375H11.125V10.1875Z" fill="var(--et-blue)" />
																			<path d="M3.625 12.6875H2.375V13.9375H3.625V12.6875Z" fill="var(--et-blue)" />
																			<path d="M6.125 12.6875H4.875V13.9375H6.125V12.6875Z" fill="var(--et-blue)" />
																			<path d="M8.625 12.6875H7.375V13.9375H8.625V12.6875Z" fill="var(--et-blue)" />
																			<path d="M11.125 12.6875H9.875V13.9375H11.125V12.6875Z" fill="var(--et-blue)" />
																			<path d="M13.625 10.1875H12.375V11.4375H13.625V10.1875Z" fill="var(--et-blue)" />
																		</g>
																	</svg>
																</span>

																<span className="text-etGray font-normal text-[16px]">{schedule.date}</span>
															</div>

															<div className="time flex items-center gap-[10px] xxs:hidden">
																<span className="icon">
																	<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M10.8505 9.91291L8.61967 8.23979V4.8316C8.61967 4.48891 8.34266 4.21191 7.99998 4.21191C7.65729 4.21191 7.38029 4.48891 7.38029 4.8316V8.54966C7.38029 8.74485 7.47201 8.92892 7.62817 9.04541L10.1069 10.9044C10.2138 10.985 10.3441 11.0285 10.478 11.0284C10.667 11.0284 10.8529 10.9435 10.9744 10.7799C11.1802 10.5066 11.1244 10.118 10.8505 9.91291Z" fill="var(--et-blue)" />
																		<path d="M8 0.5C3.58853 0.5 0 4.08853 0 8.5C0 12.9115 3.58853 16.5 8 16.5C12.4115 16.5 16 12.9115 16 8.5C16 4.08853 12.4115 0.5 8 0.5ZM8 15.2607C4.27266 15.2607 1.23934 12.2273 1.23934 8.5C1.23934 4.77266 4.27266 1.73934 8 1.73934C11.728 1.73934 14.7607 4.77266 14.7607 8.5C14.7607 12.2273 11.7273 15.2607 8 15.2607Z" fill="var(--et-blue)" />
																	</svg>
																</span>

																<span className="text-etGray font-normal text-[16px]">{schedule.time}</span>
															</div>
														</div>

														{/* <!-- title --> */}
														<h3 className="et-schedule-title text-[24px] sm:text-[22px] font-regular text-etBlack leading-[1.25] mb-[16px] anim-text">
															<Link to={`/events/${schedule.id}`} className="hover:text-etBlue">
																{schedule.title.text}
															</Link>
														</h3>

														{/* <!-- location --> */}
														<div className="et-schedule-loaction flex items-center gap-[12px]">
															<span className="icon">
																<svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
																	<path d="M5.99998 0C2.80482 0 0.205383 2.59944 0.205383 5.79456C0.205383 9.75981 5.39098 15.581 5.61176 15.8269C5.81913 16.0579 6.1812 16.0575 6.3882 15.8269C6.60898 15.581 11.7946 9.75981 11.7946 5.79456C11.7945 2.59944 9.1951 0 5.99998 0ZM5.99998 8.70997C4.39241 8.70997 3.0846 7.40212 3.0846 5.79456C3.0846 4.187 4.39245 2.87919 5.99998 2.87919C7.60751 2.87919 8.91532 4.18703 8.91532 5.79459C8.91532 7.40216 7.60751 8.70997 5.99998 8.70997Z" fill="var(--et-blue)" />
																</svg>
															</span>
															<h6 className="text-[16px] text-etGray">{schedule.location}</h6>
														</div>
													</div>

													<div className="flex shrink-0 xxl:flex-col flex-wrap items-center xxl:items-start gap-x-[30px] gap-y-[16px]">
														<Link to={`/events/${schedule.id}`} className="et-btn border border-etBlue text-etBlue inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] font-normal text-[17px] rounded-full hover:!bg-etBlue hover:!text-white">
															{schedule.btn.text}
														</Link>
														<div className="flex items-center">
															<div className="flex *:-ml-[20px]">
																<img src="assets/img/reviewer-1.png" alt="Person" className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0" />
																<img src="assets/img/reviewer-2.png" alt="Person" className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0" />
																<img src="assets/img/reviewer-3.png" alt="Person" className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0" />
																<div className="w-[45px] h-[45px] rounded-full border-[3px] border-white first:ml-0 text-white bg-etBlue font-semibold flex items-center justify-center text-[16px]"></div>
															</div>
															<span className="font-semibold text-etBlue text-[16px] -ml-[29px]">
																<span className="text-white">{schedule.speakers.textSpan}</span>
																{schedule.speakers.text}
															</span>
														</div>
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
			{/* <!-- EVENTS SECTION END --> */}
		</div>
	);
};

export default EventCard;
