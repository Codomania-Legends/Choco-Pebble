import React, { useEffect, useState } from 'react'
import "./aboutus.css"
import gsap from "gsap"
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)
function ContentAboutUS({details}) {
  const [show , setshow] = useState(false)
  useEffect(() => {
    gsap.fromTo(".image-profile-aboutus", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut"
    }, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power1.inOut"
    });
    const split = SplitText.create(".description-aboutus", { type: "words" });
    gsap.from(split.words, {
      y: -100,
      opacity: 0,
      rotation: "random(-80, 80)",
      duration: 0.7,
      ease: "back",
      stagger: 0.005
    });
    gsap.fromTo(".contact-aboutus", {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 3,
    });

    return () => {
      gsap.killTweensOf(".image-profile-aboutus");
      gsap.killTweensOf(split.words);
      gsap.killTweensOf(".contact-aboutus");
    };
  }, []);
  return (
    <div className={`contentAboutUS flex`}>
        <div className={`profilePic-aboutus ${details.name == "Vidhi" ? "VidhiBG" : "AnshulBG"}`}>
            <img src="/anshul.jpg" alt="" className="image-profile-aboutus" />
        </div>
        <div className={`description-aboutus ${details.name == "Vidhi" ? "Vidhi" : "Anshul"}`}>{details.description}</div>
        <div className="contact-aboutus">
            <button id={show ? "show-minus" : null} onClick={() => setshow(!show)} className={` Button-aboutus  ${details.name == "Vidhi" ? "VidhiBG" : "AnshulBG"}`}>
              {show ? <i class="fa-solid fa-minus"></i> : "Contact us" }
            </button>
            <i 
              id={!show?"hide-me-contactus":null} 
              class={`${details.name == "Vidhi"? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-github`} onClick={()=>{}}>
            </i>
            <i 
              id={!show?"hide-me-contactus":null} 
              class={`${details.name == "Vidhi"? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-linkedin`} onClick={()=>{}}>
            </i>
            <i 
              id={!show?"hide-me-contactus":null} 
              class={`${details.name == "Vidhi"? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-brands fa-whatsapp`} 
              onClick={()=>{window.location.href="https://wa.me/919165872964"}}>
            </i>
            <i 
              id={!show?"hide-me-contactus":null} 
              class={`${details.name == "Vidhi"? "vidhi-contactus" : "anshul-aboutus"} brands-contactus fa-solid fa-envelope`} onClick={()=>{}}>
            </i>
        </div>
    </div>
  )
}

export default ContentAboutUS
