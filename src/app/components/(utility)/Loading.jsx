"use client"
import React from "react";
import { LoaderCircle } from "lucide-react";

const LoadingComponent = ({ setIsFullScreen, isFullPhoto, imgSrc }) => {
    

    return (
        <div className={`w-[100vw] h-[100vh] z-20 flex items-center justify-center backdrop-blur-sm top-0 left-0 transition-all duration-300 ease-in-out absolute`}>
            <div className="w-[10vw] h-[10vw] rounded-full overflow-hidden transition-all ease-in-out duration-500 ">
                <LoaderCircle className="animate-spin w-full h-full" />
            </div>
        </div>
    )
}

export default LoadingComponent