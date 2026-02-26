import blogs from "../data/blogsData";
import BlogCard from "./BlogCard";

const SearchResult = ({ query }) => {
	const filteredBlogs = blogs.filter((blog) => blog.title.toLowerCase().includes(query.toLowerCase()));

	return (
		<div className="left grow space-y-[40px] md:space-y-[30px]">
			<h2>Search Results for "{query}"</h2>
			{filteredBlogs.length === 0 && <p>No results found</p>}
			{filteredBlogs.map((blog, idx) => (
				<BlogCard key={idx} blog={blog} />
			))}
		</div>
	);
};

export default SearchResult;
