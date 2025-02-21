import HomePage from "@/components/HomePage";
import { Suspense } from "react";

export default function Home() {
	return (
		<main>
			<div className="container mx-auto space-y-8">
				<Suspense fallback={<div>Loading...</div>}>
					<HomePage />
				</Suspense>
			</div>
		</main>
	);
}
