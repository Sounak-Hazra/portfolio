import { NextResponse } from "next/server";
import blogs from "../../../../../models/blogs";
import connectDB from "@/lib/connect";

export async function GET(request) {
    try {
        await connectDB()

        const allBlogs = await blogs.find({}).limit(200).sort({ date: -1 })
        
        if (allBlogs.length === 0) {
            return NextResponse.json({message:"Unable to fetch data."},{status:400})
        }

        return NextResponse.json({message:"Data fetched successfully.",data:allBlogs},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Internal server error ."},{status:500})
    }
}

