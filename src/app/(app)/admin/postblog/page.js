"use client"
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import blogSchema from '../../../../../schemas/blogSchema'
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
import LoadingComponent from '@/app/components/(utility)/Loading'


const Page = () => {

    const [isLoading, setisLoading] = useState(false)

    const form = useForm({
        resolver: zodResolver(blogSchema),
        defaultValues: {
            name: "",
            description: "",
            date: Date.now(),
            image: "",
            link:""
        },
    })



    const onSubmit = async (data) => {
        try {
            console.log(data)
            setisLoading(true)
            const res = await fetch("/api/postblog", {
                method: "POST",
                body: JSON.stringify(data)
            })

            if (!res.ok) {
                throw new Error(`Some thing wrong error code ${res.status} `)
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
            {isLoading && <LoadingComponent/>}
            <div className="w-full h-full md:px-[25%] py-10 flex items-center justify-center bg-[var(--nav-color)] min-h-screen">
                <div className="w-full h-auto flex flex-col gap-6 bg-[var(--box-colors)] border border-[var(--form-border)] p-10 rounded-xl shadow-[0px_4px_10px_var(--shadow-secondary)]">
                    <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[var(--text)]">
                        Post New Blog
                    </h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Blog Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="Enter blog name"
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
                                                placeholder="Enter blog description"
                                                {...field}
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
                            />
                            <FormField
                                control={form.control}
                                name="link"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="font-semibold text-xl text-[var(--text)]">Blog URL</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="text"
                                                className="bg-[var(--child-box-color)] text-[var(--text)] border border-[var(--small-box-color)] rounded-md p-3 focus:ring-[var(--svg-border-color)]"
                                                placeholder="Enter blog URL"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
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
