"use client"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

const TIPS = [
  "Ask me about Sounak 👋",
  "What has he built?",
  "Ask about his AaoStays work",
  "Curious about his RAG & AI stuff?",
]

const ACCENT = "var(--svg-border-color)"
const BODY = "var(--child-box-color)"
const fill = { transformBox: "fill-box", transformOrigin: "center" }

const botVariants = {
  idle: { y: [0, -5, 0], rotate: 0, transition: { duration: 3, repeat: Infinity, ease: "easeInOut" } },
  dance: { y: [0, -12, 0, -12, 0], rotate: [-7, 7, -7, 7, -7], transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } },
}
const armL = {
  idle: { rotate: [0, 4, 0], transition: { duration: 3, repeat: Infinity } },
  dance: { rotate: [10, 140, 10], transition: { duration: 1, repeat: Infinity, ease: "easeInOut" } },
}
const armR = {
  idle: { rotate: [0, -4, 0], transition: { duration: 3, repeat: Infinity } },
  dance: { rotate: [-10, -140, -10], transition: { duration: 1, repeat: Infinity, ease: "easeInOut", delay: 0.5 } },
}
const shadow = {
  idle: { scaleX: [1, 0.92, 1], opacity: 0.25, transition: { duration: 3, repeat: Infinity } },
  dance: { scaleX: [1, 0.7, 1, 0.7, 1], opacity: 0.18, transition: { duration: 1, repeat: Infinity } },
}
const sparkle = {
  idle: { opacity: 0, scale: 0 },
  dance: (i) => ({
    opacity: [0, 1, 0], scale: [0.3, 1.2, 0.3], y: [0, -10, -18],
    transition: { duration: 1.2, repeat: Infinity, delay: i * 0.3 },
  }),
}
const STAR = "M0 -5 L1.5 -1.5 L5 0 L1.5 1.5 L0 5 L-1.5 1.5 L-5 0 L-1.5 -1.5Z"

export default function RobotButton({ onClick, onPrefetch }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const [dancing, setDancing] = useState(false)
  const [cycleTip, setCycleTip] = useState(false)
  const [tip, setTip] = useState(0)
  const [hover, setHover] = useState(false)

  // eyes follow the cursor
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const ex = useSpring(mx, { stiffness: 120, damping: 14 })
  const ey = useSpring(my, { stiffness: 120, damping: 14 })

  useEffect(() => {
    if (reduce) return
    const move = (e) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r) return
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height / 2)
      const d = Math.hypot(dx, dy) || 1
      const k = Math.min(1, d / 300)
      mx.set((dx / d) * 3 * k)
      my.set((dy / d) * 2.5 * k)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [reduce, mx, my])

  // idle ~7s, then dance 3.5s with a speech bubble
  useEffect(() => {
    if (reduce) return
    let t1, t2
    const loop = () => {
      setDancing(true)
      setCycleTip(true)
      t1 = setTimeout(() => {
        setDancing(false)
        setCycleTip(false)
        setTip((i) => (i + 1) % TIPS.length)
      }, 3500)
      t2 = setTimeout(loop, 10500)
    }
    t2 = setTimeout(loop, 2500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [reduce])

  const state = reduce ? undefined : dancing ? "dance" : "idle"
  const showTip = hover || cycleTip

  return (
    <motion.button
      ref={ref}
      type="button"
      aria-label="Chat with Sounak's AI assistant"
      onClick={onClick}
      onPointerEnter={onPrefetch}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.8 }}
      className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-24 sm:w-28 cursor-pointer"
    >
      <AnimatePresence>
        {showTip && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="absolute bottom-full right-0 mb-1 whitespace-nowrap rounded-2xl rounded-br-sm border border-gray-700 bg-[var(--box-colors)] px-3 py-2 text-xs font-medium text-[var(--text)] shadow-lg"
          >
            {hover ? "Click to chat with me 💬" : TIPS[tip]}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.svg viewBox="0 0 120 150" className="w-full h-auto overflow-visible" animate={state} initial="idle">
        <motion.ellipse cx="60" cy="145" rx="26" ry="4" fill="#000" variants={shadow} style={fill} />

        <motion.g variants={botVariants} style={fill}>
          {/* antenna */}
          <line x1="60" y1="16" x2="60" y2="27" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" />
          <motion.circle
            cx="60" cy="11" r="5" fill={ACCENT} style={{ ...fill, filter: `drop-shadow(0 0 6px ${ACCENT})` }}
            animate={reduce ? undefined : { scale: [1, 1.35, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />

          {/* arms (behind body) */}
          <motion.rect x="22" y="84" width="10" height="28" rx="5" fill={BODY} stroke={ACCENT} strokeWidth="1.5"
            variants={armL} style={{ transformBox: "fill-box", transformOrigin: "50% 10%" }} />
          <motion.rect x="88" y="84" width="10" height="28" rx="5" fill={BODY} stroke={ACCENT} strokeWidth="1.5"
            variants={armR} style={{ transformBox: "fill-box", transformOrigin: "50% 10%" }} />

          {/* legs */}
          <rect x="42" y="120" width="11" height="15" rx="5" fill={BODY} stroke={ACCENT} strokeWidth="1.5" />
          <rect x="67" y="120" width="11" height="15" rx="5" fill={BODY} stroke={ACCENT} strokeWidth="1.5" />

          {/* body */}
          <rect x="34" y="81" width="52" height="40" rx="14" fill={BODY} stroke={ACCENT} strokeWidth="2" />
          <motion.circle cx="60" cy="101" r="8" fill={ACCENT} style={{ ...fill, filter: `drop-shadow(0 0 5px ${ACCENT})` }}
            animate={reduce ? undefined : { scale: [1, 1.12, 1] }} transition={{ duration: 1.6, repeat: Infinity }} />
          <text x="60" y="104.5" textAnchor="middle" fontSize="9" fontWeight="800" fill="#0b0f1a">AI</text>

          {/* neck + head */}
          <rect x="52" y="76" width="16" height="6" rx="2" fill={BODY} stroke={ACCENT} strokeWidth="1.5" />
          <rect x="18" y="42" width="8" height="18" rx="4" fill={BODY} stroke={ACCENT} strokeWidth="1.5" />
          <rect x="94" y="42" width="8" height="18" rx="4" fill={BODY} stroke={ACCENT} strokeWidth="1.5" />
          <rect x="26" y="26" width="68" height="50" rx="18" fill={BODY} stroke={ACCENT} strokeWidth="2" />
          <rect x="34" y="34" width="52" height="34" rx="12" fill="#0b0f1a" />

          {/* eyes follow cursor, blink every few seconds */}
          <motion.g style={{ x: ex, y: ey }}>
            {[48, 72].map((cx) => (
              <motion.ellipse
                key={cx} cx={cx} cy="50" rx="5" ry="6.5" fill={ACCENT}
                style={{ ...fill, filter: `drop-shadow(0 0 4px ${ACCENT})` }}
                animate={reduce ? undefined : { scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.9, 0.94, 0.98, 1] }}
              />
            ))}
            <path d="M52 60 Q60 66 68 60" stroke={ACCENT} strokeWidth="2.2" fill="none" strokeLinecap="round" />
          </motion.g>
        </motion.g>

        {/* sparkles during the dance */}
        {[[12, 34], [108, 28], [106, 76]].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            <motion.path d={STAR} fill={ACCENT} variants={sparkle} custom={i} />
          </g>
        ))}
      </motion.svg>
    </motion.button>
  )
}