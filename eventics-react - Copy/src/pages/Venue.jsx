import Breadcrumb from "../components/Breadcrumb";
import Informations from "../components/Informations";

const Venue = () => {
	const venueData = {
		videoLink: "https://youtu.be/6KmuL6RcdNA?si=s1RJZZwk6XcqZAwX",
		videoCover: "/assets/img/venue-video-cover.jpg",
		rightImage: "/assets/img/venue-img.jpg",
		locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17361.523329457763!2d90.46439825796337!3d23.825330202730832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c967e0e4e467%3A0x7c43720137a9b4e9!2sBashundhara%20Kings%20Arena!5e0!3m2!1sen!2sbd!4v1712131260359!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="w-full h-[600px] lg:h-[500px] md:h-[400px] sm:h-[350px]"></iframe>`,
	};

	const venueLeftInofs = [
		{
			icon: "/assets/img/venue-icon.svg",
			title: "Venue",
			descr: "Mexico, New Jersey Hall",
		},
		{
			icon: "/assets/img/location-dot-circle-stroke.svg",
			title: "Address",
			descr: "4140 Parker Rd. A New Mexico",
		},
		{
			icon: "/assets/img/pen-paper-icon.svg",
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
						<Informations infos={venueLeftInofs} videoCover={venueData.videoCover} videoLink={venueData.videoLink} />

						{/* <!-- right side venue image --> */}
						<div>
							<img src={venueData.rightImage} alt="venue" />
						</div>
					</div>
				</div>
			</div>
			<div dangerouslySetInnerHTML={{ __html: venueData.locationMap }}></div>
			{/* <!-- CONTACT SECTION END --> */}
		</>
	);
};

export default Venue;
