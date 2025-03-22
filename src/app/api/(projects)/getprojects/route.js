import projects from "../../../../../models/projects";
import { NextResponse } from "next/server";
import connectDB from "@/lib/connect";
import { getToken } from "next-auth/jwt";

export async function GET(req) {
    try {
        await connectDB()
        const allProjects = await projects.aggregate([
            {
              $group: {
                _id: "$category", 
                projects: { $push: "$$ROOT" } 
              }
            }
        ]);
        
        if (!allProjects) {
            return NextResponse.json({message:"Error: No data found"},{status:404})
        }

        return NextResponse.json({message:"Data fetched successfully",data : allProjects},{status:200})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:"Error : Internal server error.",},{status:500})
    }
}