const Pricing = () => {
	const pricingSectionData = {
		subTitle: "Pricing Table",
		title: "Choose Your Tickets",
	};

	const pricingPackages = [
		{
			highlight: false,
			title: "Basic Pass",
			price: "$39.00",
			features: ["Get everything a Conference pass", "Enjoy 2 days of inspiring talks", "Breakout sessions exploring", "hallenging topics, great food.", "With experts at a Workshops"],
			btn: {
				text: "Register Now",
				link: "#",
			},
		},
		{
			highlight: true,
			title: "Standard Pass",
			price: "$59.00",
			features: ["Get everything a Conference pass", "Enjoy 2 days of inspiring talks", "Breakout sessions exploring", "hallenging topics, great food.", "With experts at a Workshops"],
			btn: {
				text: "Register Now",
				link: "#",
			},
		},
		{
			highlight: false,
			title: "Premium Pass",
			price: "$79.00",
			features: ["Get everything a Conference pass", "Enjoy 2 days of inspiring talks", "Breakout sessions exploring", "hallenging topics, great food.", "With experts at a Workshops"],
			btn: {
				text: "Register Now",
				link: "#",
			},
		},
	];

	return (
		<section className="py-[130px] lg:py-[80px] md:py-[60px] relative z-[1]">
			<div className="et-1-container rev-slide-up">
				{/* <!-- section heading --> */}
				<div className="text-center mb-[52px] xl:mb-[42px] md:mb-[32px]">
					<h6 className="et-section-sub-title anim-text">{pricingSectionData.subTitle}</h6>
					<h2 className="et-section-title anim-text">{pricingSectionData.title}</h2>
				</div>

				{/* <!-- pricing --> */}
				<div className="grid grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-[30px] md:gap-[20px]">
					{pricingPackages.map((pricingPackage, idx) => {
						return (
							/* <!-- single pricing --> */
							<div key={idx} className="bg-[url('../assets/img/pricing-bg.jpg')] rounded-[30px] overflow-hidden bg-no-repeat bg-cover bg-center relative z-[1] shadow-[0_4px_60px_rgba(18,96,254,0.12)] rev-slide-up before:absolute before:inset-0 before:bg-etBlue/85 before:-z-[1] text-center">
								<div className={`mx-[56px] md:mx-[36px] rounded-br-[20px] rounded-bl-[20px] text-center py-[6px] ${pricingPackage.highlight ? "bg-[#FFC532]" : "bg-white"}`}>
									<h5 className="font-normal text-[24px] md:text-[22px]">{pricingPackage.title}</h5>
								</div>

								{/* <!-- price --> */}
								<h4 className="font-semibold text-[45px] md:text-[40px] text-white mt-[10px] mb-[12px]">{pricingPackage.price}</h4>

								{/* <!-- features --> */}
								<ul className="border-y border-dashed border-white/25 text-[16px] text-white font-normal py-[23px] space-y-[17px]">
									{pricingPackage.features.map((feature, idx) => {
										return <li key={idx}>{feature}</li>;
									})}
								</ul>

								<a href={pricingPackage.btn.link} className="my-[30px] inline-flex items-center gap-[12px] rounded-full border border-white/20 text-white h-[54px] px-[15px] text-[17px] group hover:bg-white hover:border-white hover:text-etBlue">
									<span className="icon">
										<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M13.1023 17.6473C13.0496 17.6473 12.9979 17.6511 12.9471 17.6578C12.4966 16.1361 11.1883 14.9794 9.5848 14.7503V13.6641H8.41524V14.7503C6.81011 14.9796 5.50077 16.1384 5.05156 17.6624C4.99031 17.6526 4.92753 17.6473 4.86351 17.6473C4.21347 17.6473 3.68652 18.1742 3.68652 18.8242C3.68652 19.4742 4.21347 20.0012 4.86351 20.0012C5.4544 20.0012 5.94345 19.5657 6.0276 18.9982C6.04471 18.9433 6.05393 18.8848 6.05393 18.8242C6.05393 17.3999 7.06993 16.2086 8.41524 15.9366V17.791C8.04998 17.9908 7.80223 18.3786 7.80223 18.8242C7.80223 19.4742 8.32918 20.0012 8.97918 20.0012C9.62922 20.0012 10.1562 19.4742 10.1562 18.8242C10.1562 18.3957 9.92708 18.0208 9.5848 17.815V15.9366C10.8716 16.1968 11.8565 17.2982 11.9398 18.6401C11.9303 18.7001 11.9253 18.7616 11.9253 18.8243C11.9253 19.4743 12.4523 20.0012 13.1023 20.0012C13.7523 20.0012 14.2793 19.4743 14.2793 18.8243C14.2793 18.1743 13.7523 17.6473 13.1023 17.6473Z" className="fill-white group-hover:fill-etBlue transition duration-[0.4s]"></path>
											<path d="M17.2036 6.2168H15.6151C15.2921 6.2168 15.0303 6.47861 15.0303 6.8016V8.5676C15.0303 9.11044 14.5882 9.55211 14.0447 9.55211H13.9074C13.9062 9.55211 13.9051 9.55227 13.904 9.55227V9.55211H4.09592V9.55227C4.09478 9.55227 4.09365 9.55211 4.09252 9.55211H4.07443C3.53096 9.55211 3.08883 9.11044 3.08883 8.5676V6.8016C3.08883 6.47861 2.82701 6.2168 2.50403 6.2168H0.796348C0.47336 6.2168 0.211548 6.47861 0.211548 6.8016C0.211548 7.12458 0.47336 7.3864 0.796348 7.3864H1.91927V8.5676C1.91927 9.75536 2.88608 10.7217 4.07443 10.7217H4.09252C4.09369 10.7217 4.09478 10.7216 4.09592 10.7216V10.9282C4.09592 11.7911 4.79553 12.4908 5.65851 12.4908H12.3414C13.2044 12.4908 13.904 11.7911 13.904 10.9282V10.7216C13.9051 10.7216 13.9063 10.7217 13.9074 10.7217H14.0447C15.2331 10.7217 16.1999 9.7554 16.1999 8.5676V7.3864H17.2036C17.5265 7.3864 17.7884 7.12458 17.7884 6.8016C17.7884 6.47865 17.5265 6.2168 17.2036 6.2168Z" className="fill-white group-hover:fill-etBlue transition duration-[0.4s]"></path>
											<path d="M13.1157 2.14739C13.1157 0.963338 12.1524 0 10.9683 0H7.03167C5.84758 0 4.88428 0.963299 4.88428 2.14739V8.38037H13.1157V2.14739Z" className="fill-white group-hover:fill-etBlue transition duration-[0.4s]"></path>
										</svg>
									</span>
									<span>{pricingPackage.btn.text}</span>
								</a>
							</div>
						);
					})}
				</div>
			</div>

			{/* <!-- vectors --> */}
			<div>
				<img src="/assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute bottom-[214px] left-[63px] -z-[1]" />
				<img src="/assets/img/features-vector-3.png" alt="vector" className="pointer-events-none absolute top-[163px] right-[106px] -z-[1]" />
			</div>
		</section>
	);
};

export default Pricing;
