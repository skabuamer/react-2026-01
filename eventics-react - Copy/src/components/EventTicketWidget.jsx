import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo, useState } from "react";
import "swiper/css";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const EventTicketWidget = ({ timings, levels, eventName }) => {
	const [selectedTime, setSelectedTime] = useState(null);
	const [selectedTicketIndex, setSelectedTicketIndex] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [errors, setErrors] = useState({
		time: "",
		ticket: "",
	});
	// ✅ derived state (clean!)
	const selectedTicket = useMemo(() => {
		return selectedTicketIndex !== null ? levels[selectedTicketIndex] : null;
	}, [selectedTicketIndex, levels]);

	const totalPrice = useMemo(() => {
		return selectedTicket ? selectedTicket.price * quantity : 0;
	}, [selectedTicket, quantity]);

	// handlers
	const toggleTime = (time) => {
		setSelectedTime((prev) => (prev === time ? null : time));

		setErrors((prev) => ({
			...prev,
			time: "",
		}));
	};

	const toggleTicket = (index) => {
		setSelectedTicketIndex((prev) => (prev === index ? null : index));

		setErrors((prev) => ({
			...prev,
			ticket: "",
		}));
	};

	const increase = () => setQuantity((q) => q + 1);
	const decrease = () => setQuantity((q) => (q > 1 ? q - 1 : q));

	const handlePurchase = (e) => {
		let newErrors = {
			time: "",
			ticket: "",
		};

		if (!selectedTime) {
			newErrors.time = "Please select a time.";
		}

		if (!selectedTicket) {
			newErrors.ticket = "Please select a ticket type.";
		}

		setErrors(newErrors);

		// if any error exists → stop
		if (newErrors.time || newErrors.ticket) return;

		setIsModalOpen(true);
	};
	return (
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
				<div className="mb-[24px]">
					<Swiper modules={[Navigation, FreeMode]} freeMode navigation={{ nextEl: "#et-event-details-ticket-time-slider-nav .next", prevEl: "#et-event-details-ticket-time-slider-nav .prev" }} slidesPerView={4.5} spaceBetween={10} className="et-event-details-ticket-time-slider swiper overflow-visible">
						{timings.map((time, index) => (
							<SwiperSlide key={index} className="w-max group">
								<span onClick={() => toggleTime(time)} className={`border border-[#e5e5e5] rounded-[4px] h-[30px] inline-flex items-center justify-center px-[15px] font-inter font-normal text-[14px] text-[#232323] cursor-pointer ${selectedTime === time ? "bg-etBlue border-etBlue text-white" : ""}`}>
									{time}
								</span>
							</SwiperSlide>
						))}
					</Swiper>
					{errors.time && <p className="text-red-500 text-xl mt-2">{errors.time}</p>}
				</div>

				{/* <!-- ticket level --> */}
				<form className="space-y-[10px] mb-[30px]">
					{levels.map((level, index) => (
						<button type="button" key={index} onClick={() => toggleTicket(index)} className={`relative border border-[#d9d9d9] rounded-[6px] px-[16px] py-[7px] w-full flex justify-between font-normal text-[14px] text-[#232323]`}>
							<span>{level.label}</span>
							<span className={`relative before:content-normal before:absolute before:w-[16px] before:h-[16px] before:border before:border-etBlue before:rounded-full before:bg-white before:right-0 before:top-[50%] before:-translate-y-[50%] before:-z-[1] after:content-normal after:w-[8px] after:h-[8px] after:bg-etBlue after:rounded-full after:mr-[4px] after:opacity-0 after:absolute after:top-[50%] after:-translate-y-[50%] after:right-0 pr-[25px] shrink-0 ${selectedTicketIndex === index ? "after:opacity-100 before:border-etBlue" : ""}`}>{level.price} €</span>
						</button>
					))}
					{errors.ticket && <p className="text-red-500 text-xl mt-2">{errors.ticket}</p>}
				</form>

				{/* <!-- ticket quantity --> */}
				<div className="border-[0.5px] border-[#d9d9d9] px-[80px] xxs:px-[30px] rounded-full mb-[30px]">
					<div className="flex items-center justify-between gap-[15px] py-[17px]">
						<button onClick={decrease} type="button" id="decreaseButton" className="decrease font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
							<span className="h-[28px] leading-[22px]">&minus;</span>
						</button>
						<span className="text-[16px] font-light">
							<span id="ticketNumber">{quantity}</span> Ticket
						</span>

						<button onClick={increase} type="button" id="increaseButton" className="increase font-extralight text-[35px] bg-etBlue/10 w-[28px] aspect-square rounded-full inline-flex items-center justify-center hover:bg-etBlue hover:text-white">
							<span className="h-[28px] leading-[22px]"> + </span>
						</button>
					</div>
				</div>

				{/* <!-- button --> */}
				<button onClick={handlePurchase} className="bg-etBlue h-[50px] rounded-full px-[15px] flex items-center justify-center gap-x-[10px] w-full text-white text-[15px] hover:bg-[#000D83]">
					<span>
						<img src="/assets/img/ticket-icon.svg" alt="ticket icon" />
					</span>
					<span>{totalPrice} €-get Tickets Now</span>
				</button>
				{isModalOpen && (
					<div className="bg-black/90 w-full h-full fixed top-0 left-0 z-50" id="ticketModal">
						<div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-150 bg-white rounded-lg shadow-xl w-full mx-4 max-h-[90vh] overflow-auto bg-white dark:bg-gray-900 border-0 dark:border dark:border-gray-700 max-w-md">
							<div className="p-4">
								<div className="text-center space-y-4">
									<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30">
										<svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										</svg>
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Demo Only!</h3>
										<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{`${quantity} ${selectedTicket?.label} Tickets of ${selectedTime} for ${eventName} have been confirmed.`}</p>
									</div>
									<div className="pt-2">
										<button onClick={() => setIsModalOpen(false)} className="relative inline-flex items-center justify-center rounded-md text-sm font-medium transition-transform duration-75 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden active:scale-[0.97] cursor-pointer text-slate-50 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90 h-10 py-2 px-4 bg-green-500 hover:bg-green-600">
											<span className="relative z-10 flex items-center gap-2">Continue</span>
											<div className="absolute inset-0 z-0"></div>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default EventTicketWidget;
