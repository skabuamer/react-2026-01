import { useState } from "react";
import { Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const History = () => {
	const [mainSwiper, setMainSwiper] = useState(null);
	const [timelineSwiper, setTimelineSwiper] = useState(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const historySectionData = {
		subTitle: "Company History",
		title: "Our Eventics International Design Conference History",
	};

	const historyYears = [
		{
			img: "/assets/img/history-img.jpg",
			title: "Welcome to Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/user.jpg",
				name: "Alexsia Jorgina",
				designation: "Co-Founder, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "1985",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Rise of Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-1.png",
				name: "Daniel Jorgina",
				designation: "Director, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "1995",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Premier Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-3.png",
				name: "Thomas Jorgina",
				designation: "Manager, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "2005",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Premier Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-3.png",
				name: "Thomas Jorgina",
				designation: "Manager, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "2010",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Premier Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-3.png",
				name: "Thomas Jorgina",
				designation: "Manager, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "2015",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Premier Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-3.png",
				name: "Thomas Jorgina",
				designation: "Manager, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "2020",
		},
		{
			img: "/assets/img/history-img.jpg",
			title: "Premier Eventics",
			descr: "Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.  where melodies transcend boundaries. Immerse in Experience Harmonia: where melodies transcend boundaries. Immerse in captiva performances that ignite the stage. Unleash your musical senses and embrace rhyth mic bliss.",
			author: {
				img: "/assets/img/reviewer-3.png",
				name: "Thomas Jorgina",
				designation: "Manager, Eventek",
				signature: "/assets/img/signature.png",
			},
			year: "2025",
		},
	];

	return (
		<section className="bg-[#001B52] relative z-[1] before:absolute before:inset-0 before:-z-[1] before:bg-[url('../assets/img/history-bg.jpg')] before:bg-no-repeat before:bg-cover before:bg-center before:mix-blend-screen before:opacity-25 py-[130px] lg:py-[80px] md:py-[60px]">
			<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
				{/* <!-- heading --> */}
				<div className="et-upcoming-events-heading text-center max-w-[60%] mx-auto mb-[52px] xl:mb-[42px] lg:mb-[32px] md:max-w-[70%] sm:max-w-[80%] xs:max-w-full">
					<h6 className="et-section-sub-title !text-white">{historySectionData.subTitle}</h6>
					<h2 className="et-section-title !text-white">{historySectionData.title}</h2>
				</div>

				{/* <!-- main slider --> */}
				<Swiper className="et-history-slider" modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}>
					{historyYears.map((historyYear, idx) => (
						<SwiperSlide key={idx}>
							<div className="grid grid-cols-2 md:grid-cols-1 gap-[30px]">
								<div className="rounded-[20px] overflow-hidden">
									<img src={historyYear.img} alt="History image" className="w-full h-full object-cover" />
								</div>

								<div className="bg-white rounded-[20px] px-[30px] py-[20px] xxs:px-[20px]">
									<h5 className="text-[24px] font-normal mb-[13px]">{historyYear.title}</h5>

									<div className="txt mb-[40px]">
										<p className="font-light text-[16px] text-etGray">{historyYear.descr}</p>
									</div>

									<div className="flex flex-wrap gap-x-[40px] lg:gap-x-[20px] gap-y-[15px] items-center xxs:justify-center">
										{/* <!-- founder --> */}
										<div className="flex items-center gap-x-[15px] border-r xxs:border-r-0 xxs:border-b border-[#d9d9d9] pr-[40px] lg:pr-[20px] xxs:pr-0 xxs:pb-[15px]">
											<div className="img rounded-full overflow-hidden w-[65px] h-[65px] shrink-0">
												<img src={historyYear.author.img} alt="founder image" />
											</div>

											<div className="txt">
												<h5 className="font-semibold text-[20px] text-etBlack mb-[2px]">{historyYear.author.name}</h5>
												<span className="text-[15px] font-normal text-etGray">{historyYear.author.designation}</span>
											</div>
										</div>

										{/* <!-- signature --> */}
										<div>
											<img src={historyYear.author.signature} alt="signature" />
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* <!-- timeline slider as nav for main slider --> */}
				<Swiper
					modules={[Thumbs]}
					watchSlidesProgress={true}
					slidesPerView={"auto"}
					spaceBetween={52}
					onSwiper={setThumbsSwiper}
					breakpoints={{
						0: {
							spaceBetween: 32,
						},
						768: {
							spaceBetween: 52,
						},
					}}
					className="et-history-timeline-slider swiper mt-[30px] lg:mt-[25px] border-t border-[rgba(217,217,217,0.2)]"
				>
					{historyYears.map((historyYear, idx) => (
						//   {/* <!-- single timeline --> */}
						<SwiperSlide key={idx} className="et-history-timeline pt-[54px] lg:pt-[34px] relative cursor-pointer">
							<div>
								<h3 className="font-semibold text-[70px] md:text-[60px] sm:text-[50px] leading-[0.8] text-transparent">{historyYear.year}</h3>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default History;
