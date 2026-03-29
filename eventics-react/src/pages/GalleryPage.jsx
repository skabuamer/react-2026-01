import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumb from "../components/Breadcrumb";
import galleryItems from "../data/galleryData";

const GalleryPage = () => {
	return (
		<>
			<Breadcrumb currentPage={"Our Gallery"} />

			{/* <!-- GALLERY SECTION START --> */}
			<div className="py-[130px] xl:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
					<div className="grid grid-cols-3 sm:grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px]">
						{galleryItems.slice(0, 5).map((galleryItem, idx) => (
							<div key={idx} id={`galleryItem-${idx + 1}`} className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100 nth-[6n+2]:row-span-2">
								<img src={galleryItem.img} alt="gallery image" className="w-full h-full object-cover" />
								<a href={galleryItem.img} data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
									<FontAwesomeIcon icon={galleryItem.icon} />
								</a>
							</div>
						))}
						<div className="space-y-[30px] lg:space-y-[20px] hidden">
							<div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
								<img src="assets/img/gallery-img-1.jpg" alt="gallery image" className="w-full h-full object-cover" />
								<a href="assets/img/gallery-img-1.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
									<i className="fa-plus fa-regular"></i>
								</a>
							</div>
							<div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
								<img src="assets/img/gallery-img-2.jpg" alt="gallery image" className="w-full h-full object-cover" />
								<a href="assets/img/gallery-img-2.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
									<i className="fa-plus fa-regular"></i>
								</a>
							</div>
						</div>
						<div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100 hidden">
							<img src="assets/img/gallery-img-big.jpg" alt="Gallery Image" className="w-full h-full object-cover" />
							<a href="assets/img/gallery-img-big.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
								<i className="fa-plus fa-regular"></i>
							</a>
						</div>
						<div className="space-y-[30px] lg:space-y-[20px] hidden">
							<div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
								<img src="assets/img/gallery-img-3.jpg" alt="gallery image" className="w-full h-full object-cover" />
								<a href="assets/img/gallery-img-3.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
									<i className="fa-plus fa-regular"></i>
								</a>
							</div>
							<div className="relative z-[1] group before:absolute before:inset-0 before:bg-etBlack/70 before:z-[0] before:opacity-0 before:transition before:duration-[400ms] hover:before:opacity-100">
								<img src="assets/img/gallery-img-4.jpg" alt="gallery image" className="w-full h-full object-cover" />
								<a href="assets/img/gallery-img-4.jpg" data-fslightbox="gallery" className="inline-flex items-center justify-center w-[64px] aspect-square rounded-full bg-white text-[25px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 hover:text-etBlue">
									<i className="fa-plus fa-regular"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- GALLERY SECTION END --> */}
		</>
	);
};

export default GalleryPage;
