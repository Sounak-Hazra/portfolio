import projects from "../../../../../models/projects";
import projectSchema from "../../../../../schemas/projectSchema";
import { NextResponse } from "next/server";
import connectDB from "@/lib/connect";
import { getToken } from "next-auth/jwt";


export async function POST(req) {
    try {
        await connectDB()
        const request = await req.json()
        const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
        if(!token) return NextResponse.json({message:"You are unauthenticated"},{status:401})
        const { name, title, images,category, keyfeatures, date,description } = request
        const projectData = {
            name,
            title,
            images,
            keyfeatures,
            category,
            description,
            date: new Date(date)
        }
        const isOkData = projectSchema.safeParse(projectData)

        if (!isOkData.success) {
            return NextResponse.json({message:"Data validation filed .",error:isOkData.error.format()},{status:400})
        }

        const savedData = await projects.create(projectData)

        if (!savedData) {
            return NextResponse.json({message:"Unable to save data your data."},{status:503})
        }

        return NextResponse.json({message:"Data saved successfully."},{status:200})
        
    } catch (error) {
        return NextResponse.json({message:"Internal Server error !"},{status:500})
    }
}