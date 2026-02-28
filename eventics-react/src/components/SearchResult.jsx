import blogs from "../data/blogsData";
import BlogCard from "./BlogCard";

const SearchResult = ({ searchQuery, categoryQuery, tagQuery }) => {
	const filteredBlogs = blogs.filter((blog) => {
		const matchedSearch = searchQuery ? blog.title.toLowerCase().includes(searchQuery.toLowerCase()) : true;
		const matchedCategory = categoryQuery ? blog.category.toLowerCase() === categoryQuery.toLowerCase() : true;
		const matchedTag = tagQuery ? blog.tags.includes(tagQuery) : true;
		return matchedSearch && matchedCategory && matchedTag;
	});

	return (
		<div className="left grow space-y-[40px] md:space-y-[30px]">
			{filteredBlogs.length === 0 && <p className="text-center text-6xl">No results found</p>}
			{filteredBlogs.map((blog, idx) => (
				<BlogCard key={idx} blog={blog} />
			))}
		</div>
	);
};

export default SearchResult;
