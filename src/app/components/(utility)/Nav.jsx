import React from 'react'
import { Button } from '@/components/ui/button'
import "./utility.css"
import { BiHomeAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiStar } from "react-icons/ci";
import { FaProjectDiagram } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { Switch } from "@/components/ui/switch"


const Nav = ({ states,className="" }) => {
    const { setisAbout, isAbout, setisResume, isResume, setisPortfolio, isPortfolio, setisBlog, isBlog, isDarkMode, setisDarkMode, setDark, dark } = states
    const setCurrentPage = (page) => {
        switch (page) {
            case "about":
                setisBlog(false)
                setisResume(false)
                setisPortfolio(false)
                setisAbout(true)
                break;
            case "resume":
                setisBlog(false)
                setisPortfolio(false)
                setisAbout(false)
                setisResume(true)
                break
            case "portfolio":
                setisBlog(false)
                setisResume(false)
                setisAbout(false)
                setisPortfolio(true)
                break
            case "blog":
                setisResume(false)
                setisAbout(false)
                setisPortfolio(false)
                setisBlog(true)
                break
            default:
                setisAbout(true)
                break;
        }
    }
    return (
        <>
            <nav className={` ${className} fixed left-0 lg:left-auto bottom-0 lg:w-[75%] w-[100vw]  h-16 lg:absolute lg:top-0 lg:right-0 lg:rounded-bl-3xl lg:rounded-tr-3xl border border-gray-800 border-t-0 border-r-0 bg-[var(--nav-color)] flex items-center justify-center z-30 lg:z-auto px-3 sm:px-4 md:px-0`}>
                <ul className=' flex justify-evenly sm:justify-between items-center w-full '>
                    <li className='hidden md:block'></li>
                    <li>
                        <div className='pl-[.5px] pt-[.5px] rounded-[30px]'>
                            <Button onClick={() => setCurrentPage("about")} className={`${isAbout && "brightness-[30%] relative inset-shadow-for-navIcons"} rounded-[30px] hover:bg-inherit hover:brightness-[30%] bg-inherit [&_svg]:size-5 font-bold px-3 md:px-4 md:py-2 lg:py-0 md:text-lg lg:text-base border-none text-[var(--text)] transition-all ease-in-out duration-500 shadow-none`}>
                                <span className='hidden sm:inline'>
                                    About
                                </span>
                                <BiHomeAlt2 className='inline-block sm:hidden' />
                            </Button>
                        </div>
                    </li>
                    <li>
                        <div className='pl-[.5px] pt-[.5px] rounded-[30px] '>
                            <Button onClick={() => setCurrentPage("resume")} className={`${isResume && "brightness-[30%] relative inset-shadow-for-navIcons"} rounded-[30px] hover:bg-inherit hover:brightness-[30%] bg-inherit [&_svg]:size-5 font-bold px-3 md:px-4 md:py-2 lg:py-0 md:text-lg lg:text-base border-none text-[var(--text)] transition-all ease-in-out duration-500 shadow-none`}>
                                <span className='hidden sm:inline '>
                                    Resume
                                </span>
                                <CgProfile className='inline-block sm:hidden' />
                            </Button>
                        </div>
                    </li>
                    <li>
                        <div className='pl-[.5px] pt-[.5px] rounded-[30px]  '>
                            <Button onClick={() => setCurrentPage("portfolio")} className={`${isPortfolio && "brightness-[30%] relative inset-shadow-for-navIcons"} rounded-[30px] hover:bg-inherit hover:brightness-[30%] bg-inherit [&_svg]:size-5 font-bold px-3 md:px-4 md:py-2 lg:py-0 md:text-lg lg:text-base border-none text-[var(--text)] transition-all ease-in-out duration-500 shadow-none`}>
                                <span className='hidden sm:inline '>
                                    Portfolio
                                </span>
                                <FaProjectDiagram className='inline-block sm:hidden' />
                            </Button>
                        </div>
                    </li>
                    <li>
                        <div className='pl-[.5px] pt-[.5px] rounded-[30px] '>
                            <Button onClick={() => setCurrentPage("blog")} className={`${isBlog && "brightness-[30%] relative inset-shadow-for-navIcons"} rounded-[30px] hover:bg-inherit hover:brightness-[30%] bg-inherit [&_svg]:size-5 font-bold px-3 md:px-4 md:py-2 lg:py-0 md:text-lg lg:text-base border-none text-[var(--text)] transition-all ease-in-out duration-500 shadow-none`}>
                                <span className='hidden sm:inline '>
                                    Blog
                                </span>
                                <CiStar className='inline-block sm:hidden' />
                            </Button>
                        </div>
                    </li>
                    <li>
                        <div className='pl-[.5px] pt-[.5px] rounded-[30px] '>
                            <Switch
                                checked={dark}
                                onCheckedChange={() => setDark(!dark)}
                            />
                        </div>
                    </li>
                    <li className='hidden md:block'></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav