import mongoose from "mongoose";

const blogsSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true
    },
    date: {
        type: Date,
        required:true,
    }
})

export default mongoose.models.blogs || mongoose.model("blogs",blogsSchema)