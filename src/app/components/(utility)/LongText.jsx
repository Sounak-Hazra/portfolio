import React from "react";
import { useState } from "react";



const LongText = (params) => {

    const { text, smallLength, stopPropagation = false } = params

    const [showSort, setShowSort] = useState(true)
    const alredySort = text.length <= 100

    const changeLenght = (e) => {
        if (stopPropagation) {
            e.stopPropagation()
            e.preventDefault()
        }
        setShowSort(!showSort)
    }

    return (
        <>
            <p>
                {
                    showSort ?
                        text.slice(0, smallLength)
                        :
                        text
                }

                {!alredySort &&
                    <button
                        onClick={(e) => changeLenght(e)}
                        className="text-[var(--svg-border-color)] font-medium hover:underline transition-all duration-300"
                    >
                        {showSort ? "...read more" : "read less"}
                    </button>

                }
            </p>
        </>
    )
}

export default LongText