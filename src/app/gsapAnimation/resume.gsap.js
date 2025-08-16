import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function resumeAnimation(isAnimated, isDesktop) {
    if (isAnimated.current) return

    isAnimated.current = true

    const tl = gsap.timeline()

    if (isDesktop) {
        tl.from(document.querySelector("#title").querySelectorAll("#broken"), {
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-100, 100),
            opacity: 0,
            duration: .5,
            stagger: 0.03
        })
        tl.from(document.querySelector("#subheadding").querySelectorAll("#broken"), {
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-100, 100),
            opacity: 0,
            duration: .5,
            stagger: 0.03
        })

        const skill = document.querySelectorAll("#skill")
        const images = document.querySelectorAll("#images")

        for (let i = 0; i < skill.length; i++) {
            tl.from(skill[i].querySelectorAll("#broken"), {
                x: () => gsap.utils.random(-100, 100),
                y: () => gsap.utils.random(-100, 100),
                opacity: 0,
                duration: .5,
                stagger: 0.03
            },)

            const icons = Array.from(images[i].children)

            tl.from(icons, {
                x: () => gsap.utils.random(-100, 100),
                y: () => gsap.utils.random(-100, 100),
                opacity: 0,
                duration: .3,
                stagger: 0.3,
            },)

            icons.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    gsap.to(e, {
                        scale: 1.5,
                        duration: .5,
                        x: 10,
                        y: -10,
                        zIndex: 10,

                    })
                })
                e.addEventListener("mouseleave", () => {
                    gsap.to(e, {
                        scale: 1,
                        duration: .5,
                        x: 0,
                        y: 0,
                    })
                })
            })
        }
    } else {
        tl.from(document.querySelector("#title").querySelectorAll("#broken"), {
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-100, 100),
            opacity: 0,
            duration: .5,
            stagger: 0.03
        })
        tl.from(document.querySelector("#subheadding").querySelectorAll("#broken"), {
            x: () => gsap.utils.random(-100, 100),
            y: () => gsap.utils.random(-100, 100),
            opacity: 0,
            duration: .5,
            stagger: 0.03
        })

        const skill = document.querySelectorAll("#skill")
        const images = document.querySelectorAll("#images")

        for (let i = 0; i < skill.length; i++) {
            tl.from(skill[i].querySelectorAll("#broken"), {
                x: () => gsap.utils.random(-1000, 1000),
                y: () => gsap.utils.random(-1000, 1000),
                opacity: 0,
                duration: .1,
                // stagger: 0.03,
                scrollTrigger: {
                    trigger: skill[i],
                    scrub: 2,
                    scroller: "body",
                    end:"top 60%",
                    toggleActions: "play none none none",
        

                }
            },)

            const icons = Array.from(images[i].children)

            tl.from(icons, {
                x: () => gsap.utils.random(-1000, 1000),
                y: () => gsap.utils.random(-1000, 1000),
                opacity: 0,
                duration: .1,
                scrollTrigger: {
                    trigger: skill[i],
                    scrub: 2,
                    scroller: "body",
                    end:"top 60%",
                    toggleActions: "play none none none",
        
                }
            },)

            icons.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    gsap.to(e, {
                        scale: 1.5,
                        duration: .5,
                        x: 10,
                        y: -10,
                        zIndex: 10,
                    })
                })
                e.addEventListener("mouseleave", () => {
                    gsap.to(e, {
                        scale: 1,
                        duration: .5,
                        x: 0,
                        y: 0,
                        zIndex:0
                    })
                })
            })
        }
    }

    const tl2 = gsap.timeline({
        scrollTrigger: {

            trigger: "#eduSection",
            scroller: "body",
            start: "top 80%",
            // scrub: 1,
            // pin:true
        }
    })

    tl2.from(document.querySelector("#education").querySelectorAll("#broken"), {
        x: () => gsap.utils.random(-1000, 1000),
        y: () => gsap.utils.random(-10, 10),
        opacity: 0,
        duration: .5,
        stagger: 0.05
    })

    const institudes = document.querySelectorAll("#institudes li")

    // tl2.from(institudes.querySelectorAll("#broken"), {
    //     x: ()=>gsap.utils.random(-1000,1000),
    //     y: ()=>gsap.utils.random(-1000,1000),
    //     opacity: 0,
    //     duration: .7,
    //     stagger:.3
    // })

    institudes.forEach((e) => tl2.from(e.querySelectorAll("#broken"), {
        x: () => gsap.utils.random(-10, 10),
        // y: () => gsap.utils.random(-10==, 10),
        opacity: 0,
        duration: .7,
        stagger: .03
    }))

}

export default resumeAnimation