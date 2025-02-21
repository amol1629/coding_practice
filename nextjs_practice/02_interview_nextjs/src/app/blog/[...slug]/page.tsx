"use client";
import { useParams } from "next/navigation";
import { blogPosts } from "../blogData"; // Importing the blog data
import Link from "next/link";

export default function BlogPage() {
    const params = useParams();
    
	const slug = Array.isArray(params.slug)
    ? params.slug.join("-")
    : params.slug;
    console.log("Param Route : ",params);
    console.log("Slug Route : ",slug);

    const blogPost = slug ? blogPosts[slug] : undefined;
    console.log("blogPost Route : ", blogPost);
    

	if (!blogPost) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen ">
				<h1 className="text-5xl font-bold text-purple-600 mb-4">404</h1>
				<p className="text-xl text-gray-700">
					Oops! Blog post not found.
				</p>
				<Link
					href="/blog"
					className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
				>
					Go Back to Blog
				</Link>
			</div>
		);
	}

	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="w-1/2 border shadow-lg rounded-xl p-5 bg-white">
				<h1 className="text-2xl font-bold text-center mb-4">
					{blogPost.title}
				</h1>
				<p className="text-gray-700 text-lg">{blogPost.content}</p>
			</div>
		</div>
	);
}
