"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { Separator } from '@/components/ui/separator'
import "./blog.css"
import Link from 'next/link'

const Blog = ({blogs}) => {

    // const [blogs, setBlogs] = useState([])
    const [isloading, setIsLoading] = useState("")
    const [error, setError] = useState("")

    // const fetchData = useCallback(async () => {
    //     setIsLoading(true)
    //     try {
    //         const res = await fetch("api/getblogs", {
    //             method: "GET"
    //         })

    //         if (!res.ok) {
    //             alert("Some thing went wrong unable to get data .")
    //             return
    //         }

    //         const data = await res.json()
    //         console.log(data)
    //         setBlogs(data.data)

    //     } catch (error) {
    //         alert(error.message)
    //         setError(error.message)
    //     } finally {
    //         setIsLoading(false)
    //     }
    // }, [])


    // useEffect(() => {
    //     fetchData()
    // }, [])

    return (
        <>
            <div className='w-full min-h-full p-5 md:py-7 md:px-7 rounded-3xl  '>
                <h1 className='text-3xl text-[var(--text)] font-extrabold '>
                    Blogs
                </h1>
                <Separator className='w-full my-5 sm:my-8' />
                <div className=' text-[var(--text)]  w-full max-h-full grid-for-blogs '>
                    {
                        blogs.map((e) => {
                            return (
                                <Link href={e.link || "#"} key={e._id} target='blank'>
                                    <div className=' rounded-2xl bg-[var(--small-box-color)] landing-animation-boxes small-box-shadows '>
                                        <div className="relative overflow-hidden rounded-xl">
                                            <img
                                                src={e.image}
                                                alt="Blog image"
                                                className="rounded-xl w-full h-60 object-cover hover:scale-125 transition-all ease-in-out duration-500"
                                            />
                                        </div>
                                        <div className="mt-4 p-4 md:p-6 ">
                                            <p className="text-xs text-gray-500">{new Date(e.date).toDateString()}</p>
                                            <h2 className="text-xl my-3 font-bold text-[var(--text)] hover:text-[var(--svg-border-color)]">
                                                {e.name}
                                            </h2>
                                            <p className=" mt-2 text-sm">
                                                {e.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Blog