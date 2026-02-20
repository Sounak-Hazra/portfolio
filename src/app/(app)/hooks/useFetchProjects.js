import { useCallback, useState } from "react"

const useFetchProjects = () => {
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const fetchProjects = useCallback(async () => {
    setIsLoading(true)
    try {
      const res = await fetch("/api/getprojects", {
        method: "GET",
      })

      if (!res.ok) {
        throw new Error("Internal server error unable to get data.")
      }

      const data = await res.json()
      setProjects(data.data)
      setError("")
      return data.data
    } catch (err) {
      const message = err instanceof Error ? err.message : "Unexpected error"
      setError(message)
      setProjects([])
      return []
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { projects, isLoading, error, fetchProjects }
}

export default useFetchProjects
