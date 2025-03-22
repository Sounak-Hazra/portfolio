import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  console.log("This is runnig is middleware..")
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET});
  console.log(token)
  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/postproject"],
};
