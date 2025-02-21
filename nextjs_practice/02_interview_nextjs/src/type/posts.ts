export type Post = {
	id: string;
	title: string;
	content: string;
	status: string;
	createdAt: string;
	publishedAt: string;
    status_color: string; // Add the missing property
     image?: { url: string }[];
};
