import { useEffect, useRef } from 'react'
import { Separator } from '@/components/ui/separator';
import "./about.css"
import "../(utility)/utility.css"
import comeOneByOne from '@/app/gsapAnimation/about.gsap';
import BrokenWordsAnimation from '../(utility)/BrokenWordsAnimation';
import { useGSAP } from '@gsap/react';
import { registerAnimation } from '@/app/gsapAnimation/masterTimeLine';
import { startTimeLine } from '@/app/gsapAnimation/masterTimeLine';
import { MdOutlineTerminal, MdOutlineWeb, MdOutlineStorage, MdOutlineSmartToy } from "react-icons/md";

const About = () => {

  const gsapRef = useRef()


  useGSAP(() => {
    registerAnimation("B", (tl) => {
      return comeOneByOne(gsapRef, tl)
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
        <h1 className='text-3xl text-[var(--text)] font-extrabold '>
          <BrokenWordsAnimation data={`About Me`} />
        </h1>
        <Separator className='w-full my-5 sm:my-8' />
        <div className='h-fit text-[var(--text)]'>

          {/*chat gpt */}
          <div className="bg-inherit text-[var(--text)]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">
                <BrokenWordsAnimation data={`Hey Folks, I'm Sounak`} />
              </h2>

              <p className="text-base text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`I'm a full-stack developer who builds production-style systems end to end: Next.js and React on the front, Node, Express and MongoDB on the back, Docker and Vercel for shipping. I'm currently a Full Stack Developer intern at AaoStays, where I lead 4-5 interns on a shared backend powering three apps (user, employee, admin).`} />
              </p>

              <p className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`I like the harder parts of the stack: real-time terminals over WebSockets, isolated Docker execution environments, Razorpay payment webhooks, and booking logic. One availability API I built dropped from 800ms to 200ms.`} />
              </p>

              <p className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                <BrokenWordsAnimation data={`I also build with LLMs and RAG. My browser IDE (Vibe Code Editor) has an offline AI assistant running on Ollama with token-level streaming, and Distill is a RAG-based tool that analyzes GitHub repos so you can chat with the codebase. I'm doing my B.Tech in CSE (AI & ML) at Brainware University.`} />
              </p>

              <p className="mt-4 text-lg text-[var(--text)] font-semibold">
                <BrokenWordsAnimation data={`I'm open to roles where I can work across the full stack and on LLM-powered features. If that sounds like your team, let's talk.`} />
              </p>
            </div>
          </div>


        </div>
        <Separator className='w-full my-5 sm:my-8' />
        <div>
          <h2 className='text-2xl text-[var(--text)] font-extrabold'>
            <BrokenWordsAnimation data={`My Area of Expertise`} />
          </h2>
          <div id='depthTimeLine' className='my-5 grid-for-areaOfExpertis'>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineWeb className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Full-Stack Web Development
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    Next.js, React, Node and MongoDB apps, from booking platforms to e-commerce, deployed on Vercel.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineStorage className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Backend, APIs & Payments
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    Shared backends, JWT auth, Razorpay webhooks, and APIs optimized from 800ms to 200ms.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about small-box-shadows'>
              <div className='min-h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineSmartToy className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    GenAI, LLMs & RAG
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    RAG over codebases, streaming LLM assistants with Ollama, and LLM API integration in Python and JS.
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
                    Real-Time & Docker Systems
                  </h3>
                  <div className=' text-[var(--text)] text-xs py-1'>
                    WebSockets and PTY terminals with per-user Docker containers for isolated code execution.
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