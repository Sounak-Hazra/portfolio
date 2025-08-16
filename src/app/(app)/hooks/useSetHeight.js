import { useEffect, useRef, useState } from "react";

function useSetheight() {
    const child = useRef(null);
    const parent = useRef(null);
    const [showContrast, setShowContrast] = useState(true);
    const initialHeight = useRef(0)


    useEffect(() => {
        if (initialHeight.current == 0) {
            initialHeight.current = parent.current.offsetHeight
        }

        if (showContrast) {
            parent.current.style.height = `${parent.current.offsetHeight + child.current.offsetHeight}px`
        } else {
            parent.current.style.height = `${initialHeight.current}px`
        }
    },[showContrast])

    return { child, parent, setShowContrast };
}

export default useSetheight;
