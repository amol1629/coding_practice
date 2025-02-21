"use client"; // Ensures it's a Client Component

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname(); // Get current route

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Products", path: "/product" },
		{ name: "Books", path: "/book" },
		{ name: "Posts", path: "/post" },
	];

	return (
		<aside className="w-64 min-h-screen bg-[#fdfbff] border-r-2 border-purple-300 p-6 flex flex-col justify-between">
			{/* Top Section - Logo & Navigation */}
			<div>
				<div className="text-2xl font-bold text-white bg-purple-600 rounded-xl shadow-lg shadow-purple-400 py-2 block px-4 mb-12 text-center">
					<Link href="/">Next.js Interview</Link>
				</div>

				{/* Navigation */}
				<nav>
					<ul className="space-y-12">
						{navLinks.map(({ name, path }) => (
							<li key={path}>
								<Link
									className={`block w-full rounded-lg font-semibold px-4 py-2 border border-purple-600 text-center transition-all duration-300 ease-linear 
									${
										pathname === path
											? "bg-purple-500 text-white"
											: "text-purple-600 hover:shadow-lg hover:shadow-purple-600 hover:text-white hover:bg-purple-600"
									}
								`}
									href={path}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>

			{/* Bottom Section - Copyright */}
			<p className="text-center text-purple-600 font-semibold text-sm">
				Copyright@2025
			</p>
		</aside>
	);
}
