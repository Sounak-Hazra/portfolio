import { useMemo, useState } from "react"

const useFetchProjects = useMemo(() => {
    
    const value = async () => {
        try {
            const res = await fetch("api/getprojects", {
                method: "GET"
            })
    
            if (!res.ok) {
                alert("Some unexpected error occured .")
                throw new Error("Internal server error unable to get data.")
            } else {
                const data = await res.json()
                return data.data
            }
        } catch (error) {
            throw new Error("Some unexpected error occured.")
        } 
    }

    return 
    
}, [])

export default useFetchProjects