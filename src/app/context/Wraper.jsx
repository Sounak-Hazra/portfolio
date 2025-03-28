"use client"
import { SessionProvider } from "next-auth/react"
import { useRef } from "react"

export default function Wrapper({ children, session }) {



  return (
    <SessionProvider session={session}>
      <div className="" >
        {children}
      </div>
    </SessionProvider>
  )
}
