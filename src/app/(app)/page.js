"use client"
import { useEffect, useState } from "react";
import Nav from "../components/(utility)/Nav";
import Asidebar from "../components/(utility)/Asidebar";
import About from "../components/about/About";
import Resume from "../components/resume/Resume";
import Blog from "../components/blog/Blog";
import Portfolio from "../components/portfolio/Portfolio";
import useDarkThem from "./hooks/useDarkThem";
import { motion } from "framer-motion";
import { useRef } from 'react'
import FullScreenphoto from "../components/(utility)/FullScreenPhoto";
import useFetchData from "./hooks/useGetData";
import timeLineMain from "../gsapAnimation/main.gsap";
import { master, registerAnimation } from "../gsapAnimation/masterTimeLine";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import dynamic from "next/dynamic";


export default function Page() {

  const [isAbout, setisAbout] = useState(true)
  const [isResume, setisResume] = useState(false)
  const [isPortfolio, setisPortfolio] = useState(false)
  const [isBlog, setisBlog] = useState(false)
  const { dark, setDark } = useDarkThem()
  const [tl, setTl] = useState(null)

  const { blogs, project } = useFetchData()

  const [showFullScreenPhoto, setShowFullScreenPhoto] = useState(false)
  const gsapRef = useRef(null)
  const isAnimated = useRef(false)


  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  })

  useGSAP(() => {
    registerAnimation("A", tl => {
      timeLineMain(gsapRef, isAnimated, isDesktopOrLaptop, tl)
    })
  },)




  return (
    <>
      <main ref={gsapRef} className={` ${!dark && "light"} flex flex-col opacity-0 lg:flex-row gap-5 items-streched justify-center my-16 lg:my-0 mx-5 sm:mx-20 overflow-x-hidden`}>

        <Nav className="md:hidden flex" states={{ setisAbout, isAbout, setisBlog, isBlog, setisResume, isResume, isPortfolio, setisPortfolio, setDark, dark }} />




        <FullScreenphoto isFullPhoto={showFullScreenPhoto} setIsFullScreen={setShowFullScreenPhoto} imgSrc="./myPhotos/myPhoto1.jpg" />
        <aside className="w-full lg:w-72 lg:!sticky lg:self-start lg:top-0 h-fit lg:!h-screen lg:flex lg:items-center rounded-3xl relative  flex items-center">
          <Asidebar setShowFullscreenPhoto={setShowFullScreenPhoto} />
        </aside>

        <div id="main" className="lg:w-[70%] mb-[32px] w-full min-h-[80vh] static  rounded-3xl lg:relative lg:my-11 lg:pt-16 bg-[var(--box-colors)] border border-gray-800 big-box-shadows">
          <Nav className="md:flex hidden" states={{ setisAbout, isAbout, setisBlog, isBlog, setisResume, isResume, isPortfolio, setisPortfolio, setDark, dark }} />




          {/* {isAbout &&
            <motion.div
              key={"about"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
            
            </motion.div>
          } */}
          <div className={`${isAbout ? "" : "hidden"}`}>
            <About tl={tl} />
          </div>
          {isResume &&
            <motion.div
              key={"resume"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Resume />
            </motion.div>
          }
          {isPortfolio &&
            <motion.div
              key={"portfolio"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Portfolio project={project} />
            </motion.div>
          }
          {isBlog &&
            <motion.div
              key={"blog"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <Blog blogs={blogs} />
            </motion.div>
          }
        </div>
      </main>
    </>
  );
}
