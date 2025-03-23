import React, { useState } from 'react'
import "./utility.css"
import { FaArrowLeft } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link'
import { v4 as uuid } from "uuid"
import useCrousal from '@/app/(app)/hooks/useCrousal';

const ProjectDetails = ({ setIsDetails, projectDetails }) => {

    const [numberOfImages, setNumberOfImages] = useState(projectDetails.images.length)
    const { next, prev, parent,changeByDots,buttonParent } = useCrousal(numberOfImages)

    return (
        <>
            <div className='relative text-[var(--text)]'>
                <div className='absolute right-2 top-2 pl-[1px] pt-[1px] w-fit h-fit special-border-for-utility rounded-2xl'>
                    <button onClick={() => setIsDetails(false)} className='px-2 md:px-4 py-1 md:py-2 rounded-2xl bg-[var(--small-box-color)]'>
                        <FaArrowLeft className='w-6 md:w-12 h-3 md:h-6 text-[var(--svg-border-color)]' />
                    </button>
                </div>
                <div className='text-3xl font-bold my-2'>
                    {projectDetails.name}
                </div>
                <div className='text-base my-4 font-bold'>
                    {projectDetails.title}
                </div>
                <div className="w-full flex flex-col items-center justify-center my-6">
                    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] h-64 rounded-lg shadow-lg">
                        <button
                            onClick={prev}
                            className="absolute top-1/2 left-3 transform z-10 -translate-y-1/2 bg-[var(--body-color)] bg-opacity-50 text-[var(--svg-border-color)] p-2 rounded-full hover:bg-opacity-80 transition-all"
                        >
                            ❮
                        </button>
                        <div ref={parent} className="w-full h-full flex items-center justify-center relative rounded-lg  ">
                            {projectDetails.images.map((image, index) => (
                                <div
                                    key={image}
                                    className={`absolute w-0 h-0 transition-all duration-500 ease-in-out opacity-0 rounded-lg overflow-hidden `}
                                >
                                    <img src={image} className="h-full w-full object-cover sm:object-contain " alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>


                        <button
                            onClick={next}
                            className="absolute top-1/2 right-3 z-10 transform -translate-y-1/2 bg-[var(--body-color)] bg-opacity-50 text-[var(--svg-border-color)] p-2 rounded-full hover:bg-opacity-80 transition-all"
                        >
                            ❯
                        </button>
                    </div>
                    <div className='w-full h-8 mt-2 flex items-center justify-center'>
                        <div ref={buttonParent} className='w-fit h-full flex gap-4 items-center'>
                            {projectDetails.images.map((_, i) => (
                                <button
                                key={i}
                                onClick={() => changeByDots(i)}
                                className="relative w-3 h-3 flex items-center justify-center rounded-full bg-[var(--small-box-color)] transition-all duration-300 ease-in-out"
                            >
                                <span className="w-1 h-1 bg-[var(--svg-border-color)] rounded-full"></span>
                            </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <div className='w-full flex items-center justify-center my-6'>
                    
                    <div ref={parent} className='w-[200px] h-60 relative'>
                        {
                            projectDetails.images.map((image, index) => {
                                return (
                                    <div onClick={next} className='opacity-0 w-full h-full absolute' key={image}>
                                        <img src={image} className='h-full w-full object-contain' alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> */}
                {/* <Carousel className="w-full max-w-lg">
                        <CarouselContent>
                            {
                                projectDetails.images.map((image, index) => {
                                    return (
                                        <CarouselItem key={uuid()}>
                                            <div className="p-1 image-frame max-w-lg h-96">
                                                <img src={image} className='h-full w-full object-contain' alt="" />
                                            </div>
                                        </CarouselItem>
                                    )
                                })
                            }
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex" />
                        <CarouselNext className="hidden md:flex" />
                    </Carousel> */}

                {/* <div className='flex justify-center gap-3 flex-wrap my-2 h-fit'>
                    <div className='pl-[1px] pt-[1px] special-border-for-utility w-fit rounded-2xl'>
                        <div className='p-2 w-14 rounded-2xl bg-[var(--small-box-color)]'>
                            <img width={40} height={40} className='object-contain' src="./skillsIcons/java.svg" alt="" />
                        </div>
                    </div>
                </div> */}
                <div className='text-lg font-bold text-[var(--text)] my-6'>
                    <h3>
                        {projectDetails.name} - {projectDetails.title}
                    </h3>
                </div>

                <div className='my-4 text-base'>
                    <p>
                        {projectDetails.description}
                    </p>
                </div>
                <div className='my-4 h-fit'>
                    <h4 className='my-2'>Key features:</h4>
                    <ul className='list-disc mx-4'>
                        {
                            projectDetails.keyfeatures.map((feature, index) => {
                                return (
                                    <li key={uuid()}>
                                        {feature}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='h-12 relative'>
                    <div className='absolute right-2 bottom-0 pl-[1px] pt-[1px] special-border-for-utility rounded-2xl'>
                        <Link href={projectDetails.githublink || "#"} target='blank' className='flex items-center justify-center gap-2 w-fit bg-[var(--small-box-color)] py-2 px-4 rounded-2xl'>
                            <span className='font-bold text-lg text-[var(--svg-border-color)]'>GitHub</span>
                            <img className='bg-[var(--svg-border-color)] rounded-full' width={30} height={30} src="./socialMediaIcons/github.svg" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails
