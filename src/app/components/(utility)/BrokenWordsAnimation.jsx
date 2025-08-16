import React from 'react'

const BrokenWordsAnimation = ({ data = "" }) => {

    return (
        <>
            {
                data.split("").map((char, i) => (
                    <span className="inline-block" id='broken' key={i}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))
            }
        </>
    )
}

export default BrokenWordsAnimation