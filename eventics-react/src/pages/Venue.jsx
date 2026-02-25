import Breadcrumb from "../components/Breadcrumb";
import Informations from "../components/Informations";

const Venue = () => {
	const venueLeftInofs = [
		{
			title: "Venue",
			descr: "Mexico, New Jersey Hall",
		},
		{
			title: "Address",
			descr: "4140 Parker Rd. A New Mexico",
		},
		{
			title: "Topic",
			descr: "Business and Tecnology",
		},
	];
	return (
		<>
			<Breadcrumb currentPage={"Venue"} />
			{/* <!-- CONTACT SECTION START --> */}
			<div className="py-[120px] xl:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div className="grid grid-cols-2 md:grid-cols-1 gap-[30px] xl:gap-[30px] items-center justify-items-center">
						{/* <!-- left side contact infos --> */}
						<Informations infos={venueLeftInofs} videoCover={"/assets/img/venue-video-cover.jpg"} videoLink={"https://youtu.be/6KmuL6RcdNA?si=s1RJZZwk6XcqZAwX"} />

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
