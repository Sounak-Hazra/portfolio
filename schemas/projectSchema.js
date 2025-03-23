import {z} from "zod"

const projectSchema = z.object({
    name: z.string().min(5, { message: "Error : in blog schema minium projectname size is 5." }),
    title: z.string().min(10, { message: "Error : in blog schema minium title size is 10." }).max(50, { message: "Error : in blog schema maximum title size is 25." }),
    description:z.string().min(30,{message:"In description number of words are too less,Should be gretter than 30 ."}).max(200,{message:"In description number of words are more than 200,Should be less than 200 ."}),
    category:z.string().default("all"),
    images: z.array(z.string()),
    keyfeatures: z.array(z.string()),
    date: z.date(),
    link: z.string(),
    githublink: z.string()
})

export default projectSchema