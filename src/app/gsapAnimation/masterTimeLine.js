import gsap from "gsap";


const tl = gsap.timeline({ paused: true })
const animations = {}

export const registerAnimation = (key, func) => {
    animations[key] = func
}


export const buildTimeline = () => {
    tl.clear()
    animations?.A?.(tl)
    animations?.B?.(tl)
}

export const startTimeLine = ()=>{
    buildTimeline()
    console.log("runned")
    tl.play()

}