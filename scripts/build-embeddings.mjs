import { GoogleGenAI } from "@google/genai"
import fs from "node:fs"
import path from "node:path"

const apiKey = process.env.GEMINI_API_KEY
if (!apiKey) throw new Error("GEMINI_API_KEY missing")

const ai = new GoogleGenAI({ apiKey })
const dir = path.join(process.cwd(), "src/lib/rag")
const md = fs.readFileSync(path.join(dir, "knowledge.md"), "utf8")

// one "## Title" section = one chunk
const chunks = md
  .split(/^## /m)
  .map((s) => s.trim())
  .filter(Boolean)
  .map((s) => {
    const [title, ...rest] = s.split("\n")
    return { title: title.trim(), text: `${title.trim()}: ${rest.join(" ").trim()}` }
  })

const res = await ai.models.embedContent({
  model: "gemini-embedding-001",
  contents: chunks.map((c) => c.text),
  config: { taskType: "RETRIEVAL_DOCUMENT", outputDimensionality: 768 },
})

const out = chunks.map((c, i) => ({ ...c, embedding: res.embeddings[i].values }))
fs.writeFileSync(path.join(dir, "embeddings.json"), JSON.stringify(out))
console.log(`Embedded ${out.length} chunks`)