import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../components/ContactForm";
import Informations from "../components/Informations";

const ContactPage = () => {
	const contactPageData = {
		videoLink: "https://youtu.be/6KmuL6RcdNA?si=s1RJZZwk6XcqZAwX",
		videoCover: "/assets/img/contact-video-cover.jpg",
		locationMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17361.523329457763!2d90.46439825796337!3d23.825330202730832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c967e0e4e467%3A0x7c43720137a9b4e9!2sBashundhara%20Kings%20Arena!5e0!3m2!1sen!2sbd!4v1712131260359!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
	};

	const contactLeftInofs = [
		{
			icon: "/assets/img/call-msg.svg",
			title: "Call Us 7/24",
			descr: "+208-555-0112",
		},
		{
			icon: "/assets/img/mail.svg",
			title: "Make a Quote",
			descr: "eventek@gmail.com",
		},
		{
			icon: "/assets/img/location-dot-circle.svg",
			title: "Location",
			descr: "4517 Washington ave.",
		},
	];
	return (
		<>
			<Breadcrumb currentPage={"Contact Us"} />

			{/* <!-- CONTACT SECTION START --> */}
			<div class="py-[120px] xl:py-[80px] md:py-[60px]">
				<div class="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div class="grid grid-cols-2 md:grid-cols-1 gap-[60px] xl:gap-[40px] items-center">
						{/* <!-- left side contact infos --> */}
						<Informations infos={contactLeftInofs} videoCover={contactPageData.videoCover} videoLink={contactPageData.videoLink} />

						{/* <!-- right side contact form --> */}
						<div>
							<h2 class="text-[40px] md:text-[35px] sm:text-[30px] xxs:text-[28px] font-medium text-etBlack mb-[7px]">Ready to Get Started?</h2>
							<p class="text-etGray font-light text-[16px] mb-[38px]">Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut blandit felis odio in turpis. Quisque rhoncus, eros in auctor ultrices,</p>

							<ContactForm />
						</div>
					</div>
				</div>
			</div>
			{/* <!-- CONTACT SECTION END --> */}

			{/* <!-- map --> */}
			<div dangerouslySetInnerHTML={{ __html: contactPageData.locationMap }} className="*:w-full *:h-[600px] *:lg:h-[500px] *:md:h-[400px] *:sm:h-[350px]"></div>
		</>
	);
};

export default ContactPage;
