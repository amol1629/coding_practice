import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
	const loggedIn: boolean = true;         // Change this to your authentication logic

	if (!loggedIn) {
		return NextResponse.redirect(new URL("/login", req.url));
	}

	return NextResponse.next(); // Continue to the requested route
}

export const config = {
	matcher: ["/product/:path*"],
};
