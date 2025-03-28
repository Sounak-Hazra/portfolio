import React, { useCallback, useEffect, useState, memo, useMemo } from 'react'
import { Separator } from '@/components/ui/separator'
import Projects from '../(utility)/Projects'
import "./portfolio.css"
import ProjectDetails from '../(utility)/ProjectDetails'
import useSetProjectArray from '@/app/(app)/hooks/useSetProjectsArray'


const Portfolio = ({project}) => {

    // const [project, setProject] = useState([]);
    const [isDetails, setIsDetails] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [projectDetails, setProjectDetails] = useState({})

    const { arrayOfProjects, allCategorys, changeArray } = useSetProjectArray(project, "all")




    return (
        <>
            <div className='w-full min-h-full py-7 px-7 rounded-3xl '>
                <h1 className='text-3xl text-[var(--text)] font-extrabold '>
                    Portfolio
                </h1>
                <Separator className='w-full my-5 sm:my-8' />
                {isDetails && <ProjectDetails projectDetails={projectDetails} setIsDetails={setIsDetails} />}
                {!isDetails &&
                    <div className='h-fit text-[var(--text)]'>
                        <div className='max-w-full overflow-x-auto overflow-y-hidden no-scrollbar'>
                            {/* <span className='font-bold text-sm'>All</span>
                            <span className='font-bold text-sm'>Web devlopment</span>
                            <span className='font-bold text-sm'>Games</span> */}
                            <div className='flex items-center gap-x-5 '>
                                <div key={"all"}>
                                    <button onClick={() => changeArray("all")} className='font-bold text-sm'>All</button>
                                </div>
                                {
                                    allCategorys.map((e, i) => {
                                        return (
                                            <div key={e}>
                                                <button onClick={() => changeArray(e)} className='font-bold text-sm'>{e}</button>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='my-5'>
                            <Projects projects={arrayOfProjects} setIsDetails={setIsDetails} setProjectDetails={setProjectDetails} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default memo(Portfolio)