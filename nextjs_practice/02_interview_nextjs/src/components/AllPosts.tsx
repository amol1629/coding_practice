import { Post } from "@/type/posts";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { formatDate } from "@/lib/formatDate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const AllPosts = ({
	posts,
	loadMore,
	hasMore,
	loading,
}: {
	posts: Post[];
	loadMore: () => void;
	hasMore: boolean;
	loading: boolean;
}) => {
	return (
		<div className="relative p-8 max-h-[8rvh] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
			{posts?.map((post, index) => (
				<Card
					key={`${post.id}-${index}`}
					className="bg-[#fcfeff] hover:bg-sky-50 border-l-4 border-sky-600 relative rounded-xl shadow-md hover:shadow-lg hover:shadow-sky-200 transition-all duration-300"
				>
					<CardHeader className="text-center">
						<CardTitle className="text-xl text-purple-600 font-semibold">
							<span className="ps-2">{post.id}) </span>
							{post.title}
						</CardTitle>
					</CardHeader>

					<CardContent>
						<HoverCard>
							<HoverCardTrigger asChild>
								<span className="cursor-pointer">
									{post.content?.slice(0, 150) ||
										"No content available"}
									...
								</span>
							</HoverCardTrigger>
							<HoverCardContent className="bg-white p-4 shadow-lg rounded-md">
								{post.content ||
									"No additional content available."}
							</HoverCardContent>
						</HoverCard>
					</CardContent>

					<CardFooter className="w-full flex items-center justify-between">
						<Badge
							className="px-3 py-1 rounded-md text-xs font-semibold text-white"
							style={{ backgroundColor: post.status_color }}
						>
							{(post.status ?? "").toUpperCase()}
						</Badge>

						<div className="flex gap-2">
							<p>
								<FontAwesomeIcon icon={faCalendarDay} />
							</p>
							<p className="px-1">
								{formatDate(post.publishedAt)}
							</p>
						</div>

						<div>
							<Link
								className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
								href={`/post/${post.id}`}
							>
								Learn More
							</Link>
						</div>
					</CardFooter>
				</Card>
			))}

			{/* Load More Button */}
			{posts && hasMore && !loading && (
				<div className="w-full flex justify-end items-end">
					<button
						onClick={loadMore}
						className="bg-blue-500 text-white px-4 py-2 rounded-md"
					>
						Load More
					</button>
				</div>
			)}

			{/* Show loading spinner if loading */}
			{loading && (
				<div className="w-full text-center py-4">
					<span>Loading...</span>{" "}
					{/* Add a spinner or message here */}
				</div>
			)}
		</div>
	);
};

export default AllPosts;
