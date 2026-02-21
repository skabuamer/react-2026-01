const PricingPlanInner = () => {
	const pricingPlans = [
		{
			id: 1,
			title: "Day Pass",
			innerTitle: "What You’ll Get",
			features: ["8 hours usage of our coworking space", "Access to All our rooms", "Get everything a Conference pass", "Enjoy 2 days of inspiring talks", "Breakout sessions exploring"],
			price: "$20",
			duration: "day",
			btn: {
				text: "Choose Now",
				link: "#",
			},
		},
		{
			id: 2,
			title: "Month Pass",
			innerTitle: "What You’ll Get",
			features: ["8 hours usage of our coworking space", "Access to All our rooms", "Get everything a Conference pass", "Enjoy 2 days of inspiring talks", "Breakout sessions exploring"],
			price: "$30",
			duration: "Month",
			btn: {
				text: "Choose Now",
				link: "#",
			},
		},
	];
	return (
		<>
			{pricingPlans.map((plan, idx) => (
				// {/* <!-- single plan --> */}
				<div key={idx} class="bg-etBlue/10 p-[24px] rounded-[20px] flex flex-col justify-between min-h-[550px]">
					<div class="top">
						<div class="flex gap-[20px] items-center mb-[32px] xxs:mb-[16px]">
							<span class="icon shrink-0">
								<img src="assets/img/pricing-plan-icon.svg" alt="icon" />
							</span>
							<h3 class="font-semibold text-[32px]">{plan.title}</h3>
						</div>
						<span class="inline-block text-[22px] text-[#A9A9AA] mb-[24px]">{plan.innerTitle}</span>

						{/* <!-- plan features --> */}
						<ul class="space-y-[24px] pb-[20px] border-b border-dashed border-[#A9A9AA] mb-[25px]">
							{plan.features.map((feature, idx) => (
								<li key={idx} class="font-light text-[18px] text-etBlack pl-[32px] relative before:absolute before:left-0 before:top-[3px] before:bg-[url('../assets/img/checkmark-circle.png')] before:w-[20px] before:aspect-square before:rounded-full">
									{feature}
								</li>
							))}
						</ul>

						{/* <!-- price --> */}
						<h3 class="font-inter font-bold text-[32px] text-etBlack mb-[15px]">
							{plan.price}
							<span class="font-normal text-[18px]">/{plan.duration}</span>
						</h3>
					</div>

					<a href={plan.btn.link} class="inline-flex items-center justify-center bg-etBlue font-normal text-white text-[22px] h-[64px] rounded-[12px] hover:bg-etBlack">
						{plan.btn.text}
					</a>
				</div>
			))}
		</>
	);
};

export default PricingPlanInner;
