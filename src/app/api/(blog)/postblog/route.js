import { NextResponse } from "next/server";
import blogs from "../../../../../models/blogs";
import connectDB from "@/lib/connect";
import blogSchema from "../../../../../schemas/blogSchema";
import { getToken } from "next-auth/jwt";


export async function POST(request) {
    try {
        
        const token = await getToken({ request, secret: process.env.NEXTAUTH_SECRET });
        if (!token) return NextResponse.json({ message: "You are unauthenticated" }, { status: 401 })
        
        const req = await request.json()

        const { name, description, image, date } = req
        

        const myData = {
            name,
            description,
            image,
            date : new Date(date)
        }

        const isOk = blogSchema.safeParse(myData)

        if (!isOk.success) {
            return NextResponse.json({ message: isOk.error.format() }, { status: 400 })
        }

        await connectDB()

        const newBlog = await blogs.create(myData)

        if (!newBlog) {
            return NextResponse.json({ message: "Error : Enable to save data." }, { status: 503 })
        }

        return NextResponse.json({message:"Data saved successfully."},{status:200})

    } catch (error) {
        console.log(error.message)
        return NextResponse.json({
            message:"Internal server error."
        },{status:500})
    }
}