import { getSinglePost } from "@/lib/posts";
import React from "react";
import Image from "next/image"; // Import next/image
import { formatDate } from "@/lib/formatDate"; // Assuming formatDate is available

const SinglePost = async ({ params }: { params: { slug: string } }) => {
	const { slug } = await params;

	const result = await getSinglePost(slug);

	console.log("Post: ", result);

	// Destructure the post details
	const {
		title,
		content,
		image,
		hit,
		category,
		status,
		status_color,
		createdAt,
		publishedAt,
	} = result;

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
			<div className="max-w-4xl bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
				<div className="space-y-8">
					{/* Post Image */}
					<div className="relative w-full h-96 overflow-hidden rounded-xl">
						<Image
							src={
								"https://www.postplanner.com/hubfs/what-to-post-on-instagram.png"
							} // Default image fallback
							alt={title}
							layout="responsive"
							width={500}
							height={500}
							className="object-contain w-full h-full transition duration-500 transform hover:scale-105"
						/>
					</div>

					{/* Post Title and Information */}
					<div className="space-y-4">
						<h2 className="text-4xl font-semibold text-purple-900">
							{title}
						</h2>
						<div className="flex justify-between text-gray-600 text-sm">
							<p className="flex items-center gap-2">
								<span className="font-semibold">Category:</span>{" "}
								{category?.name}
							</p>
							<p className="flex items-center gap-2">
								<span className="font-semibold">Status:</span>
								<span
									className={`px-3 py-1 text-xs font-semibold text-white rounded-md`}
									style={{ backgroundColor: status_color }}
								>
									{status?.toUpperCase()}
								</span>
							</p>
						</div>
						<div className="flex items-center text-sm text-gray-500">
							<span className="font-semibold">Created at:</span>{" "}
							{formatDate(createdAt)}
						</div>
						<div className="flex items-center text-sm text-gray-500">
							<span className="font-semibold">Published at:</span>{" "}
							{formatDate(publishedAt)}
						</div>
						<div className="flex items-center text-sm text-gray-500">
							<span className="font-semibold">Views:</span> {hit}
						</div>
					</div>

					{/* Post Content */}
					<div className="text-lg text-gray-700 space-y-4">
						<p>{content}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SinglePost;
