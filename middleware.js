import { NextResponse } from "next/server";
import { MiddlewareRequest } from "@netlify/next";

import { setDynamicProps } from "./lib/netlifyDynamicProps";

// This function can be marked `async` if using `await` inside
export async function middleware(NextRequest) {
  const request = new MiddlewareRequest(NextRequest);
  const response = await request.next();

  return await setDynamicProps(NextRequest, response);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/",
};
