import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
const Faq = () => {
	const [activeFaq, setActiveFaq] = useState({
		left: 0,
		right: 1,
	});

	const toggleFaq = (group, index) => {
		setActiveFaq((prev) => ({
			...prev,
			[group]: prev[group] === index ? null : index,
		}));
	};

	const faqs = [
		{
			question: "What is Eventics?",
			answer: "Eventics is a free, fully responsive HTML5 template for events. It is a perfect choice for any event or conference website.",
		},
		{
			question: "How can I use this template?",
			answer: "Eventics is a free, fully responsive HTML5 template for events. It is a perfect choice for any event or conference website.",
		},
		{
			question: "Where can I get support?",
			answer: "Eventics is a free, fully responsive HTML5 template for events. It is a perfect choice for any event or conference website.",
		},
		{
			question: "Can I modify the template?",
			answer: "Eventics is a free, fully responsive HTML5 template for events. It is a perfect choice for any event or conference website.",
		},
		{
			question: "How to buy an event ticket?",
			answer: "You can buy an event ticket from the ticket section of the website.",
		},
		{
			question: "Organizes eLearning content in one location?",
			answer: "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante",
		},
		{
			question: "How long should a business plan be?",
			answer: "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante",
		},
		{
			question: "What is included in your services?",
			answer: "Nullam faucibus eleifend mi eu varius. Integer vel tincidunt massa, quis semper odio. Mauris et mollis quam. Nullam fringilla erat id ante.",
		},
	];

	const mid = Math.ceil(faqs.length / 2);

	const faqSectionData = {
		subTitle: "Free Questions",
		title: "Frequently Asked Questions",
	};

	return (
		<>
			<Breadcrumb currentPage={"FAQ"} />

			{/* <!-- FAQ SECTION --> */}
			<section className="et-faq py-[130px] xl:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
					{/* <!-- heading --> */}
					<div className="text-center mb-[52px] xl:mb-[42px] md:mb-[32px]">
						<h6 className="et-section-sub-title">{faqSectionData.subTitle}</h6>
						<h2 className="et-section-title">{faqSectionData.title}</h2>
					</div>

					{/* <!-- faq section --> */}
					<div className="grid grid-cols-2 sm:grid-cols-1 gap-[30px]">
						<div className="et-accordion space-y-[16px]">
							{faqs.slice(0, mid).map((faq, idx) => (
								// {/* <!-- single question --> */}
								<div key={idx} onClick={() => toggleFaq("left", idx)} className={`et-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] ${activeFaq.left === idx ? "open" : ""}`}>
									<div className="et-single-accordion-item__header flex items-center justify-between cursor-pointer">
										<h3 className="et-single-accordion-item__title font-semibold text-[20px] text-etBlack">{faq.question}</h3>
										<span className="text-[15px]">
											<FontAwesomeIcon icon={faAngleDoubleRight} />
										</span>
									</div>

									<div className="et-single-accordion-item__body">
										<p className="font-light text-[16px] text-etGray">{faq.answer}</p>
									</div>
								</div>
							))}
						</div>

						<div className="et-accordion space-y-[16px]">
							{faqs.slice(mid).map((faq, idx) => (
								// {/* <!-- single question --> */}
								<div key={idx} onClick={() => toggleFaq("right", idx)} className={`et-single-accordion-item bg-white border border-[#E5E5E5] rounded-[8px] py-[24px] xs:py-[15px] px-[30px] xs:px-[20px] ${activeFaq.right === idx ? "open" : ""}`}>
									<div className="et-single-accordion-item__header flex items-center justify-between cursor-pointer">
										<h3 className="et-single-accordion-item__title font-semibold text-[20px] text-etBlack">{faq.question} </h3>
										<span className="text-[15px]">
											<FontAwesomeIcon icon={faAngleDoubleRight} />
										</span>
									</div>

									<div className="et-single-accordion-item__body">
										<p className="font-light text-[16px] text-etGray">{faq.answer}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{/* <!-- FAQ SECTION --> */}
		</>
	);
};

export default Faq;
