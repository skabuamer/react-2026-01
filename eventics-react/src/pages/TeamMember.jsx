import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";
import speakers from "../data/teamData";

const TeamMember = () => {
	const { id } = useParams();
	const speaker = speakers.find((speaker) => speaker.id == id);

	return (
		<>
			<Breadcrumb currentPage={speaker.name} />

			{/* <!-- TEAM MEMBER DETAILS SECTION START --> */}
			<div class="py-[130px] xl:py-[80px] md:py-[60px]">
				<div class="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div class="flex md:flex-col items-center md:items-start gap-x-[30px] gap-y-[15px] border border-[#E5E5E5] rounded-[12px] p-[30px] xxs:p-[15px]">
						<div class="img shrink-0">
							<img src={speaker.img} alt="team member image" class="w-[370px] xxs:max-w-full aspect-[74/75] rounded-[12px]" />
						</div>

						{/* <!-- txt --> */}
						<div class="txt">
							<h3 class="text-[30px] xxs:text-[25px] font-medium mb-[1px]">{speaker.name}</h3>
							<h6 class="text-etGray text-[16px]">{speaker.label}</h6>
							<p class="font-light text-[16px] text-etGray mt-[22px]">Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a felis accumsan pharetra in dignissim enim. In amet odio mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet imperdiet, augue massa fringilla.</p>

							<div class="infos border-y border-[#E5E5E5] mt-[28px] lg:mt-[18px] mb-[36px] lg:mb-[26px] py-[24px] lg:py-[14px] xs:py-[11px] flex flex-wrap gap-x-[40px] xs:gap-y-[10px] text-[16px] text-etBlack">
								<h6 class=" text-[16px]">{speaker.highlightPoints[0].text}</h6>
								<h6 class="flex items-center gap-[7px] text-[16px]">
									<span class="icon shrink-0">
										<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99967 2.29233C7.74714 1.80279 7.36475 1.39219 6.89439 1.10551C6.42403 0.818824 5.88385 0.667113 5.33301 0.666992C3.67734 0.666992 2.33301 2.01133 2.33301 3.66699C2.33301 5.32266 3.67734 6.66699 5.33301 6.66699C5.88385 6.66687 6.42403 6.51516 6.89439 6.22848C7.36475 5.94179 7.74714 5.5312 7.99967 5.04166C8.25215 5.53125 8.63453 5.94188 9.1049 6.22857C9.57527 6.51527 10.1155 6.66695 10.6663 6.66699C12.322 6.66699 13.6663 5.32266 13.6663 3.66699C13.6663 2.01133 12.322 0.666992 10.6663 0.666992C10.1155 0.667113 9.57532 0.818824 9.10496 1.10551C8.6346 1.39219 8.25221 1.80279 7.99967 2.29233ZM10.6663 1.33366C11.954 1.33366 12.9997 2.37933 12.9997 3.66699C12.9997 4.95466 11.954 6.00033 10.6663 6.00033C9.37867 6.00033 8.33301 4.95466 8.33301 3.66699C8.33301 2.37933 9.37867 1.33366 10.6663 1.33366ZM5.33301 1.33366C6.62067 1.33366 7.66634 2.37933 7.66634 3.66699C7.66634 4.95466 6.62067 6.00033 5.33301 6.00033C4.04534 6.00033 2.99967 4.95466 2.99967 3.66699C2.99967 2.37933 4.04534 1.33366 5.33301 1.33366ZM7.99967 7.58366C8.41301 7.42233 8.86267 7.33366 9.33301 7.33366H11.9997C14.0247 7.33366 15.6663 8.97533 15.6663 11.0003V12.3337C15.6663 12.5989 15.561 12.8532 15.3734 13.0408C15.1859 13.2283 14.9316 13.3337 14.6663 13.3337H1.33301C1.06779 13.3337 0.813437 13.2283 0.625901 13.0408C0.438365 12.8532 0.333008 12.5989 0.333008 12.3337V11.0003C0.333008 8.97533 1.97467 7.33366 3.99967 7.33366H6.66634C7.13667 7.33366 7.58634 7.42233 7.99967 7.58366ZM9.66634 11.0003V12.3337C9.66634 12.4221 9.63122 12.5068 9.56871 12.5694C9.5062 12.6319 9.42141 12.667 9.33301 12.667H1.33301C1.2446 12.667 1.15982 12.6319 1.09731 12.5694C1.03479 12.5068 0.999674 12.4221 0.999674 12.3337V11.0003C0.999674 10.2047 1.31574 9.44162 1.87835 8.87901C2.44096 8.3164 3.20403 8.00033 3.99967 8.00033H6.66634C7.46199 8.00033 8.22505 8.3164 8.78766 8.87901C9.35027 9.44162 9.66634 10.2047 9.66634 11.0003ZM10.276 12.667H14.6663C14.7547 12.667 14.8395 12.6319 14.902 12.5694C14.9646 12.5068 14.9997 12.4221 14.9997 12.3337V11.0003C14.9997 10.2047 14.6836 9.44162 14.121 8.87901C13.5584 8.3164 12.7953 8.00033 11.9997 8.00033H9.33301C9.16267 8.00033 8.99534 8.01466 8.83267 8.04199C9.29799 8.38218 9.6764 8.82742 9.93711 9.34149C10.1978 9.85556 10.3335 10.4239 10.333 11.0003V12.3337C10.333 12.4507 10.313 12.5627 10.276 12.667Z" class="fill-etBlue" />
										</svg>
									</span>
									{speaker.highlightPoints[1].text}
								</h6>
								<h6 class="flex items-center gap-[7px] text-[16px]">
									<span class="icon text-[15px] text-[#FFA41B]">
										<FontAwesomeIcon icon={speaker.highlightPoints[2].icon} />
									</span>
									{speaker.highlightPoints[2].text}
								</h6>
							</div>

							{/* <!-- social links --> */}
							<div class="flex gap-[10px] text-[16px] *:border *:border-etBlue *:text-etBlue *:w-[35px] *:aspect-square *:inline-flex *:items-center *:justify-center">
								{speaker.socials.map((social, index) => (
									<a key={index} href="#" class="hover:bg-etBlue hover:text-white">
										<FontAwesomeIcon icon={social.icon} />
									</a>
								))}
							</div>
						</div>
					</div>

					{/* <!-- educatinal background --> */}
					<h5 class="text-[22px] font-semibold text-etBlack mt-[71px] lg:mt-[61px] sm:mt-[51px] xxs:mt-[41px] mb-[26px]">{speaker.educationalBg.title}</h5>

					<div class="border-t border-[#E5E5E5] pt-[30px] space-y-[30px]">
						{speaker.educationalBg.backgrounds.map((item, index) => (
							// {/* <!-- single background --> */}
							<div key={index}>
								<div class="flex items-center gap-[25px] mb-[23px]">
									<h6 class="font-semibold text-[18px] text-etBlack">{item.title}</h6>
									<div class="border border-etBlue rounded-full px-[16px] py-[3px] text-etBlue text-[14px]">{item.period}</div>
								</div>
								<p class="text-[16px] text-etGray">{item.descr}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* <!-- TEAM MEMBER DETAILS SECTION START --> */}
		</>
	);
};

export default TeamMember;
