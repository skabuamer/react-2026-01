import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const HeroSlider = () => {
	const slides = [
		{
			subtitle: "Business expo 2024",
			title: "Big Conference",
			titleSpan: "& Workshop",
			bg: "../assets/img/banner-bg-1.jpg",
			btns: [
				{ text: "Register Now", link: "contact.html", primary: true },
				{ text: "View More", link: "#", primary: false },
			],
			videoLink: "https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s",
			bottomTitle: "BUSINESS EXPO",
		},
		{
			subtitle: "Business expo 2023",
			title: "Big Conference",
			titleSpan: "& Workshop",
			bg: "../assets/img/banner-bg-2.jpg",
			btns: [
				{ text: "Register Now", link: "contact.html", primary: true },
				{ text: "View More", link: "#", primary: false },
			],
			videoLink: "https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s",
			bottomTitle: "BUSINESS EXPO",
		},
		{
			subtitle: "Business expo 2025",
			title: "Big Conference",
			titleSpan: "& Workshop",
			bg: "../assets/img/banner-bg-3.jpg",
			btns: [
				{ text: "Register Now", link: "contact.html", primary: true },
				{ text: "View More", link: "#", primary: false },
			],
			videoLink: "https://www.youtube.com/watch?v=AQleI8oFqZo&t=1s",
			bottomTitle: "BUSINESS EXPO",
		},
	];

	return (
		<section className="et-banner bg-etBlue relative z-1">
			<Swiper className="et-banner-slider" modules={[Pagination, Autoplay]} autoplay loop pagination={{ el: ".et-banner-slider-dots", clickable: true }}>
				{slides.map((slide, idx) => {
					return (
						<SwiperSlide key={idx}>
							<div style={{ backgroundImage: `url(${slide.bg})` }} className={`bg-no-repeat bg-cover bg-center pt-[clamp(150px,17.3vw,333px)] pb-[clamp(120px,22vw,422px)] text-white relative overflow-hidden z-1 before:content-normal before:absolute before:inset-0 before:bg-etBlue/40 before:-z-1`}>
								<div className="mx-[15.5em] xxxl:mx-[10em] xxl:mx-[40px] xs:mx-[12px]">
									<div className="flex md:flex-col items-center justify-between gap-x-[30px] gap-y-[30px] md:grid-cols-1">
										<div className="left relative z-20 w-[55%] md:w-full">
											<h6 className="font-kalam font-bold text-[2.4rem] mb-[3px] anim-text">{slide.subtitle}</h6>

											<h1 className="text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px] anim-text">
												{slide.title} <span className="font-normal tracking-tighter"> {slide.titleSpan}</span>
											</h1>

											<div className="et-banner-btns flex flex-wrap items-center gap-[20px]">
												{slide.btns.map((btn, idx) => {
													return (
														<a key={idx} href={btn.link} className={`et-btn inline-flex items-center justify-center gap-x-[13px] h-[45px] px-[15px] font-normal text-[17px] rounded-full ${btn.primary ? "bg-etBlue text-white hover:bg-white! hover:text-etBlue!" : "bg-white text-etBlue hover:bg-etBlue hover:text-white"}`}>
															{btn.text}
														</a>
													);
												})}
											</div>

											{/* <!-- vectors --> */}
											<div className="et-banner-vectors">
												<div className="absolute left-[457px] bottom-[calc(100%+40px)]">
													<img src="/assets/img/banner-vector.png" alt="vector" className="w-[45px] h-[45px]" />
												</div>
												<div className="absolute bottom-0 right-[6px]">
													<img src="/assets/img/banner-vector.png" alt="vector" className="w-[21px] h-[21px]" />
												</div>
											</div>
										</div>

										{/* <!-- video button --> */}
										<div className="et-banner-video-btn w-[40%] md:w-full shrink-0">
											<a href={slide.videoLink} data-fslightbox="banner-video-1" className="w-[135px] aspect-square rounded-full border border-white/20 flex justify-center items-center text-etBlue ml-auto mr-[230px] lg:mr-[150px] md:mr-auto md:ml-0 relative z-[1] text-[18px] before:absolute before:w-[70px] before:h-[70px] before:bg-white before:rounded-full before:-z-[1] before:transition before:duration-[400ms] hover:text-white hover:before:bg-etBlue hover:border-etBlue">
												<FontAwesomeIcon icon={faPlay} />
											</a>
										</div>
									</div>
								</div>

								{/* <!-- bottom title --> */}
								<span className="et-banner-bottom-title text-[clamp(30px,13vw,250px)] font-bold text-white/10 text-center block absolute bottom-[40px] left-0 w-full">{slide.bottomTitle}</span>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="et-banner-slider-dots absolute hidden flex-col right-[40px] xxs:right-[15px] !left-auto z-[1] !top-[50%] -translate-y-[50%] !w-auto *:rounded-full"></div>
		</section>
	);
};

export default HeroSlider;
