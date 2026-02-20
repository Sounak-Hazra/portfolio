"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import projectSchema from '../../../../../schemas/projectSchema'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import useCommaSepratedToArr from '../../hooks/useComaSepratedToArray'


const Page = () => {

    const [isLoading, setisLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(projectSchema),
        defaultValues: {
            name: "",
            title: "",
            description:"",
            category: "",
            images: [],
            keyfeatures: [],
            date: Date.now(),
            link: "",
            githublink:""
        },
    })



    const onSubmit = async (data) => {
        try {
            console.log(data)
            setisLoading(true)
            const res = await fetch("/api/postproject", {
                method: "POST",
                body: JSON.stringify(data)
            })

            if (!res.ok) {
                throw new Error(`Something wrong error code ${res.status} `)
            }
            else {
                alert(`Blog posted successfully status ${res.status} `)
            }
        } catch (error) {
            alert(error.message)
        } finally {
            setisLoading(false)
        }
    }

    return (
        <main className="w-full h-fit relative bg-[var(--body-color)]  ">
            {/* {isLoading && <Loader />} */}
            <div className="w-full h-full md:px-[25%] py-10 flex items-center justify-center bg-[var(--nav-color)] min-h-screen px-5 ">
                <div className="w-full h-auto flex flex-col gap-6 bg-[var(--box-colors)] border border-[var(--form-border)] p-10 rounded-xl shadow-[0px_4px_10px_var(--shadow-secondary)]">
                    <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[var(--text)]">
                        Post New Porject
                    </h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Project Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="Enter project name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Title</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="project title"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="project description"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="category"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Category</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="project category"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="images"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Images</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="give coma seprated values (eg: image1,image2...)"
                                                onChange = {(e)=>form.setValue("images",useCommaSepratedToArr(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="keyfeatures"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Keafeatures</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="give coma seprated values (eg: key1,key2,...) "
                                                onChange = {(e)=>form.setValue("keyfeatures",useCommaSepratedToArr(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="date"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Date</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="date"
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                onChange = {(e)=>form.setValue("date" ,new Date(e.target.value))}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="link"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Link</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="link of the project"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                             <FormField
                                control={form.control}
                                name="githublink"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Github Link</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="Github link of the project"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {/* <FormField
                                control={form.control}
                                name="image"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Image URL</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="Enter image URL"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /> */}
                            <Button className="w-40 text-lg font-bold ml-auto bg-[var(--button)] hover:bg-[var(--buttonHover)] text-[var(--text)] rounded-lg py-2 shadow-md">
                                Submit
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </main>

    )
}

export default Page
