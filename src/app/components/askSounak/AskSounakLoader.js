"use client"
import dynamic from "next/dynamic"

// loaded after hydration so it never touches first paint
const AskSounak = dynamic(() => import("./AskSounak"), { ssr: false })

export default function AskSounakLoader() {
  return <AskSounak />
}