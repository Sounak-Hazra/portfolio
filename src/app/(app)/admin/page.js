"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'


const page = () => {

    const { data: session } = useSession()

    const [adminName, setadminName] = useState(session ? session.user.email.split("@")[0] : "")


    useEffect(() => {
        console.log(adminName)
    }, [adminName])

    useEffect(() => {
        if (session) {
            setadminName(session.user ? session.user.email.split("@")[0] : "")
        }
    }, [session])

    



    if (!session) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-[var(--bg-color)] text-[var(--text-color)]">
                <div className="p-8 rounded-2xl shadow-lg bg-[var(--card-bg)] text-center max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Sensitive Content</h2>
                    <p className="text-[var(--text-muted)] mb-6">Please log in to access this content.</p>
                    <button
                        onClick={() => signIn("credentials", {
                            callbackUrl:"/admin"
                        })}
                        className="bg-[var(--primary-color)] hover:bg-opacity-90 text-white font-semibold py-2 px-6 rounded-lg transition"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        )
    }
    return (
        <>
            <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] px-6 md:px-12 py-10">
                
                <nav className="h-20 bg-[var(--bg-secondary)] flex items-center px-6 md:px-8 shadow-md relative w-full border-b border-[var(--border-color)] mb-10 rounded-lg">
                    <h1 className="text-2xl md:text-3xl font-extrabold text-[var(--text-heading)]">Welcome, {adminName}</h1>
                    <div className="ml-auto">
                        <Button onClick={signOut} className="font-bold bg-[var(--button-danger)] hover:bg-[var(--button-danger-hover)] px-5 md:px-6 py-2 rounded-lg shadow-md">
                            Sign Out
                        </Button>
                    </div>
                </nav>
                <section className="max-w-4xl mx-auto w-full space-y-12">
                    <div className="text-center text-3xl md:text-5xl font-bold mb-8 text-[var(--text-heading)]">Post Project</div>
                    <div className="bg-[var(--bg-secondary)] p-8 md:p-10 rounded-2xl shadow-lg text-center w-full border border-[var(--border-color)] space-y-4">
                        <p className="text-base md:text-lg text-[var(--text-muted)]">Start a new project and connect with top freelancers.</p>
                        <Link href={"/admin/postproject"} className="inline-block bg-[var(--button-primary)] hover:bg-[var(--button-primary-hover)] px-6 md:px-8 py-3 rounded-lg shadow-md">
                            Create Project
                        </Link>
                    </div>
                    <Separator className="border-[var(--border-color)]" />
                    <div className="text-center text-3xl md:text-5xl font-bold mb-8 text-[var(--text-heading)]">Post Blog</div>
                    <div className="bg-[var(--bg-secondary)] p-8 md:p-10 rounded-2xl shadow-lg text-center w-full border border-[var(--border-color)] space-y-4">
                        <p className="text-base md:text-lg text-[var(--text-muted)]">Share your knowledge and insights with the community.</p>
                        <Link href={"/admin/postblog"} className="inline-block bg-[var(--button-success)] hover:bg-[var(--button-success-hover)] px-6 md:px-8 py-3 rounded-lg shadow-md">
                            Write Blog
                        </Link>
                    </div>
                </section>
            </main>


        </>
    )
}

export default page