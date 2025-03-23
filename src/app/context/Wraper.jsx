"use client"
import { SessionProvider } from "next-auth/react"
import { useRef } from "react"

export default function Wrapper({ children, session }) {
  const pointer = useRef(null)

  const mouseMove = (e) => {
    pointer.current.style.left = `${e.clientX}px`
    pointer.current.style.top = `${e.clientY}px`
  }


  return (
    <SessionProvider  session={session}>
      <div onMouseMove={mouseMove}>

      <div ref={pointer} className='custom-cursor'></div>

      {children}
      </div>
    </SessionProvider>
  )
}
