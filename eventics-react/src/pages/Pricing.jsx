import Breadcrumb from "../components/Breadcrumb";
import EventTabs from "../components/EventTabs";
import PricingPlanInner from "../components/PricingPlanInner";

const Pricing = () => {
	const pricingBannerData = {
		title: {
			first: "Save More",
			second: "With Goodplans.",
		},
		descr: "Choose a plan and get onboard in minutes. Then get $100 credits for your next payment.",
		img: "/assets/img/pricing-banner-img.png",
	};
	return (
		<>
			<Breadcrumb currentPage={"Pricing Plan"} />

			{/* <!-- PRICING PLANS SECTION --> */}
			<section class="pt-[130px] xl:pt-[80px] md:pt-[60px] pb-[65px] xl:pb-[40px] md:pb-[30px]">
				<div class="et-1-container">
					<div class="grid grid-cols-3 md:grid-cols-2 gap-[30px] xs:grid-cols-1 -mr-[30px] xs:mr-0 justify-items-center">
						{/* <!-- pricing plans banner --> */}
						<div class="lg:col-span-3 xs:col-span-full">
							<div class="bg-etBlue rounded-[20px] overflow-hidden text-white max-w-[370px] xxs:max-w-full">
								<div class="p-[40px] sm:p-[30px] pb-0">
									<h3 class="text-[32px] mb-[14px]">
										{pricingBannerData.title.first} <span class="font-semibold">{pricingBannerData.title.second}</span>.
									</h3>
									<p class="font-light text-[18px]">{pricingBannerData.descr}</p>
								</div>
								<img src={pricingBannerData.img} alt="image" />
							</div>
						</div>

						<PricingPlanInner />
					</div>
				</div>
			</section>
			{/* <!-- PRICING PLANS SECTION --> */}

			<EventTabs />
		</>
	);
};

export default Pricing;
