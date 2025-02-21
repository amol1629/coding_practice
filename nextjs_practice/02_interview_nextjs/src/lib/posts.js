// lib/posts.ts
export const getPosts = async ({ limit = 30, offset = 0 }) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_POSTS_URL}?_limit=${limit}&_start=${offset}`,
		{
			next: { revalidate: 86400 },
			cache: "force-cache",
		}
	);
	return res.json();
};

export async function getSinglePost(slug) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_POSTS_URL}/${slug}`,
		{
			cache: "no-store", // Change to 'force-cache' for caching
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch particular post");
	}

	return response.json();
}
