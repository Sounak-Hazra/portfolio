"use client"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import dynamic from "next/dynamic"
import RobotButton from "./RobotButton"

const loadModal = () => import("./ChatModal")
const ChatModal = dynamic(loadModal, { ssr: false })

export default function AskSounak() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  if (pathname?.startsWith("/admin")) return null

  return (
    <>
      {!open && <RobotButton onClick={() => setOpen(true)} onPrefetch={loadModal} />}
      <AnimatePresence>
        {open && <ChatModal key="chat" onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}