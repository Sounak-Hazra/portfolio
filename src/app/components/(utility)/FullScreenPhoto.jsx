"use client"
import React, { useEffect } from "react";

const FullScreenphoto = ({ setIsFullScreen, isFullPhoto, imgSrc }) => {
    

    return (
        <button onClick= {()=>setIsFullScreen(false)} className={` ${isFullPhoto ? "opacity-1 pointer-events-auto fixed " : "opacity-0 pointer-events-none absolute"} w-full h-full z-20 flex items-center justify-center backdrop-blur-sm top-0 left-0 transition-all duration-300 ease-in-out`}>
            <div className={` ${isFullPhoto ? "w-[50vw] h-[50vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] " : "w-0 h-0"} rounded-full overflow-hidden transition-all ease-in-out duration-500 `}>
                <img className="w-full h-full object-cover rounded-full z-20 " src={imgSrc} alt= "Profile photo" />
            </div>
        </button>
    )
}

export default FullScreenphoto