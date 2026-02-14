const Sponsors = () => {
	const sponsorsSectionData = {
		title: "Trusted By Top sponsors",
		btnLink: "#",
	};

	const sponsors = [
		{
			img: "assets/img/sponsor-1.svg",
		},
		{
			img: "assets/img/sponsor-2.svg",
		},
		{
			img: "assets/img/sponsor-3.svg",
		},
		{
			img: "assets/img/sponsor-4.svg",
		},
		{
			img: "assets/img/sponsor-5.svg",
		},
		{
			img: "assets/img/sponsor-6.svg",
		},
	];

	return (
		<div className="flex items-center md:flex-col gap-x-[42px] gap-y-[25px] border border-[#D9D9D9] rounded-[20px] py-[30px] xxs:py-[20px] px-[34px] xxs:px-[16px] mb-[130px] lg:mb-[80px] md:mb-[60px]">
			{/* <!-- left --> */}
			<div className="flex xxs:flex-wrap items-end gap-[40px] xxs:gap-x-[10px] gap-y-[10px] pr-[42px] md:pr-0 border-r md:border-r-0 border-[#D9D9D9] max-w-[230px] md:max-w-full shrink-0">
				<h5 className="font-medium text-[20px] text-etBlack anim-text">{sponsorsSectionData.title}</h5>
				<a href={sponsorsSectionData.btnLink} className="inline-block mb-[8px] group">
					<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0 13.4121L11.1668 2.24543H3.87542V0H15V11.1246H12.7546V3.8332L1.58789 15L0 13.4121Z" className="fill-etBlue group-hover:fill-etBlack transition duration-[400ms]" />
					</svg>
				</a>
			</div>

			{/* <!-- right --> */}
			<div className="flex flex-wrap items-center justify-between md:justify-center gap-[30px] md:gap-[50px] w-full xxs:*:w-[40%]">
				{sponsors.map((sponsor, idx) => {
					return (
						// <!-- single sponsor -->
						<div key={idx} href="#" className="group contrast-0 hover:contrast-100 transition duration-300">
							<img src={sponsor.img} alt="Logo" />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Sponsors;
