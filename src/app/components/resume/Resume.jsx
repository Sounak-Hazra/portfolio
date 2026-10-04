import { useRef } from 'react'
import { Separator } from '@/components/ui/separator';
import { MdOutlineTerminal } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiPostman, SiTypescript, SiDocker, SiVercel, SiMongodb, SiExpress, SiC, SiReactquery } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { GiBearFace } from "react-icons/gi";
import { Database, Sparkles, FileSearch, Bot, Layers } from "lucide-react";
import "../(utility)/utility.css"
import "./resume.css"
import DotElement from '../(utility)/DotElement';
import resumeAnimation from '@/app/gsapAnimation/resume.gsap';
import { useEffect } from 'react';
import BrokenWordsAnimation from '../(utility)/BrokenWordsAnimation';
import { useMediaQuery } from 'react-responsive';

const Resume = () => {

    const isAnimated = useRef(false)

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })

    useEffect(() => {
        resumeAnimation(isAnimated,isDesktopOrLaptop)
    }, [isDesktopOrLaptop])
    
    return (
        <>
            <div>
                <div className='w-full overflow-hidden md:overflow-x-hidden h-fit py-7 px-7 rounded-3xl '>
                    <h1 className='text-3xl text-[var(--text)] font-extrabold '>
                        <BrokenWordsAnimation data='Skills' />
                    </h1>
                    <Separator className='w-full my-5 sm:my-8' />
                    <div className='text-[var(--text)] '>
                        <div>
                            <div className='flex gap-4 items-center '>
                                <div className='special-border-for-utility pl-[1px] pt-[1px] rounded-2xl'>
                                    <div className='w-12 h-12 flex items-center justify-center bg-[var(--small-box-color)] rounded-2xl'>
                                        <MdOutlineTerminal className='w-6 h-6 text-[var(--svg-border-color)]' />
                                    </div>
                                </div>
                                <div className='text-2xl my-4 md:my-0 font-bold w-fit h-fit '>
                                    <BrokenWordsAnimation data='My Skill Set' />
                                </div>
                            </div>

                            {/* Skills with icons*/}
                            <div className='bg-[var(--resume-background)] my-4 md:my-2 py-4 md:p-4 lg:p-4 rounded-3xl'>
                                
                                {/* Programming Languages */}
                                <div className='px-4 py-3 '>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='Programming Languages' />
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <img width={45} height={45} src="./skillsIcons/java.svg" alt="Java" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Java</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <img width={45} height={45} src="./skillsIcons/python.svg" alt="Python" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Python</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiTypescript className='w-[45px] h-[45px] text-blue-500' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">TypeScript</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiC className='w-[45px] h-[45px] text-blue-600' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">C</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Web Development */}
                                <div className='px-4 py-3'>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='Web Development' />
                                        </div>
                                        <div id='images' className='single-line-grid-box md:gap-3 w-full gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FaHtml5 className='w-[45px] h-[45px] text-orange-600' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">HTML5</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FaCss3Alt className='w-[45px] h-[45px] text-blue-600' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">CSS3</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FaJs className='w-[45px] h-[45px] text-yellow-400' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">JavaScript</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FaNode className='w-[45px] h-[45px] text-green-500' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Node.js</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Database */}
                                <div className='px-4 py-3'>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='Database' />
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiMongodb className='w-[45px] h-[45px] text-[#3FA037]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">MongoDB</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <Database strokeWidth={1.5} className='w-[45px] h-[45px] text-[#00758F] p-1' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">SQL</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Frameworks & Libraries */}
                                <div className='px-4 py-3'>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='Frameworks & Libraries' />
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FaReact className='w-[45px] h-[45px] text-[#61DBFB]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">React</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <img width={45} height={45} src="./skillsIcons/vite.svg" alt="Vite" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Vite</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <img width={45} height={45} src="./skillsIcons/nextjs.svg" alt="Next.js" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Next.js</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <RiTailwindCssFill className='w-[45px] h-[45px] text-[#06b6d4]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Tailwind</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiExpress className='w-[45px] h-[45px] text-gray-400' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Express</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <GiBearFace className='w-[45px] h-[45px] text-amber-700' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Zustand</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiReactquery className='w-[45px] h-[45px] text-[#FF4154]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">TanStack</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tools */}
                                <div className='px-4 py-3'>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='Tools' />
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <img width={45} height={45} src="./skillsIcons/mongodbcompus.svg" alt="Compass" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Compass</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiPostman className='w-[45px] h-[45px] text-[#EF5B25]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Postman</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiDocker className='w-[45px] h-[45px] text-[#2496ED]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Docker</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <SiVercel className='w-[45px] h-[45px] text-[var(--text)] bg-[var(--resume-background)] rounded-full p-1 border border-[var(--svg-border-color)]' />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Vercel</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* AI & Machine Learning */}
                                <div className='px-4 py-3'>
                                    <div className='h-fit'>
                                        <div className='text-base mb-4 font-bold'>
                                            <BrokenWordsAnimation data='AI & Machine Learning' />
                                        </div>
                                        <div id='images' className='single-line-grid-box w-full flex-wrap gap-y-4'>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <Sparkles strokeWidth={1.5} className="w-[45px] h-[45px] text-yellow-500 p-1" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">Gen AI</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <FileSearch strokeWidth={1.5} className="w-[45px] h-[45px] text-green-500 p-1" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">RAG</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <Bot strokeWidth={1.5} className="w-[45px] h-[45px] text-purple-500 p-1" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center">LLMs</span>
                                            </div>
                                            <div className="landing-animation-boxes flex flex-col items-center justify-start gap-1.5">
                                                <Layers strokeWidth={1.5} className="w-[45px] h-[45px] text-cyan-500 p-1" />
                                                <span className="text-[11px] font-medium text-[var(--text)] opacity-70 tracking-wider text-center leading-tight">Multimodal</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* EDUCATION SECTION */}
                            <div className='w-full py-7 px-0 sm:px-4 '>
                                <div className='flex gap-4 items-center h-fit relative z-10'>
                                    <div className='special-border-for-utility pl-[1px] pt-[1px] rounded-2xl'>
                                        <div className='w-12 h-12 flex items-center justify-center bg-[var(--small-box-color)] rounded-2xl'>
                                            <IoBookOutline className='w-6 h-6 text-[var(--svg-border-color)]' />
                                        </div>
                                    </div>
                                    <span className='text-2xl text-[var(--text)] font-bold'>
                                        <BrokenWordsAnimation data='Education' />
                                    </span>
                                </div>
                                <div className='pl-5'>
                                    <div className=' h-fit pl-[2px] bg-[var(--svg-border-color)] relative'>
                                        <DotElement className="bottom-0 -left-[2.5px]" />
                                        <div className='pt-2 bg-[var(--box-colors)] time-line-box-shadow'>
                                            <ol className=' pl-10 sm:pl-12 md:pl-14  m-0'>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            <BrokenWordsAnimation data='Brainware University | Barasat' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            <BrokenWordsAnimation data='2023 — 2027' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
                                                            <BrokenWordsAnimation data='Parsuing Computer Science and Engineering speclization with AI & ML' />
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            <BrokenWordsAnimation data='Sonamul FNS High School | Howrah' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            <BrokenWordsAnimation data='2021 — 2023' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
                                                            <BrokenWordsAnimation data='Completed Higher Secondary Education in Science Stream.' />
                                                        </p>
                                                    </div>
                                                </li>
                                                <li className='py-2 relative'>
                                                    <DotElement />
                                                    <div>
                                                        <h3 className="text-lg font-bold">
                                                            <BrokenWordsAnimation data='Khardah High School | Howrah' />
                                                        </h3>
                                                        <p className="text-orange-400 text-sm">
                                                            <BrokenWordsAnimation data='2015 — 2021' />
                                                        </p>
                                                        <p className="text-[var(--text)] text-sm">
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