import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../components/Breadcrumb";
import sponsors from "../data/sponsorsData";

const SponsorsPage = () => {
	const sponsorsSectionData = {
		btnLink: "#",
		btnText: "Become a Sponsor",
	};
	return (
		<>
			<Breadcrumb currentPage={"Our Sponsors"} />
			{/* <!-- SPONSOR SECTION START --> */}
			<div className="py-[130px] xl:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
					{/* <!-- sponsors --> */}
					<div className="flex flex-wrap items-center justify-center gap-y-[60px] lg:gap-y-[40px] gap-x-[76px] xxl:gap-x-[56px] xl:gap-x-[46px] lg:gap-x-[36px] mb-[60px]">
						{sponsors.map((sponsor, idx) => (
							<div key={idx} className="w-[120px]">
								<img src={sponsor.img} alt="sponsor logo" className="w-[80%] mx-auto" />
							</div>
						))}
					</div>

					<div className="text-center">
						<a href={sponsorsSectionData.btnLink} className="bg-etBlue inline-flex items-center justify-center gap-[10px] h-[56px] px-[24px] rounded-[10px] text-white text-[16px] hover:bg-etBlack">
							{sponsorsSectionData.btnText}
							<span className="icon">
								<FontAwesomeIcon icon={faArrowRightLong} />
							</span>
						</a>
					</div>
				</div>
			</div>
			{/* <!-- SPONSOR SECTION END --> */}
		</>
	);
};

export default SponsorsPage;
