import { z } from "zod";

const blogSchema = z.object({
    name: z.string().min(5, { message: "Project name is too short ." }).max(25, { message: "Project name is to big !" }),
    description: z.string(),
    image: z.string(),
    date: z.date().default(Date.now()),
    link: z.string()
})

export default blogSchema