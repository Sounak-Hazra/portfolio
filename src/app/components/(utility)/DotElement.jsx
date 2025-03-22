import React from 'react'
import "./utility.css"

const DotElement = ({className=""}) => {
  return (
    <div className = { className ? className + " absolute w-2 h-2 rounded-full border-for-dots bg-black" : `absolute -left-[45.5px] sm:-left-[52.5px] md:-left-[60.5px] top-5 w-2 h-2 rounded-full border-for-dots bg-black`}></div>
  )
}

export default DotElement