const Features = () => {
	const featuresSectionData = {
		subtitle: "Event Features",
		title: "Unifying For A Better World",
	};
	const features = [
		{ icon: "/assets/img/feature-1.png", title: "Speaker Lineup", descr: "Mauris ultrices ligula eget volutpat aliquet nullam" },
		{ icon: "/assets/img/feature-2.png", title: "Networking People", descr: "Mauris ultrices ligula eget volutpat aliquet nullam" },
		{ icon: "/assets/img/feature-3.png", title: "Engaging Keynote", descr: "Mauris ultrices ligula eget volutpat aliquet nullam" },
		{ icon: "/assets/img/feature-4.png", title: "Networking People", descr: "Mauris ultrices ligula eget volutpat aliquet nullam" },
	];

	return (
		<div className="bg-[#EEF4FF] relative z-1 after:absolute after:inset-0 after:bg-[url(../assets/img/features-bg.png)] after:bg-no-repeat after:bg-cover after:-z-2 after:mix-blend-multiply after:pointer-events-none pb-[130px] xl:pb-[80px] md:pb-[60px] pt-[244px] xl:pt-[194px] md:pt-[174px]">
			<div className="et-1-container rev-slide-up">
				{/* <!-- heading --> */}
				<div className="text-center mb-[52px]">
					<h6 className="et-section-sub-title anim-text">{featuresSectionData.subtitle}</h6>
					<h2 className="et-section-title anim-text">{featuresSectionData.title}</h2>
				</div>

				{/* <!-- cards --> */}
				<div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
					{features.map((feature, idx) => {
						{
							/* <!-- single card --> */
						}
						return (
							<div key={idx} className="rounded-[20px] bg-white overflow-hidden group">
								{/* <!-- icon --> */}
								<div className="w-[146px] aspect-square border-[20px] bg-etBlue border-[#EDF3FE] rounded-full rounded-tr-none ml-auto flex items-center justify-center">
									<img src={feature.icon} alt="Feature icon" className="transition duration-[0.4s] group-hover:-scale-x-100" />
								</div>

								{/* <!-- text --> */}
								<div className="px-[30px] xxl:px-[20px] py-[23px] xxl:py-[18px]">
									<h5 className="font-medium text-[22px] text-etBlack mb-[8px]">
										<a href="#" className="hover:text-etBlue">
											{feature.title}
										</a>
									</h5>
									<p className="font-light text-etGray text-[16px]">{feature.descr}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{/* <!-- vectors --> */}
			<div className="md:hidden">
				<img src="/assets/img/features-vector-1.png" alt="vector" className="pointer-events-none absolute bottom-[130px] left-[40px] -z-[1]" />
				<img src="/assets/img/features-vector-2.png" alt="vector" className="pointer-events-none absolute top-[222px] right-[180px] -z-[1]" />
				<img src="/assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[138px] right-[106px] -z-[1]" />
			</div>
		</div>
	);
};

export default Features;
