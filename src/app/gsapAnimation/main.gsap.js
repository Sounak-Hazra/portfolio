import gsap from "gsap";

function timeLineMain(ref, isDesktopOrLaptop, tl) {
    const aside = ref.current.querySelector("aside")
    const mainImage = ref.current.querySelector("#timelineImage")
    const main = ref.current.querySelector("#main")

    let nav 
    if (isDesktopOrLaptop) {
        nav = ref.current.querySelector("nav.md\\:flex")
    } else {
        nav = ref.current.querySelector("nav.md\\:hidden")
    }
    const navElements = nav.querySelectorAll("li")

    gsap.set([ref.current, aside, mainImage, ...aside.querySelectorAll("#epicons"), ...aside.querySelectorAll("#icons a"), main, nav, ...navElements], {
        clearProps: "all",
    })

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