import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
	const testimonials = [
		{
			rating: 5,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-1.png",
				name: "David Anderson",
				designation: "CEO, Eventek",
			},
		},
		{
			rating: 4,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-2.png",
				name: "Sarah Johnson",
				designation: "Manager, Eventek",
			},
		},
		{
			rating: 3,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-3.png",
				name: "John Doe",
				designation: "Director, Eventek",
			},
		},
		{
			rating: 3,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-1.png",
				name: "Emily Davis",
				designation: "Reviewer, Eventek",
			},
		},
		{
			rating: 4,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-1.png",
				name: "Emily Davis",
				designation: "Reviewer, Eventek",
			},
		},
		{
			rating: 5,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-1.png",
				name: "Emily Davis",
				designation: "Reviewer, Eventek",
			},
		},
		{
			rating: 5,
			highlight: "Eventek Special Event on Business",
			review: "Choosing eventek was one of the best decisions for our marketing strategy. They not only promised results but delivered them consistently. Trustworthy, reliable, and results-oriented. We're grateful for their strategic insights and seamless execution.",
			reviewer: {
				img: "../assets/img/reviewer-1.png",
				name: "Emily Davis",
				designation: "Reviewer, Eventek",
			},
		},
	];
	return (
		<section className="et-testimonial bg-[#EEF4FF] relative z-[1] overflow-hidden py-[130px] lg:py-[80px] md:py-[60px] before:absolute before:inset-0 before:-z-[1] before:bg-[url('../assets/img/testimonial-bg.png')] before:bg-no-repeat before:bg-cover before:mix-blend-multiply before:opacity-[0.03] px-[12px]">
			{/* <!-- slider --> */}
			<Swiper
				className="et-testimonial-slider overflow-visible"
				modules={[Autoplay]}
				autoplay
				loop
				spaceBetween={20}
				slidesPerView={4}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					576: {
						slidesPerView: 1.5,
					},
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 2.4,
					},
					1200: {
						slidesPerView: 2.8,
						spaceBetween: 25,
					},
					1400: {
						slidesPerView: 3.2,
						spaceBetween: 30,
					},
					1600: {
						spaceBetween: 30,
						slidesPerView: 4,
					},
				}}
			>
				{testimonials.map((testimonial, idx) => {
					return (
						<SwiperSlide key={idx} className="even:mt-[80px] xs:even:mt-0">
							{/* <!-- single testimony  --> */}
							<div className="swiper-slide even:mt-[80px] xs:even:mt-0">
								<div className="et-testimony p-[40px] lg:p-[30px] md:p-[20px] border border-[#256E56]/10 bg-white rounded-[16px]">
									<div className="ml-auto w-max max-w-full">
										<svg width="46" height="32" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M8.89997 20.8595C7.91 23.3494 6.35003 25.8094 4.26501 28.1795C3.60501 28.9295 3.51501 30.0094 4.055 30.8494C4.47504 31.5094 5.16498 31.8694 5.91498 31.8694C6.125 31.8694 6.33503 31.8545 6.54504 31.7794C10.955 30.4894 21.26 25.9145 21.545 11.2444C21.65 5.58947 17.51 0.72949 12.125 0.17449C9.14001 -0.125525 6.17004 0.849416 3.965 2.82943C1.76004 4.82446 0.5 7.67449 0.5 10.6445C0.5 15.5944 4.01004 19.9295 8.89997 20.8595Z" className="fill-etBlue" />
											<path d="M36.065 0.17449C33.095 -0.125525 30.125 0.849416 27.92 2.82943C25.715 4.82446 24.455 7.67449 24.455 10.6445C24.455 15.5944 27.965 19.9295 32.855 20.8595C31.865 23.3494 30.305 25.8094 28.22 28.1795C27.56 28.9295 27.47 30.0094 28.01 30.8494C28.43 31.5094 29.12 31.8694 29.87 31.8694C30.08 31.8694 30.29 31.8545 30.5 31.7794C34.91 30.4894 45.215 25.9144 45.5 11.2444V11.0345C45.5 5.46944 41.405 0.72949 36.065 0.17449Z" className="fill-etBlue" />
										</svg>
									</div>
									{/* <!-- rating stars --> */}
									<div className="flex gap-[9px] text-[#FFC532] text-[18px] mb-[12px]">
										<span key={idx}>
											{Array.from({ length: testimonial.rating }, (_, i) => (
												<FontAwesomeIcon key={i} icon={faStar} />
											))}
										</span>
									</div>
									<h6 className="text-[18px] mb-[16px]">{testimonial.highlight}</h6>
									<p className="text-etBlack/70 font-normal text-[16px] mb-[40px]">{testimonial.review}</p>
									{/* <!-- single testimonay bottom --> */}
									<div className="flex items-center gap-x-[16px] xxs:flex-col xxs:items-start gap-y-[10px">
										<div className="img rounded-full overflow-hidden p-[7px] w-max max-w-full shrink-0">
											<img src={testimonial.reviewer.img} alt="reviewer image" className="w-[48px] h-[48px]" />
										</div>

										<div className="txt">
											<h5 className="text-etBlack font-normal text-[18px] mb-[3px]">{testimonial.reviewer.name}</h5>
											<h6 className="text-etGray/70 font-normal text-[16px]">{testimonial.reviewer.designation}</h6>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Testimonial;
