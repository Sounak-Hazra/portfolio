import React, { useRef } from 'react'
import { Separator } from '@/components/ui/separator';
import { MdOutlineTerminal } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaJs } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import "../(utility)/utility.css"
import "./resume.css"
import DotElement from '../(utility)/DotElement';
import resumeAnimation from '@/app/gsapAnimation/resume.gsap';
import { useEffect } from 'react';
import BrokenWordsAnimation from '../(utility)/BrokenWordsAnimation';
import { SiExpress } from "react-icons/si";
import { useMediaQuery } from 'react-responsive';

const Resume = () => {

    const isAnimated = useRef(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    useEffect(() => {
        resumeAnimation(isAnimated,isDesktopOrLaptop)
    }, [])
    return (
        <>
            <div>
                <div className='w-full overflow-hidden md:overflow-x-hidden h-fit py-7 px-7 rounded-3xl '>
                    <h1 id='title' className='text-3xl text-[var(--text)] font-extrabold '>
                        {/* Skills */}
                        <BrokenWordsAnimation data='Skills' />
                    </h1>
                    <Separator className='w-full my-5 sm:my-8' />
                    <div className='text-[var(--text)] '>
                        <div>
                            <div id='subheadding' className='flex gap-4 items-center '>
                                <div className='special-border-for-utility pl-[1px] pt-[1px] rounded-2xl'>
                                    <div className='w-12 h-12 flex items-center justify-center bg-[var(--small-box-color)] rounded-2xl'>
                                        <MdOutlineTerminal className='w-6 h-6 text-[var(--svg-border-color)]' />
                                    </div>
                                </div>
                                <div className='text-2xl my-4 md:my-0 font-bold w-fit h-fit '>
                                    {/* My Skill Set */}
                                    <BrokenWordsAnimation data='My Skill Set' />
                                </div>
                            </div>

                            {/* Skills with icons*/}
                            <div className='bg-[var(--resume-background)] my-4 md:my-2 py-4 md:p-4 lg:p-4 rounded-3xl'>
                                <div className='px-4 py-2 '>
                                    <div className='h-fit'>
                                        <div id='skill' className='text-base mb-3 font-bold'>
                                            <BrokenWordsAnimation data='Programming Languages' />
                                            {/* Programming Linguages */}
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full'>
                                            {/* <FaJava className='w-[50px] h-[50px] landing-animation-boxes' /> */}
                                            <img className='landing-animation-boxes' width={50} height={50} src="./skillsIcons/java.svg" alt="" />
                                            {/* <FaPython className='w-[50px] h-[50px] landing-animation-boxes' /> */}
                                            <img className='landing-animation-boxes ' width={50} height={50} src="./skillsIcons/python.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 py-2'>
                                    <div className='h-fit'>
                                        <div id='skill' className='text-base mb-3 font-bold'>
                                            <BrokenWordsAnimation data='Wev Devlopment' />
                                            {/* Wev Devlopment */}
                                        </div>
                                        <div id='images' className='single-line-grid-box md:gap-3 w-full'>
                                            <FaHtml5 className='w-[50px] h-[50px] landing-animation-boxes text-orange-600' />
                                            <FaCss3Alt className='w-[50px] h-[50px] landing-animation-boxes text-blue-600' />
                                            <FaJs className='w-[50px] h-[50px] landing-animation-boxes text-yellow-400' />
                                            <FaNode className='w-[50px] h-[50px] landing-animation-boxes text-green-500' />
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 py-2'>
                                    <div className='h-fit'>
                                        <div id='skill' className='text-base mb-3 font-bold'>
                                            <BrokenWordsAnimation data='Database' />
                                            {/* Database */}
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full'>
                                            <SiMongodb className='w-[50px] h-[50px] landing-animation-boxes text-[#3FA037]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 py-2'>
                                    <div className='h-fit'>
                                        <div id='skill' className='text-base mb-3 font-bold'>
                                            <BrokenWordsAnimation data='Frame Works & Libraries' />
                                            {/* Frame Works & Libraries */}
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full'>
                                            <FaReact className='w-[50px] h-[50px] landing-animation-boxes text-[#61DBFB]' />
                                            <img className='landing-animation-boxes ' width={50} height={50} src="./skillsIcons/vite.svg" alt="" />
                                            {/* <RiNextjsLine className='w-[50px] h-[50px] landing-animation-boxes text-black bg-white rounded-full' /> */}
                                            <img className='landing-animation-boxes ' width={50} height={50} src="./skillsIcons/nextjs.svg" alt="" />
                                            <RiTailwindCssFill className='w-[50px] h-[50px] landing-animation-boxes text-[#06b6d4]' />
                                            <SiExpress className='w-[50px] h-[50px] landing-animation-boxes text-[#06b6d4]' />
                                        </div>
                                    </div>
                                </div>
                                <div className='px-4 py-2'>
                                    <div className='h-fit'>
                                        <div id='skill' className='text-base mb-3 font-bold'>
                                            <BrokenWordsAnimation data='Tools' />
                                            {/* Tools */}
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full'>
                                            <img className='landing-animation-boxes ' width={50} height={50} src="./skillsIcons/mongodbcompus.svg" alt="" />
                                            <SiPostman className='w-[50px] h-[50px] landing-animation-boxes text-[#EF5B25]' />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div id='eduSection' className='w-full py-7 px-0 sm:px-4 '>
                                <div id='education' className='flex gap-4 items-center h-fit relative z-10'>
                                    <div className='special-border-for-utility pl-[1px] pt-[1px] rounded-2xl'>
                                        <div className='w-12 h-12 flex items-center justify-center bg-[var(--small-box-color)] rounded-2xl'>
                                            <IoBookOutline className='w-6 h-6 text-[var(--svg-border-color)]' />
                                        </div>
                                    </div>
                                    <span className='text-2xl text-[var(--text)] font-bold'>
                                        {/* Education */}
                                        <BrokenWordsAnimation data='Education' />
                                    </span>
                                </div>
                                <div className='pl-5'>
                                    <div className=' h-fit pl-[2px] bg-[var(--svg-border-color)] relative'>
                                        <DotElement className="bottom-0 -left-[2.5px]" />
                                        <div className='pt-2 bg-[var(--box-colors)] time-line-box-shadow'>
                                            <ol id='institudes' className=' pl-10 sm:pl-12 md:pl-14  m-0'>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            {/* Brainware University | Barasat */}
                                                            <BrokenWordsAnimation data='Brainware University | Barasat' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            {/* 2023 — 2027 */}
                                                            <BrokenWordsAnimation data='2023 — 2027' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
                                                            {/* Parsuing Computer Science and Engineering speclization with AI & ML */}
                                                            <BrokenWordsAnimation data='Parsuing Computer Science and Engineering speclization with AI & ML' />
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            {/* Sonamul FNS High School | Howrah */}
                                                            <BrokenWordsAnimation data='Sonamul FNS High School | Howrah' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            {/* 2021 — 2023 */}
                                                            <BrokenWordsAnimation data='2021 — 2023' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
                                                            {/* Completed Higher Secondary Education in Science Stream. */}
                                                            <BrokenWordsAnimation data='Completed Higher Secondary Education in Science Stream.' />
                                                        </p>
                                                    </div>

                                                </li>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            {/* Khardah High School | Howrah */}
                                                            <BrokenWordsAnimation data='Khardah High School | Howrah' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            {/* 2015 — 2021 */}
                                                            <BrokenWordsAnimation data='2015 — 2021' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
                                                            {/* Completed Basic Schooling. */}
                                                            <BrokenWordsAnimation data='Completed Basic Schooling.' />
                                                        </p>
                                                    </div>
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Resume