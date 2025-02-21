export type Product = {
	id: string;
	image: string,
	title: string;
	price: number;
	description?: string; // Optional property
	rating: Rating;
	imageUrl: string;
	category: string;
	inStock: boolean;
};

export type Rating = {
	rate: number;
	count: number;
};

