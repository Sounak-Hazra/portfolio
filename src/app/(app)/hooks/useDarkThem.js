import { useEffect, useState } from "react"
function useDarkThem() {

    const [dark, setDark] = useState(true)
    

    useEffect(() => {
        if (!dark) {
            document.querySelector("body").style.backgroundColor = "white"
        }
        else {
            document.querySelector("body").style.backgroundColor = "#121212"
        }
    },[dark])


    return {dark,setDark}
    
}

export default useDarkThem