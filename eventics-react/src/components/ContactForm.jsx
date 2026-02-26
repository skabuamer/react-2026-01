import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleContactSubmit = (e) => {
		e.preventDefault();
		alert("Form submitted successfully!");
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<form onSubmit={(e) => handleContactSubmit(e)} class="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]">
			<div>
				<label htmlFor="et-contact-name" class="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Name*
				</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="et-contact-name" placeholder="Your Name" class="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" />
			</div>
			<div>
				<label htmlFor="et-contact-email" class="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Email*
				</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="et-contact-email" placeholder="Your Email" class="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" />
			</div>
			<div class="col-span-2 xxs:col-span-1">
				<label htmlFor="et-contact-message" class="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Message*
				</label>
				<textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="et-contact-message" placeholder="Your Message" class="border border-[#ECECEC] h-[145px] p-[20px] rounded-[4px] w-full focus:outline-none"></textarea>
			</div>
			<div>
				<button type="submit" class="bg-etBlue h-[55px] px-[24px] rounded-[10px] text-[16px] font-medium text-white hover:bg-etBlack">
					Send Message
					<span class="icon pl-[10px]">
						<FontAwesomeIcon icon={faArrowRightLong} />
					</span>
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
