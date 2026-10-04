import chunks from "./embeddings.json"

const cosine = (a, b) => {
  let dot = 0, na = 0, nb = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    na += a[i] * a[i]
    nb += b[i] * b[i]
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) || 1)
}

export const topChunks = (queryEmbedding, k = 4) =>
  chunks
    .map((c) => ({ title: c.title, text: c.text, score: cosine(queryEmbedding, c.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, k)

export const allChunks = () => chunks.map((c) => ({ title: c.title, text: c.text }))