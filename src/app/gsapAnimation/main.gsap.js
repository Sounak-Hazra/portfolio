import { stagger } from "framer-motion";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";




function timeLineMain(ref, isrendered, isDesktopOrLaptop, tl) {

    if (isrendered.current) return


    isrendered.current = true
    // const tl = gsap.timeline({paused:true})
    const aside = ref.current.querySelector("aside")
    const mainImage = ref.current.querySelector("#timelineImage")
    const brokenDataArray = ref.current.querySelectorAll("#asideBroken #broken")
    const main = ref.current.querySelector("#main")

    let nav 
    if (isDesktopOrLaptop) {
        nav = ref.current.querySelector("nav.md\\:flex")
    } else {
        nav = ref.current.querySelector("nav.md\\:hidden")
    }
    const navElements = nav.querySelectorAll("li")
    // nav.forEach(element => {
    //     navElements.push(...element.querySelectorAll("li"))
    // });

    tl
        .to(ref.current, {
            opacity: 1,
            duration: .1
        })
        .from(aside, {
            x: -150,
            duration: 0.5,
            opacity: 0
        })
        .from(mainImage, {
            x: -150,
            duration: 0.5,
            opacity: 0
        })


    tl
        .from(aside.querySelectorAll("#epicons"), {
            x: -30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.3
        })
        .from(brokenDataArray, {
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-100, 100),
            opacity: 0,
            stagger: 0.03
        })
        .from(aside.querySelectorAll("#icons a"), {
            y: 30,
            duration: .2,
            stagger: 0.1,
            opacity: 0
        })
        .from(main, {
            x: 150,
            duration: 1,
            opacity: 0
        })
        .from(nav, {
            x: 150,
            duration: .3,
            opacity: 0
        })
        .from(navElements, {
            y: -150,
            duration: .5,
            opacity: 0,
            stagger: 0.3
        })


    return tl

}

export default timeLineMain