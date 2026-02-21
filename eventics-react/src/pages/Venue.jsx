import Breadcrumb from "../components/Breadcrumb";

const Venue = () => {
	return (
		<>
			<Breadcrumb currentPage={"Venue"} />
			{/* <!-- CONTACT SECTION START --> */}
			<div className="py-[120px] xl:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div className="grid grid-cols-2 md:grid-cols-1 gap-[30px] xl:gap-[30px] items-center justify-items-center">
						{/* <!-- left side contact infos --> */}
						<div>
							<div className="bg-etBlue p-[40px] sm:p-[30px] space-y-[24px] text-[16px]">
								{/* <!-- single contact info --> */}
								<div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
									<span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
										<img src="assets/img/venue-icon.svg" alt="icon" />
									</span>

									<div className="txt">
										<span className="font-light">Venue</span>
										<h4 className="font-medium text-[24px]">Mexico, New Jersey Hall</h4>
									</div>
								</div>

								{/* <!-- single contact info --> */}
								<div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
									<span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
										<img src="assets/img/location-dot-circle-stroke.svg" alt="icon" />
									</span>

									<div className="txt">
										<span className="font-light">Address</span>
										<h4 className="font-medium text-[24px]">4140 Parker Rd. A New Mexico </h4>
									</div>
								</div>

								{/* <!-- single contact info --> */}
								<div className="flex flex-wrap items-center gap-[20px] pb-[20px] text-white border-b border-white/30 last:border-0 last:pb-0">
									<span className="icon shrink-0 border border-dashed border-white rounded-full h-[62px] w-[62px] flex items-center justify-center">
										<img src="assets/img/pen-paper-icon.svg" alt="icon" />
									</span>

									<div className="txt">
										<span className="font-light">Topic</span>
										<h4 className="font-medium text-[24px]">Business and Tecnology</h4>
									</div>
								</div>
							</div>

							{/* <!-- video cover --> */}
							<div className="relative">
								<img src="assets/img/venue-video-cover.jpg" alt="video cover" className="w-full object-cover aspect-[573/254]" />
								<a href="https://youtu.be/6KmuL6RcdNA?si=s1RJZZwk6XcqZAwX" data-fslightbox className="video-btn-shadow w-[58px] aspect-square rounded-full bg-white text-[18px] text-etBlue flex items-center justify-center absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%]">
									<i className="fa-solid fa-play"></i>
								</a>
							</div>
						</div>

						{/* <!-- right side venue image --> */}
						<div>
							<img src="assets/img/venue-img.jpg" alt="venue" />
						</div>
					</div>
				</div>
			</div>
			{/* <!-- CONTACT SECTION END --> */}
		</>
	);
};

export default Venue;
