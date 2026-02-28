import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import blogs from "../data/blogsData";
import BlogCard from "./BlogCard";

const BlogsListing = ({ query }) => {
	const { setBreadcrumbTitle } = useOutletContext();
	useEffect(() => {
		setBreadcrumbTitle("Latest Blogs");
	}, []);

	return (
		<div className="left grow space-y-[40px] md:space-y-[30px]">
			{/* <!-- single blog --> */}
			{blogs.map((blog, idx) => (
				<BlogCard key={idx} blog={blog} />
			))}

			{/* <!-- PAGINATION START --> */}
			<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full hidden">
				<div className="flex items-center gap-[20px] pt-[60px] justify-center text-[16px]">
					<a href="#" className="">
						<i className="fa-solid fa-arrow-left-long"></i>
					</a>
					<div className="et-pagination flex gap-[10px] items-center">
						<a href="#" className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-etBlue hover:border-etBlue hover:text-white active">
							01
						</a>
						<a href="#" className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-etBlue hover:border-etBlue hover:text-white">
							02
						</a>
						<a href="#" className="border border-[#d9d9d9] rounded-full w-[50px] h-[50px] flex items-center justify-center text-etBlack hover:bg-etBlue hover:border-etBlue hover:text-white">
							03
						</a>
					</div>
					<a href="#" className="">
						<i className="fa-solid fa-arrow-right-long"></i>
					</a>
				</div>
			</div>
			{/* <!-- PAGINATION END --> */}
		</div>
	);
};

export default BlogsListing;
