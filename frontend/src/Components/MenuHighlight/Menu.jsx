 import React, { useEffect } from 'react'
import BackgroundStart from '../../Animations/background'
import Door from '../../Animations/Door'
import "./Menu.css"
import doorleft from "/dooleft.png"
import doorright from "/doorright.png"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)
function Menu() {
  useEffect( () => {
    gsap.to( ".menu-high" , {
      scrollTrigger : {
        trigger : ".menu-high",
        snap: {
          snapTo: 1 / 2, 
          duration: 0.3,
          ease: "power1.inOut"
        }
      }
    } )
      BackgroundStart(".background-gr")
      Door()
      gsap.to(".chocolateDrop", {
        height: "75%",
        ease: "power1.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".menu-high",
          start: "top bottom", // when .menu-high top enters viewport bottom
          end: "bottom top",   // when .menu-high bottom leaves viewport top
          toggleActions: "play reverse play reverse",
        }
      })
  }, [] )
  return (
    <div className='menu-high flex'>
      <div className="mainBuyChocolateDiv background-gr flex">
      <h1 className='heading-menu'>Menu Highlights</h1>
        <img src='/chocolateDrop.png' className='chocolateDrop' />
      </div>
      <div className="menu-boxes flex">
        <div className="menuBox1 baksa flex">
          <img src={doorleft}  className='doorleft1 door' />
          <img src={doorright} className='doorright1 door' />
        </div>
        <div className="menuBox2 baksa">
          <img src={doorleft}  className='doorleft2 door' />
          <img src={doorright} className='doorright2 door' />

        </div>
        <div className="menuBox3 baksa">
          <img src={doorleft}  className='doorleft3 door' />
          <img src={doorright} className='doorright3 door' />

        </div>
      </div>
    </div>
  )
}

export default Menu
