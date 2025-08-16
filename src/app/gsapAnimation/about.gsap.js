import gsap from "gsap";
import { useRef } from "react";



function comeOneByOne(ref, isrendered,tl) {

    const boxes = ref.current?.querySelectorAll("#broken");

    if (isrendered.current) return
    // const tl = gsap.timeline({paused:true})

    tl.from(boxes, {
        x: () => gsap.utils.random(-100, 100),
        y: () => gsap.utils.random(-100, 100),
        opacity: 0,
        stagger: .01,
        duration: 0.5,
        ease: "power2.out",
    })

    const depthDivs = ref.current.querySelector("#depthTimeLine").querySelectorAll("div")

    depthDivs.forEach((element, i) => {
        if (i % 2 == 0) {
            tl.from(element, {
                x: 150,
                opacity: 0,
                stagger: .3,
                duration: 0.5,
                ease: "power2.out",
            }, "-=.3")
        } else {
            tl.from(element, {
                x: -150,
                opacity: 0,
                stagger: .3,
                duration: 0.5,
                ease: "power2.out",
            }, "-=.3")
        }
    });

    console.log("about runned")
    isrendered.current = true

    return tl


}

export default comeOneByOne
