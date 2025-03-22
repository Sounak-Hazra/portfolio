import React from 'react'
import { Separator } from '@/components/ui/separator';
import "./about.css"
import "../(utility)/utility.css"
import { MdOutlineTerminal } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className='w-full min-h-full py-7 px-7 rounded-3xl'>
        <h1 className='text-3xl text-[var(--text)] font-extrabold '>
          About Me
        </h1>
        <Separator className='w-full my-5 sm:my-8' />
        <div className='h-fit text-[var(--text)]'>

          {/*chat gpt */}
          <div className="bg-inherit text-[var(--text)]">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Hey 👋 Folks, Myself Sounak</h2>
              <p className="text-base text-[var(--text)] leading-relaxed ">
                I'm a Full-Stack Developer with a passion for building intuitive and visually appealing user experiences.
                Currently working with Next.js, React.js, and MongoDB, I enjoy crafting seamless and high-performance applications.
              </p>
              <p className="mt-4 text-lg text-[var(--text)] leading-relaxed">
                My work ethic is defined by diligence, curiosity, and an eagerness to tackle new challenges.
                If you're looking for a motivated developer who blends creativity with technical expertise, let's connect!
              </p>
              <p className="mt-4 text-lg text-[var(--text)] font-semibold">
                Let's discuss how I can elevate your overall experience!
              </p>
            </div>
          </div>

        </div>
        <Separator className='w-full my-5 sm:my-8' />
        <div>
          <h2 className='text-2xl text-[var(--text)] font-extrabold'>
            My Area of Expertise
          </h2>
          <div className='my-5 grid-for-areaOfExpertis'>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about landing-animation-boxes small-box-shadows'>
              <div className='h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Web Development
                  </h3>
                  <div className=' text-[var(--text)] text-xs'>
                    Full-stack development with Next.js, React, and MongoDB, delivering high-quality, scalable web applications.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about landing-animation-boxes small-box-shadows'>
              <div className='h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Python Development
                  </h3>
                  <div className=' text-[var(--text)] text-xs'>
                    Building efficient Python applications, including automation scripts, data processing, and backend development.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about landing-animation-boxes small-box-shadows'>
              <div className='h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Java Programming
                  </h3>
                  <div className=' text-[var(--text)] text-xs'>
                    Creating robust and optimized Java applications while deepening expertise in object-oriented programming.
                  </div>
                </div>
              </div>
            </div>

            <div className='pl-[1px] pt-[1px] rounded-3xl rounded-br-[27px] borders special-background-border-about landing-animation-boxes small-box-shadows'>
              <div className='h-36 sm:h-44 bg-[var(--about-boxes-color)] flex gap-2 sm:gap-5 sm:py-10 py-4 px-2 sm:px-5 rounded-3xl'>
                <div className=' w-16 sm:w-20 '>
                  <MdOutlineTerminal className=' w-14 h-16 sm:h-16 sm:w-16 text-[var(--svg-border-color)]' />
                </div>
                <div className='flex-1 flex flex-col gap-2 '>
                  <h3 className='text-xl font-extrabold text-[var(--text)]'>
                    Node.js & Authentication
                  </h3>
                  <div className=' text-[var(--text)] text-xs'>
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