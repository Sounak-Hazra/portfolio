import { useState, useEffect, useCallback } from "react"


const useFetchData = () => {
    const [blogs, setBlogs] = useState([])
    const [isloading, setIsLoading] = useState(false)
    const [error, setError] = useState("")


    //For blogs
    const fetchData = useCallback(async () => {
        setIsLoading(true)
        try {
            const res = await fetch("api/getblogs", {
                method: "GET"
            })

            if (!res.ok) {
                alert("Some thing went wrong unable to get data .")
                return
            }

            const data = await res.json()
            console.log(data)
            setBlogs(data.data)

        } catch (error) {
            alert(error.message)
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }, [])


    
    //Project project 
    const [project, setProject] = useState([]);


    const fetchProjects = useCallback(async () => {
        try {
            const res = await fetch("api/getprojects", {
                method: "GET"
            })

            if (!res.ok) {
                alert("Some unexpected error occured .")
                setProject([])
            } else {
                const data = await res.json()
                setProject(data.data)
            }
        } catch (error) {
            setError(error.message)
            setProject([])
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchProjects()
        fetchData()
    }, [])


    return {
        blogs,
        project
    }
}

export default useFetchData