import React from 'react'
import { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import "./Home.css"
import BackgroundStart from '../../Animations/background'
import chocobar from "/chocoBar.svg"
import HC from "../HorizontalComponent/HC"
import Chocobar from '../../Animations/Chocobar'

import chocochip from "/chocoChip.svg"
import chocolatesplashleft from "/barBackSplashLeft.svg"
import chocolatesplashright from "/barBackSplashRight.svg"

function Home() {
  useEffect( () => {
    BackgroundStart(".background-gr")
    Chocobar()
  } )
  
  return (
    <>
        <main className="home background-gr flex">
            <Navbar/>
            <div className="chocobars flex">
              <div className="bar1 bars">
                <img src={chocobar} className='bar-img1 bar-img' />
              </div>
              <div className="bar2 bars">
                <img src={chocobar} className='bar-img2 bar-img' />
              </div>
              <div className="bar3 bars">
                <img src={chocobar} className='bar-img3 bar-img' />
              </div>
              {/* splash */}
              <div className="chocolate-splash-left splash">
                <img src={chocolatesplashleft} className='splash-left' />
              </div>
              <div className="chocolate-splash-right splash">
                <img src={chocolatesplashright} className='splash-right' />
              </div>
              {/* chocochip */}
              <div className="chocochips">
                <img src={chocochip} className='choco-chip1 chippy' />
                <img src={chocochip} className='choco-chip2 chippy' />
                <img src={chocochip} className='choco-chip3 chippy' />
                <img src={chocochip} className='choco-chip4 chippy' />
                <img src={chocochip} className='choco-chip5 chippy' />

              </div>
            </div>
        </main>
        <HC />
    </>
  )
}

export default Home