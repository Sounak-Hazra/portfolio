"use client"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { IoClose, IoSend } from "react-icons/io5"
import { MdOutlineSmartToy } from "react-icons/md"

const SUGGESTIONS = [
  "What did he build at AaoStays?",
  "Tell me about Vibe Code Editor",
  "Does he have RAG or LLM experience?",
  "What's his tech stack?",
]

export default function ChatModal({ onClose }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef(null)
  const inputRef = useRef(null)
  const abortRef = useRef(null)

  // esc to close, lock page scroll, focus input
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    inputRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
      abortRef.current?.abort()
    }
  }, [onClose])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }, [messages])

  const send = async (text) => {
    const q = text.trim()
    if (!q || loading) return
    const next = [...messages, { role: "user", content: q }]
    setMessages([...next, { role: "assistant", content: "" }])
    setInput("")
    setLoading(true)

    const ctrl = new AbortController()
    abortRef.current = ctrl
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
        signal: ctrl.signal,
      })
      if (!res.ok || !res.body) throw new Error((await res.text()) || "Request failed")

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value, { stream: true })
        setMessages((m) => {
          const c = [...m]
          c[c.length - 1] = { ...c[c.length - 1], content: c[c.length - 1].content + chunk }
          return c
        })
      }
    } catch (e) {
      if (e.name === "AbortError") return
      setMessages((m) => {
        const c = [...m]
        c[c.length - 1] = { role: "assistant", content: e.message || "Something went wrong, try again." }
        return c
      })
    } finally {
      setLoading(false)
    }
  }

  const last = messages[messages.length - 1]
  const waiting = loading && last?.role === "assistant" && !last.content

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Ask Sounak"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.96 }}
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="flex h-[100dvh] w-full flex-col overflow-hidden border border-gray-800 bg-[var(--box-colors)] shadow-2xl sm:h-[80vh] sm:max-w-2xl sm:rounded-3xl"
      >
        {/* header */}
        <div className="flex items-center gap-3 border-b border-gray-800 px-5 py-4">
          <div className="rounded-2xl bg-[var(--child-box-color)] p-2">
            <MdOutlineSmartToy className="h-6 w-6 text-[var(--svg-border-color)]" />
          </div>
          <div className="flex-1">
            <h2 className="font-extrabold text-[var(--text)]">Ask Sounak</h2>
            <p className="text-xs text-gray-400">AI assistant · answers from his resume and projects</p>
          </div>
          <button onClick={onClose} aria-label="Close chat" className="rounded-full p-2 text-[var(--text)] transition hover:bg-[var(--child-box-color)]">
            <IoClose className="h-5 w-5" />
          </button>
        </div>

        {/* messages */}
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
          {messages.length === 0 && (
            <div className="pt-6 text-center">
              <p className="text-lg font-bold text-[var(--text)]">Hey, ask me anything about Sounak 👋</p>
              <p className="mt-1 text-sm text-gray-400">Projects, experience, skills. Try one of these:</p>
              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)}
                    className="rounded-full border border-gray-700 bg-[var(--child-box-color)] px-4 py-2 text-xs text-[var(--text)] transition hover:border-[var(--svg-border-color)]">
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "rounded-br-sm bg-[var(--button)] text-[var(--svg-border-color)]"
                  : "rounded-bl-sm bg-[var(--child-box-color)] text-[var(--text)]"
              }`}>
                {m.content || (waiting && i === messages.length - 1 ? (
                  <span className="flex gap-1 py-1">
                    {[0, 1, 2].map((d) => (
                      <motion.span key={d} className="h-1.5 w-1.5 rounded-full bg-[var(--svg-border-color)]"
                        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }} />
                    ))}
                  </span>
                ) : null)}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* input */}
        <form onSubmit={(e) => { e.preventDefault(); send(input) }} className="flex items-center gap-2 border-t border-gray-800 p-4">
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={300}
            placeholder="Ask about projects, experience, skills..."
            className="flex-1 rounded-full border border-gray-700 bg-[var(--child-box-color)] px-5 py-3 text-sm text-[var(--text)] outline-none placeholder:text-gray-500 focus:border-[var(--svg-border-color)]"
          />
          <button type="submit" disabled={loading || !input.trim()} aria-label="Send"
            className="rounded-full bg-[var(--button)] p-3 text-[var(--svg-border-color)] transition hover:bg-[var(--buttonHover)] disabled:opacity-40">
            <IoSend className="h-5 w-5" />
          </button>
        </form>
        <p className="pb-3 text-center text-[10px] text-gray-500">AI-generated, so double-check anything important.</p>
      </motion.div>
    </motion.div>
  )
}