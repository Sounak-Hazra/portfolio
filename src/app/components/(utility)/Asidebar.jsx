"use client"
import React, { useState } from 'react'
import { Separator } from "@/components/ui/separator"
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import useSetheight from '@/app/(app)/hooks/useSetHeight';


const Asidebar = () => {

    // const [showContrast, setshowContrast] = useState(false)
    const {child,parent,setShowContrast} =  useSetheight()

    return (
        <>
            <div ref={parent} className={`w-full lg:!h-auto bg-[var(--box-colors)] inline-block lg:flex lg:flex-col rounded-3xl border border-gray-800 relative  overflow-hidden transition-all ease-in-out duration-1000 `}>
                <div className=' py-10 px-5 md:p-10 lg:inline-block flex w-full gap-6 z-10 relative bg-[var(--box-colors)]'>
                    <div className=' w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[200px] lg:w-full md:h-52 lg:h-52  '>
                        <div className='w-full h-full rounded-[40px] overflow bg-[var(--child-box-color)]'>
                            <img className='w-full h-full object-cover rounded-full' src="./myPhotos/myPhoto1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 my-5 items-start justify-center lg:justify-center '>
                        <div className='lg:text-2xl md:text-3xl text-xl font-bold text-[var(--text)]'>
                            Sounak Hazra
                        </div>
                        <div className='lg:text-xs md:text-sm text-xs text-[var(--text)] px-2 py-1 bg-[var(--child-box-color)] rounded-lg'>
                            <span >
                                Full Stack Devloper
                            </span>
                        </div>
                    </div>
                    <div className='absolute right-0 top-0 lg:hidden'>
                        <Button onClick={() => setShowContrast((prevShowContrast)=>!prevShowContrast)} className="rounded-bl-3xl rounded-tr-3xl rounded-br-none rounded-tl-none text-[var(--svg-border-color)] bg-[var(--button)] font-semibold text-sm hover:bg-[var(--buttonHover)] ">
                            Show Contrast
                        </Button>
                    </div>
                </div>
                <Separator className={`mx-5 w-auto bg-gray-500 hidden lg:inline-block`} />
                <div ref={child} className={`py-0 px-5 lg:py-4 flex h-fit flex-col justify-stretch bottom-0 flex-1 gap-5 lg:gap-4 lg:w-auto lg:relative lg:top-0 z-0 transition-all duration-1000 ease-in-out absolute  `}>
                    <div className='w-full lg:h-fit flex flex-wrap lg:gap-5 lg:flex-col lg:justify-between '>
                        <div className='flex gap-3 w-48 lg:w-auto md:m-0 m-2 '>
                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <MdOutlineMail className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>EMAIL</div>
                                <div className='text-[var(--text)] text-sm'>hazrasounak87</div>
                            </div>
                        </div>
                        <div className='flex gap-3 w-48 lg:w-auto  md:m-0 m-2'>

                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <IoPhonePortraitOutline className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>PHONE</div>
                                <div className='text-[var(--text)] text-sm'>Let's talk</div>
                            </div>
                        </div>
                        <div className='flex gap-3 w-48 lg:w-auto md:m-0 m-2'>
                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <FaLocationDot className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>LOCATION</div>
                                <div className='text-[var(--text)] text-sm'>Westbengal,Amta,Howrah</div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-grow lg:flex lg:items-end lg:justify-start'>
                        <div className='h-10 w-full flex'>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/github.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/instagram.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/linkedin.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={`w-full lg:h-full bg-[var(--box-colors)] inline-block lg:flex lg:flex-col rounded-3xl border border-gray-800 relative  overflow-hidden ${showContrast ? "md:h-[431px] sm:h-[412px] h-[484px]" : "md:h-[296px] sm:h-[243px] h-[210px]"} transition-all ease-in-out duration-1000 `}>
                <div className=' py-10 px-5 md:p-10 lg:inline-block flex w-full gap-6 z-10 relative bg-[var(--box-colors)]'>
                    <div className=' w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[200px] lg:w-full md:h-52 lg:h-52  '>
                        <div className='w-full h-full rounded-[40px] overflow bg-[var(--child-box-color)]'>
                            <img className='w-full h-full object-cover rounded-full' src="./myPhotos/myPhoto1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 my-5 items-start justify-center lg:justify-center '>
                        <div className='lg:text-2xl md:text-3xl text-xl font-bold text-[var(--text)]'>
                            Sounak Hazra
                        </div>
                        <div className='lg:text-xs md:text-sm text-xs text-[var(--text)] px-2 py-1 bg-[var(--child-box-color)] rounded-lg'>
                            <span >
                                Full Stack Devloper
                            </span>
                        </div>
                    </div>
                    <div className='absolute right-0 top-0 lg:hidden'>
                        <Button onClick={() => setshowContrast(!showContrast)} className="rounded-bl-3xl rounded-tr-3xl rounded-br-none rounded-tl-none text-[var(--svg-border-color)] bg-[var(--button)] font-semibold text-sm hover:bg-[var(--buttonHover)] ">
                            Show Contrast
                        </Button>
                    </div>
                </div>
                <Separator className={`mx-5 w-auto bg-gray-500 hidden lg:inline-block`} />
                <div className={`py-5 pt-0 sm:pt-5 px-5 flex  flex-col justify-stretch flex-1 gap-5 lg:gap-4 lg:w-auto lg:relative lg:top-0 absolute z-0 ${showContrast ? "md:top-[271px] sm:top-[216px] top-[210px] " : "top-0"} transition-all duration-1000 ease-in-out `}>
                    <div className='w-full h-full lg:h-fit flex flex-wrap lg:gap-5 lg:flex-col lg:justify-between '>
                        <div className='flex gap-3 w-48 lg:w-auto md:m-0 m-2 '>
                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <MdOutlineMail className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>EMAIL</div>
                                <div className='text-[var(--text)] text-sm'>hazrasounak87</div>
                            </div>
                        </div>
                        <div className='flex gap-3 w-48 lg:w-auto  md:m-0 m-2'>

                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <IoPhonePortraitOutline className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>PHONE</div>
                                <div className='text-[var(--text)] text-sm'>Let's talk</div>
                            </div>
                        </div>
                        <div className='flex gap-3 w-48 lg:w-auto md:m-0 m-2'>
                            <div className='rounded-2xl pt-[1px] pl-[1px] special-background-border '>
                                <div className='p-[9px] bg-[var(--small-box-color)] rounded-2xl'>
                                    <FaLocationDot className='text-[var(--svg-border-color)] w-6 h-6' />
                                </div>
                            </div>
                            <div className='flex flex-col justify-around'>
                                <div className='text-gray-400 text-xs'>LOCATION</div>
                                <div className='text-[var(--text)] text-sm'>Westbengal,Amta,Howrah</div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex-grow lg:flex lg:items-end lg:justify-start'>
                        <div className='h-10 w-full flex'>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/github.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/instagram.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/linkedin.svg" alt="" />
                            </div>
                            <div>
                                <img width={25} height={25} className='invert-[0.5] hover:invert-[0.8] transition-all duration-300 ease-in-out' src="./socialMediaIcons/twitter.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Asidebar