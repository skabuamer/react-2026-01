import { useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import BlogSidebar from "../components/BlogSidebar";
import Breadcrumb from "../components/Breadcrumb";
import SearchResult from "../components/SearchResult";

const BlogsPage = () => {
	const [breadcrumbTitle, setBreadcrumbTitle] = useState("Latest Blogs");
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("search");
	const categoryQuery = searchParams.get("category");
	const tagQuery = searchParams.get("tag");
	const finalBreadcrumbTitle = searchQuery ? `Search Results for "${searchQuery}"` : categoryQuery ? `Category: ${categoryQuery}` : tagQuery ? `Tag: ${tagQuery}` : breadcrumbTitle;
	return (
		<>
			<Breadcrumb currentPage={finalBreadcrumbTitle} />

			{/* // blogs */}
			<div className="et-event-details-content py-[130px] lg:py-[80px] md:py-[60px]">
				<div className="container mx-auto max-w-[1200px] px-[12px] xl:max-w-full">
					<div className="flex gap-[30px] lg:gap-[20px] md:flex-col md:items-center">
						{/* <!-- left content --> */}
						{searchQuery || categoryQuery || tagQuery ? <SearchResult searchQuery={searchQuery} categoryQuery={categoryQuery} tagQuery={tagQuery} /> : <Outlet context={{ setBreadcrumbTitle }} />}

						{/* <!-- right sidebar --> */}
						<BlogSidebar />
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogsPage;
