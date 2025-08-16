import React, { useEffect } from 'react'
import { Separator } from '@/components/ui/separator';
import "./about.css"
import "../(utility)/utility.css"
import { MdOutlineTerminal } from "react-icons/md";
import { useRef } from 'react';
import comeOneByOne from '@/app/gsapAnimation/about.gsap';
import gsap from 'gsap';
import BrokenWordsAnimation from '../(utility)/BrokenWordsAnimation';
import { useGSAP } from '@gsap/react';
import { registerAnimation } from '@/app/gsapAnimation/masterTimeLine';
import { startTimeLine } from '@/app/gsapAnimation/masterTimeLine';

const About = ({ tl }) => {

  const gsapRef = useRef()
  const isrendered = useRef(false)


  useGSAP(() => {
    registerAnimation("B", (tl) => {
      return comeOneByOne(gsapRef, isrendered, tl)
    })
  },
    {
      scope: gsapRef
    },
    [])

  useEffect(() => {
    startTimeLine()
  }, [])




  return (
    <>
      <div ref={gsapRef} className='w-full overflow-hidden min-h-full py-7 px-7 rounded-3xl'>
        <h1 id='timeLine 1' className='text-3xl text-[var(--text)] font-extrabold '>
          {/* About Me */}
          <BrokenWordsAnimation data={`About Me`} />
        </h1>
        <Separator className='w-full my-5 sm:my-8' />
        <div className='h-fit text-[var(--text)]'>

          {/*chat gpt */}
          <div className="bg-inherit text-[var(--text)]">
            <div id='brokenWords' className="max-w-4xl mx-auto">
              <h2 id='timeLine' className="text-2xl font-bold mb-6">
                <BrokenWordsAnimation data={`Hey Folks, I'm Sounak`} />
              </h2>

              <p id='timeLine' className="text-base text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`I'm a Full-Stack Developer driven by a deep curiosity for how technology can create meaningful, human-centered solutions. With hands-on experience in modern frameworks like Next.js, React.js, and MongoDB, I specialize in crafting high-performance, scalable applications that feel intuitive and engaging to users.`} />
              </p>

              <p id='timeLine' className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`For me, development is more than just writing code — it’s about solving real problems, telling stories through design, and shaping smooth digital journeys. I enjoy bridging the gap between clean, efficient backend logic and polished, dynamic interfaces that delight users.`} />
              </p>

              <p id='timeLine' className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`Outside of pure development, I’m constantly exploring new tools, design patterns, and industry trends to stay ahead of the curve. Whether it’s optimizing a database query, experimenting with micro-interactions, or learning a fresh JavaScript feature, I’m always seeking ways to refine my craft.`} />
              </p>

              <p id='timeLine' className="mt-4 text-lg text-[var(--text)] font-semibold">
                <BrokenWordsAnimation data={`If you’re looking for a developer who blends creativity with technical precision — and who approaches challenges with a collaborative and open mindset — let’s connect and bring your ideas to life.`} />
              </p>
            </div>
          </div>


        </div>
        <Separator className='w-full my-5 sm:my-8' />
        <div>
          <h2 id='timeLine 3' className='text-2xl text-[var(--text)] font-extrabold'>
            {/* My Area of Expertise */}
            <BrokenWordsAnimation data={`My Area of Expertise`} />
          </h2>
          <div id='depthTimeLine' className='my-5 grid-for-areaOfExpertis'>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Web Development
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    Full-stack development with Next.js, React, and MongoDB, delivering high-quality, scalable web applications.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Python Development
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    Building efficient Python applications, including automation scripts, data processing, and backend development.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Java Programming
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    Creating robust and optimized Java applications while deepening expertise in object-oriented programming.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 min bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Node.js & Authentication
                  </h3>
                  <div className=' text-[var(--text)] py-1 text-xs'>
                    Developing secure backend solutions using Node.js, Express, JWT authentication, and MongoDB integration.
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

export default About