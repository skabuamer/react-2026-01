import { useState } from "react";

const BlogComment = ({ comments }) => {
	const [commentText, setCommentText] = useState("");
	const [commentAuthorName, setCommentAuthorName] = useState("");
	const [commentAuthorEmail, setCommentAuthorEmail] = useState("");

	const commentSubmitHandler = (e) => {
		e.preventDefault();
		const allComments = [...comments];
		const currentTime = new Intl.DateTimeFormat("en-US", {
			year: "numeric",
			month: "long",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
			hour12: true,
		}).format(new Date());

		comments.push({ author: { img: "/assets/img/speaker-1.jpg", name: commentAuthorName }, time: currentTime, descr: commentText });

		setCommentText("");
		setCommentAuthorName("");
		setCommentAuthorEmail("");
	};

	return (
		<>
			<div className="!mt-[60px] xxs:!mt-[30px]">
				<h5 className="font-medium text-[24px] text-etBlack mb-[32px] xxs:mb-[20px]">{comments.length} Comments</h5>

				<div className="all-comments space-y-[40px] xxs:space-y-[25px]">
					{comments.map((comment, index) => (
						// {/* <!-- single comment --> */}
						<div key={index} className="et-event-details-comment flex xxs:flex-col items-start gap-x-[20px] pb-[40px] xxs:pb-[25px] border-b border-[#ECECEC]">
							<div className="user-img rounded-full overflow-hidden w-[96px] h-[96px] shrink-0">
								<img src={comment.author.img} alt="user" className="object-cover w-full h-full" />
							</div>

							<div className="pt-[17px]">
								<div className="user-info mb-[19px]">
									<h5 className="user-name font-medium text-[20px] text-etBlack mb-[9px]">{comment.author.name}</h5>
									<h6 className="font-normal text-[16px] text-etGray">{comment.time}</h6>
								</div>
								<div className="comment">
									<p className="text-[16px] text-etGray2">{comment.descr}</p>
								</div>

								{/* <button className="h-[30px] px-[16px] bg-etBlue text-[14px] text-white rounded-[6px] mt-[22px] hover:bg-etBlack">Reply</button> */}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* <!-- comment form --> */}
			<div className="!mt-[60px] xxs:!mt-[30px]">
				<h5 className="font-medium text-[24px] text-etBlack mb-[32px] xxs:mb-[20px]">Leave a Comment</h5>

				<form action="#" className="grid grid-cols-2 xxs:grid-cols-1 gap-[30px]">
					<div>
						<label htmlFor="et-comment-form-name" className="block mb-[11px] font-medium text-[16px] text-etBlack">
							Your Name*
						</label>
						<input value={commentAuthorName} onChange={(e) => setCommentAuthorName(e.target.value)} type="text" name="name" id="et-comment-form-name" placeholder="Your Name" className="h-[60px] xxs:h-[50px] text-[16px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none" />
					</div>

					<div>
						<label htmlFor="et-comment-form-email" className="block mb-[11px] font-medium text-[16px] text-etBlack">
							Your Email*
						</label>
						<input value={commentAuthorEmail} onChange={(e) => setCommentAuthorEmail(e.target.value)} type="email" name="email" id="et-comment-form-email" placeholder="Your Email" className="text-[16px] h-[60px] xxs:h-[50px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none" />
					</div>

					<div className="col-span-2 xxs:col-span-1">
						<label htmlFor="et-comment-form-message" className="block mb-[11px] font-medium text-[16px] text-etBlack">
							Your Review*
						</label>
						<textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} name="message" id="et-comment-form-message" placeholder="Write Message" className="h-[200px] text-[16px] py-[18px] px-[20px] xxs:px-[15px] rounded-[4px] border border-[#E5E5E5] w-full focus:outline-none"></textarea>
					</div>

					<div>
						<button onClick={commentSubmitHandler} type="submit" className="bg-etBlue h-[55px] px-[24px] rounded-[8px] text-white text-[16px] hover:bg-etBlack">
							Post Comment{" "}
							<span className="pl-[5px]">
								<i className="fa-solid fa-arrow-right-long"></i>
							</span>
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default BlogComment;
