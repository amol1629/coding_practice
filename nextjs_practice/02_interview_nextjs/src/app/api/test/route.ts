export const GET = async () => {
	console.log("GET request to the homepage");
	return new Response(JSON.stringify({ message: "Hello, World!" }), {
		status: 200,
		headers: { 'Content-Type': 'application/json' },
	});
};
