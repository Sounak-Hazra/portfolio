import React from 'react'
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


const ProjectDetails = ({ setIsDetails, projectDetails }) => {

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
                <div className='w-full flex items-center justify-center my-6'>
                    <Carousel className="w-full max-w-lg">
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
                    </Carousel>
                </div>
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
                        <Link href={"#"} className='flex items-center justify-center gap-2 w-fit bg-[var(--small-box-color)] py-2 px-4 rounded-2xl'>
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
