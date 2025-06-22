import React from 'react'
import gsap from 'gsap'
function Door() {
    document.querySelector(".baksa").addEventListener( "mouseover", () => {
        gsap.fromTo(
            ".doorleft",
            {
              left: 0,
            rotateY: 0,
            duration: 1
            },
            {
              left: "-28%",
            rotateY: -90,
            duration: 1,
            ease: "power2.inOut"
            }
          )
          gsap.fromTo(
            ".doorright",
            {
            right: "-3%",
            rotateY: 0,
            duration: 1
            },
            {
            right: "-28%",
            rotateY: 90,
            duration: 1,
            ease: "power2.inOut"
            }
          )

    } )
}

export default Door
