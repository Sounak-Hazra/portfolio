import React from 'react'
import { FaEye } from "react-icons/fa";


const Projects = ({ projects = [], setIsDetails, setProjectDetails }) => {

    const moveToDetails = (e) => {
        setProjectDetails(e)
        setIsDetails(true)
    }

    
    return (
        <div className=' text-[var(--text)] w-full max-h-full  grid-for-projects'>
            {
                projects.map((e) => {
                    return (
                        <button key={e._id} onClick={() => moveToDetails(e)} className='rounded-2xl bg-inherit landing-animation-boxes small-box-shadows pb-2'>
                            <div className="relative overflow-hidden rounded-xl">
                                <div className='hover:scale-125  max-h-48 transition-all project ease-in-out duration-500'>
                                    <img
                                        src={e.images[0]}
                                        alt="Foodie Remix"
                                        className="rounded-xl h-full object-cover projectImage transition-all ease-in-out duration-500"
                                    />
                                    <FaEye className=' opacity-0 eye absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] pointer-events-auto w-12 h-12 z-40 text-orange-400 transition-all ease-in-out duration-500 ' />
                                </div>
                            </div>
                            <div className=" mt-4">
                                <p className="text-sm text-[var(--text)] my-1">{e.name} • {new Date(e.date).toDateString()}</p>
                                <p className="text-xs text-gray-500">{e.title}</p>
                            </div>
                        </button>
                    )
                })
            }
        </div>
    )
}

export default Projects