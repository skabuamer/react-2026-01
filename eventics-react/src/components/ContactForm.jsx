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
		<form onSubmit={(e) => handleContactSubmit(e)} className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] xs:gap-[20px] text-[16px]">
			<div>
				<label htmlFor="et-contact-name" className="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Name*
				</label>
				<input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="et-contact-name" placeholder="Your Name" className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" />
			</div>
			<div>
				<label htmlFor="et-contact-email" className="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Email*
				</label>
				<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="et-contact-email" placeholder="Your Email" className="border border-[#ECECEC] h-[55px] px-[20px] xs:px-[15px] rounded-[4px] w-full focus:outline-none" />
			</div>
			<div className="col-span-2 xxs:col-span-1">
				<label htmlFor="et-contact-message" className="font-lato font-semibold text-etBlack block mb-[12px]">
					Your Message*
				</label>
				<textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" id="et-contact-message" placeholder="Your Message" className="border border-[#ECECEC] h-[145px] p-[20px] rounded-[4px] w-full focus:outline-none"></textarea>
			</div>
			<div>
				<button type="submit" className="bg-etBlue h-[55px] px-[24px] rounded-[10px] text-[16px] font-medium text-white hover:bg-etBlack">
					Send Message
					<span className="icon pl-[10px]">
						<FontAwesomeIcon icon={faArrowRightLong} />
					</span>
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
