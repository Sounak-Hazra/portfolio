import { useState, useEffect, useCallback } from "react";

function useSetProjectArray(data, key) {
    const [arrayOfProjects, setArrayOfProjects] = useState([]);
    const [allCategorys,setAllCategorys] = useState([])

    const changeArray = useCallback((key = "all") => {
        if (!data || !Array.isArray(data)) return;
        if (key === "all") {
            let allProjects = []
            data.forEach((e) => {
                allProjects = [...allProjects,...e.projects]
            })
            setArrayOfProjects(allProjects);
        } else {
            let selectedProjects = []
            data.forEach((e) => {
                if (e._id == key) {
                    selectedProjects = [...selectedProjects,...e.projects]
                }
            })
            setArrayOfProjects(selectedProjects)
        }
    }, [data])

    useEffect(() => {
        if (!data || !Array.isArray(data)) return;
        const keys = data.map((e) => e._id)
        changeArray()
        setAllCategorys(keys)
    }, [data, changeArray])

    return { arrayOfProjects,allCategorys,changeArray };
}

export default useSetProjectArray;
