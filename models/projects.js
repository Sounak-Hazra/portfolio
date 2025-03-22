import mongoose from "mongoose";

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
    }
})

export default mongoose.models.projects || mongoose.model('projects', projectsSchema);