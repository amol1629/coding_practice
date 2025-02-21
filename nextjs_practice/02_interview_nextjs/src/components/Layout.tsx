import Header from "@/components/Header";

export default function Layout({
	children,
}: {
	readonly children: React.ReactNode;
}) {
	return (
		<div className="flex min-h-screen">
			{/* Sidebar (Header) */}
			<Header />

			{/* Main Content */}
			<main className="flex-1 bg-[#fefdff]">{children}</main>
		</div>
	);
}
