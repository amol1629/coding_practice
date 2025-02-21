export async function getProducts() {
	const response = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_URL, {
		next: { revalidate: 86400 }, // Revalidate every 24 hours
		cache: "force-cache", // Use cache for subsequent requests
	});

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	return response.json();
}

export async function getSingleProducts(id) {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_PRODUCTS_URL}/${id}`,
		{
			cache: "no-store", // Change to 'force-cache' for caching
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch products");
	}

	return response.json();
}
