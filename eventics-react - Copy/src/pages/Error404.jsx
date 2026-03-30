import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const Error404 = () => {
	const error404Data = {
		img: "assets/img/404-img.png",
		titleSpan: "Oops!",
		title: "Page Not Found",
		btn: "Back to Home Page",
		descr: "The page you are looking for does not exist",
	};
	return (
		<>
			<Breadcrumb currentPage={"Pages Not Found"} />
			{/* <!-- 404 SECTION START --> */}
			<div className="py-[130px] xl:py-[80px] md:py-[60px] text-center">
				<div className="container mx-auto max-w-[calc(100%-37.1vw)] xxxl:max-w-[calc(100%-350px)] xl:max-w-[calc(100%-170px)] px-[12px] lg:max-w-full">
					<img src={error404Data.img} alt="illustration" className="mx-auto mb-[34px]" />
					<h2 className="font-medium text-[60px] lg:text-[50px] md:text-[45px] sm:text-[40px] xxs:text-[35px] mb-[3px] anim-text">
						<span className="text-etBlue">{error404Data.titleSpan}</span> {error404Data.title}
					</h2>
					<p className="text-[18px] text-etBlack mb-[41px] lg:mb-[31px] anim-text">{error404Data.descr}</p>
					<Link to="/" className="bg-etBlue h-[56px] rounded-[10px] px-[24px] inline-flex items-center justify-center gap-[10px] font-medium text-[16px] text-white hover:bg-etBlack">
						{error404Data.btn} <FontAwesomeIcon icon={faArrowRightLong} />
					</Link>
				</div>
			</div>
			{/* <!-- 404 SECTION END --> */}
		</>
	);
};

export default Error404;
