import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import blogs from "../data/blogsData";
import BlogComment from "./BlogComment";

const BlogDetails = () => {
	const { title } = useParams();
	const blog = blogs.find((blog) => blog.title == title);

	const { setBreadcrumbTitle } = useOutletContext();

	useEffect(() => {
		setBreadcrumbTitle(blog.title);
	}, [blog]);
	const Navigate = useNavigate();

	// const handleTagClick = (tag) => {
	// 	Navigate(`/news?tag=${tag}`);
	// };

	return (
		<>
			{/* <!-- MAIN CONTENT START --> */}
			<div className="left grow space-y-[40px] md:space-y-[30px] w-[calc(100%-370px)] lg:w-[calc(100%-360px)]">
				{/* <!-- post --> */}
				<div>
					<div className="img overflow-hidden rounded-[8px] mb-[30px] relative">
						<img src={blog.img} alt="blog-cover" className="w-full" />

						<div className="bg-etBlue rounded-[6px] absolute top-[20px] left-[20px] text-white px-[20px] py-[13px]">
							<span className="block text-[24px] font-medium leading-[0.7] mb-[6px]">{blog.date}</span>
							<span className="block text-[12px] font-medium leading-[0.7]">{blog.month}</span>
						</div>
					</div>

					{/* <!-- txt --> */}
					<div>
						{/* <!-- infos --> */}
						<div className="flex items-center gap-[30px] mb-[7px]">
							{/* <!-- single info --> */}
							<div className="flex gap-[10px] items-center">
								<span className="shrink-0">
									<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M13.5435 5.19275C13.5435 7.69093 11.4989 9.7355 9.00075 9.7355C6.50262 9.7355 4.45804 7.69093 4.45804 5.19275C4.45804 2.69457 6.50258 0.65 9.00075 0.65C11.4989 0.65 13.5435 2.69458 13.5435 5.19275Z" className="stroke-etBlue" strokeWidth="1.3" />
										<path d="M17.2644 14.6708C17.1052 14.946 16.9241 15.2075 16.7169 15.4769L16.7168 15.4768L16.7089 15.4875C16.4203 15.8791 16.0845 16.2376 15.7295 16.5926C15.4326 16.8894 15.0932 17.1863 14.7568 17.4387C13.0794 18.6913 11.0622 19.3501 8.97815 19.3501C6.89837 19.3501 4.88507 18.694 3.20977 17.4463C2.84588 17.1507 2.51368 16.8795 2.22687 16.5927L2.2199 16.5857L2.21272 16.5789C1.85663 16.2438 1.54239 15.8879 1.24746 15.4876L1.24748 15.4876L1.24414 15.4831C1.06193 15.2402 0.873212 14.9758 0.719199 14.7172C0.836191 14.4561 0.984554 14.1849 1.14522 13.9529L1.14533 13.9529L1.15285 13.9416C2.06985 12.5559 3.53706 11.6391 5.16643 11.415L5.18601 11.4123L5.20539 11.4084C5.23087 11.4033 5.29495 11.4119 5.34548 11.4498L5.34547 11.4498L5.34948 11.4528C6.41651 12.2403 7.6863 12.6456 9.0008 12.6456C10.3153 12.6456 11.5851 12.2403 12.6521 11.4528L12.6521 11.4528L12.6561 11.4498C12.6715 11.4382 12.7403 11.4082 12.8492 11.417C14.4688 11.6438 15.9121 12.557 16.8524 13.9471L16.8524 13.9471L16.8564 13.9529C17.0165 14.1842 17.1557 14.4234 17.2644 14.6708Z" className="stroke-etBlue" strokeWidth="1.3" />
									</svg>
								</span>
								<span className="text-[14px] text-etGray">
									by <a href="#">{blog.author}</a>
								</span>
							</div>

							{/* <!-- single info --> */}
							<div className="flex gap-[10px] items-center">
								<span className="shrink-0">
									<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.05666 18.75H8.05504C7.46832 18.7495 6.91657 18.5207 6.50187 18.1052L0.660341 12.2553C-0.194072 11.3994 -0.194072 10.0065 0.660341 9.15058L8.53478 1.26102C9.3463 0.44792 10.426 0 11.575 0H16.5709C17.7824 0 18.7682 0.985546 18.7682 2.19726V7.17785C18.7682 8.32602 18.3208 9.40532 17.5084 10.2167L9.60951 18.1074C9.19455 18.5218 8.64306 18.75 8.05666 18.75ZM11.575 1.46484C10.8179 1.46484 10.1064 1.75998 9.57163 2.29579L1.69707 10.1853C1.41222 10.4708 1.41222 10.9349 1.69707 11.2203L7.53857 17.0702C7.6767 17.2086 7.86051 17.285 8.05619 17.2851H8.05677C8.1529 17.2854 8.24812 17.2666 8.33694 17.2299C8.42577 17.1931 8.50643 17.1391 8.57427 17.071L16.4732 9.18046C17.0086 8.6458 17.3034 7.93447 17.3034 7.17788V2.19726C17.3034 1.79341 16.9748 1.46484 16.5709 1.46484H11.575ZM13.458 7.43408C12.2465 7.43408 11.2608 6.44853 11.2608 5.23681C11.2608 4.0251 12.2465 3.03955 13.458 3.03955C14.6696 3.03955 15.6553 4.0251 15.6553 5.23681C15.6553 6.44853 14.6696 7.43408 13.458 7.43408ZM13.458 4.50439C13.0542 4.50439 12.7256 4.83296 12.7256 5.23681C12.7256 5.64067 13.0542 5.96924 13.458 5.96924C13.862 5.96924 14.1905 5.64067 14.1905 5.23681C14.1905 4.83296 13.862 4.50439 13.458 4.50439Z" className="fill-etBlue" />
									</svg>
								</span>
								<span className="text-[14px] text-etGray">
									<a href="#">{blog.category}</a>
								</span>
							</div>
						</div>
						<div className="et-blog-details-rich-text">
							<div dangerouslySetInnerHTML={{ __html: blog.textContent }}></div>

							{/* <!-- img --> */}
							<div className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px] lg:gap-[20px] mt-[32px] mb-[33px]">
								{blog.innerImgs.map((img, idx) => (
									<img key={idx} src={img.img} alt="Image" className="rounded-[8px]" />
								))}
							</div>

							<div dangerouslySetInnerHTML={{ __html: blog.textContent2 }}></div>

							<blockquote className="bg-[#EEF2F3] italic rounded-[10px] border-l-4 border-etBlue px-[40px] pr-[120px] py-[30px] mt-[32px] mb-[28px] relative text-[16px] font-light">
								{blog.blockquote}
								<span className="icon absolute right-[40px] bottom-[35px]">
									<svg width="36" height="26" viewBox="0 0 36 26" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0 15.3691H7.71428L2.57139 25.5539H10.2857L15.4286 15.3691V0.0917969H0V15.3691Z" className="fill-etBlue" />
										<path d="M20.5703 0.0917969V15.3691H28.2846L23.1417 25.5539H30.856L35.9989 15.3691V0.0917969H20.5703Z" className="fill-etBlue" />
									</svg>
								</span>
							</blockquote>

							<div dangerouslySetInnerHTML={{ __html: blog.textContent3 }}></div>
						</div>
					</div>
				</div>

				{/* <!-- actions --> */}
				<div className="border-y border-[#d9d9d9] py-[24px] flex items-center justify-between xs:flex-col xs:items-start gap-[20px]">
					<div className="flex gap-[28px] items-center">
						{/* <!-- tags  --> */}
						<div className="flex flex-wrap gap-[13px]">
							<h6 className="font-medium text-[16px] text-etBlack">Tags:</h6>
							{blog.tags.map((tag, idx) => (
								<Link key={idx} to={`/news?tag=${tag}`} className="border border-[#e5e5e5] text-[14px] text-[#181818] px-[12px] py-[5px] rounded-[4px] hover:bg-etBlue hover:border-etBlue hover:text-white cursor-pointer">
									{tag}
								</Link>
							))}
						</div>
					</div>

					{/* <!-- share options --> */}
					<div className="flex gap-[28px] items-center">
						<h6 className="font-medium text-[16px] text-etBlack">Share:</h6>
						<div className="flex gap-[15px] text-[16px]">
							{blog.shareOptions.map((option, idx) => (
								<a key={idx} href={option.link} className="text-[#757277] hover:text-etBlue">
									<FontAwesomeIcon icon={option.icon} />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* <!-- comments --> */}
				<BlogComment comments={blog.comments} />
			</div>
			{/* <!-- MAIN CONTENT END --> */}
		</>
	);
};

export default BlogDetails;
