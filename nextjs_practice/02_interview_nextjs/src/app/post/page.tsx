"use client";

import React, { useState, useEffect } from "react";
import AllPosts from "@/components/AllPosts";
import { getPosts } from "@/lib/posts";

const PostPage = () => {
	const [posts, setPosts] = useState<any[]>([]);
	const [loading, setLoading] = useState(false);
	const [offset, setOffset] = useState(0);
	const [hasMore, setHasMore] = useState(true);

	const loadPosts = async () => {
		if (loading) return; // Prevent multiple loads at once
		setLoading(true);
		const newPosts = await getPosts({ limit: 30, offset });
		setPosts((prevPosts) => [...prevPosts, ...newPosts]);
		setOffset((prevOffset) => prevOffset + 30);
		if (newPosts.length < 30) setHasMore(false); // No more posts left
		setLoading(false);
	};

	// Load initial posts on mount
	useEffect(() => {
		loadPosts();
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center">
			<header className="p-8 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
				Welcome to Post Page
			</header>

			<main className="flex-grow overflow-y-auto w-full mx-auto rounded-xl">
				<AllPosts
					posts={posts}
					loadMore={loadPosts}
					hasMore={hasMore}
					loading={loading}
				/>

				{!hasMore && (
					<div className="text-center py-4">No more posts</div>
				)}
			</main>
		</div>
	);
};

export default PostPage;
