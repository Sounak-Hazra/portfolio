import { useRef, useState, useEffect } from "react";

const useCrousal = (n) => {
    const parent = useRef(null)
    const buttonParent = useRef(null)
    const [nThChild, setNthChild] = useState(0)

    const next = () => {
        if (!parent) return;
        
        if (n == 1) {
            return
        }
        else if (nThChild >= n - 1) {
            parent.current.children[nThChild].classList.remove("active")
            buttonParent.current.children[nThChild].classList.remove("on")
            setNthChild(0)
        }
        else {
            parent.current.children[nThChild].classList.remove("active")
            buttonParent.current.children[nThChild].classList.remove("on")
            setNthChild(prevNthChild => prevNthChild + 1)
        }
    }

    const prev = () => {

        if (!parent) return;
        if (n == 1) {
            return
        }
        else if (nThChild <= 0) {
            parent.current.children[nThChild].classList.remove("active")
            buttonParent.current.children[nThChild].classList.remove("on")
            setNthChild(n - 1)
        }
        else {
            parent.current.children[nThChild].classList.remove("active")
            buttonParent.current.children[nThChild].classList.remove("on")
            setNthChild(prevNthChild => prevNthChild - 1)
        }
    }

    const changeByDots = (val) => {
        if (!parent) return;
        if (val < 0 && val > n) return 
        else {
            parent.current.children[nThChild].classList.remove("active")
            buttonParent.current.children[nThChild].classList.remove("on")
            setNthChild(val)
        }
    }

    useEffect(() => {
        if (parent.current.children.length != 0) {
            // console.log(parent.current.children[nThChild].classList)
            parent.current.children[nThChild].classList.add("active")
            buttonParent.current.children[nThChild].classList.add("on")
        }
    }, [nThChild])


    return { next, prev, parent, changeByDots,buttonParent }
}


export default useCrousal