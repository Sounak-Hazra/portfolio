import mongoose from "mongoose";
import { string } from "zod";

const projectsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required:true
    },
    description: {
        type: String,
        required:true,
    },
    category: {
        type: String,
        default:"all",
    },
    images: {
        type: [String],
        required:true,
    },
    keyfeatures: {
        type: [String],
        required:true,
    },
    date: {
        type: Date,
        default:Date.now()
    },
    link: {
        type: String,
        required:true
    },
    githublink: {
        type: String,
        required: true
    }
})

export default mongoose.models.projects || mongoose.model('projects', projectsSchema);