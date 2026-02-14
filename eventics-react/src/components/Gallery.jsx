import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Gallery = () => {
	const gallerySectionData = {
		subTitle: "Gallery",
		title: "2020",
		descr: "Our Events Gallery",
		btn: {
			text: "View All Gallery",
			link: "#",
		},
	};

	const galleryItems = [
		{
			img: "/assets/img/gallery-img-1.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-2.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-3.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-4.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-5.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-6.jpg",
			icon: faPlus,
		},
		{
			img: "/assets/img/gallery-img-7.jpg",
			icon: faPlus,
		},
	];

	return (
		<section className="grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
			{galleryItems.map((galleryItem, idx) => (
				<React.Fragment key={idx}>
					{idx === 6 && (
						<div className="bg-etBlue xxs:col-span-2 relative z-[1] flex items-center justify-center text-center before:absolute before:inset-0 before:bg-[url('../assets/img/gallery-text-bg.jpg')] before:-z-[1] before:mix-blend-multiply p-[15px] xxs:pt-[25px] xxs:pb-[30px]">
							<div>
								<h6 className="et-section-sub-title !text-white before:!bg-white anim-text">{gallerySectionData.subTitle}</h6>
								<span className="block text-white font-semibold text-[100px] leading-[0.86] mb-[13px] xxl:text-[80px] xl:text-[60px] md:!text-[50px] xs:!text-[45px] xs:!mb-[10px] anim-text">{gallerySectionData.title}</span>
								<h2 className="et-section-title !text-white !font-normal mb-[31px] xxl:!text-[40px] xl:!text-[35px] md:!text-[30px] md:mb-[21px] anim-text">{gallerySectionData.descr}</h2>
								<a href={gallerySectionData.btn.link} className="inline-flex items-center justify-center rounded-full border border-white text-[16px] h-[45px] px-[15px] text-white hover:bg-white hover:text-etBlue">
									{gallerySectionData.btn.text}
								</a>
							</div>
						</div>
					)}

					<div key={idx} className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
						<img src={galleryItem.img} alt="gallery image" className="w-full h-full object-cover" />
						<a href={galleryItem.img} data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
							<FontAwesomeIcon icon={galleryItem.icon} />
						</a>
					</div>
				</React.Fragment>
			))}
			;
		</section>
	);
};

export default Gallery;
