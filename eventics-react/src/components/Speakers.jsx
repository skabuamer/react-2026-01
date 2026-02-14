import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Speakers = () => {
	const speakersSectionData = {
		subtitle: "Event Speakers",
		title: "Meet Our Speakers",
	};

	const speakers = [
		{
			img: "/assets/img/speaker-1.jpg",
			socials: [
				{ icon: faFacebookF, link: "#" },
				{ icon: faTwitter, link: "#" },
				{ icon: faInstagram, link: "#" },
				{ icon: faLinkedinIn, link: "#" },
			],
			name: "Esther Howard",
			link: "#",
			label: "Music speaker",
		},
		{
			img: "/assets/img/speaker-2.jpg",
			socials: [
				{ icon: faFacebookF, link: "#" },
				{ icon: faTwitter, link: "#" },
				{ icon: faInstagram, link: "#" },
				{ icon: faLinkedinIn, link: "#" },
			],
			name: "John Doe",
			link: "#",
			label: "Music speaker",
		},
		{
			img: "/assets/img/speaker-3.jpg",
			socials: [
				{ icon: faFacebookF, link: "2#" },
				{ icon: faTwitter, link: "2#" },
				{ icon: faInstagram, link: "2#" },
				{ icon: faLinkedinIn, link: "#" },
			],
			name: "Billie Simmons",
			link: "#",
			label: "Music speaker",
		},
		{
			img: "/assets/img/speaker-1.jpg",
			socials: [
				{ icon: faFacebookF, link: "#" },
				{ icon: faTwitter, link: "#" },
				{ icon: faInstagram, link: "#" },
				{ icon: faLinkedinIn, link: "#" },
			],
			name: "Thomas Smith",
			link: "#",
			label: "Music speaker",
		},
	];

	return (
		<section className="et-speakers py-[130px] lg:py-[80px] md:py-[60px] relative overflow-hidden">
			<div className="et-1-container relative z-[1] rev-slide-up">
				{/* <!-- heading --> */}
				<div className="et-speakers-heading flex xs:flex-col justify-between items-center mb-[46px] xl:mb-[26px] lg:mb-[16px] gap-[15px]">
					<div className="left xs:text-center">
						<h6 className="et-section-sub-title anim-text">{speakersSectionData.subtitle}</h6>
						<h2 className="et-section-title anim-text">{speakersSectionData.title}</h2>
					</div>

					<div className="right">
						<div className="et-speakers-slider-nav flex gap-[16px] sm:gap-[12px]">
							<button className="prev border border-[#D9D9D9] rounded-full w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] text-[18px] text-etBlack hover:bg-etBlue hover:border-etbg-etBlue hover:text-white">
								<FontAwesomeIcon icon={faArrowLeftLong} />
							</button>
							<button className="next border border-[#D9D9D9] rounded-full w-[60px] sm:w-[50px] h-[60px] sm:h-[50px] text-[18px] text-etBlack hover:bg-etBlue hover:border-etbg-etBlue hover:text-white">
								<FontAwesomeIcon icon={faArrowRightLong} />
							</button>
						</div>
					</div>
				</div>

				{/* <!-- slider --> */}
				<Swiper className="et-speakers-slider swiper" modules={[Pagination, Autoplay, Navigation]} slidesPerView={3} spaceBetween={30} loop navigation={{ prevEl: ".et-speakers-slider-nav .prev", nextEl: ".et-speakers-slider-nav .next" }}>
					{speakers.map((speaker, idx) => {
						return (
							// <!-- single speaker -->
							<SwiperSlide key={idx}>
								<div className="et-speaker bg-white rounded-[16px] relative group">
									<div className="et-speaker-img before:absolute before:inset-0 before:bg-gradient-to-t before:from-etBlue before:to-transparent before:opacity-0 before:transition before:duration-[400ms] before:z-[1] group-hover:before:opacity-100">
										<img src={speaker.img} alt="speaker image" className="mx-auto w-full transition duration-[400ms]" />
									</div>

									{/* <!-- socials --> */}
									<div className="et-speaker-socials bg-[#E7EFFF] w-[55px] py-[15px] text-center rounded-full absolute z-[2] -left-[10px] -top-[10px] flex flex-col justify-center text-[20px] text-etGray2 gap-[10px] border-[10px] border-white box-content">
										{speaker.socials.map((social, idx) => {
											return (
												<a key={idx} href={social.link} className="hover:text-etBlue">
													<FontAwesomeIcon icon={social.icon} />
												</a>
											);
										})}
									</div>

									<div className="et-speaker-txt text-center absolute bottom-0 pb-[24px] w-full text-white translate-y-full group-hover:translate-y-0 transition duration-[400ms]">
										<h4 className="et-speaker-name font-medium text-[24px] mb-[3px]">
											<a href={speaker.link} className="hover:text-black">
												{speaker.name}
											</a>
										</h4>
										<h6 className="et-speaker-label font-normal text-[16px]">{speaker.label}</h6>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default Speakers;
