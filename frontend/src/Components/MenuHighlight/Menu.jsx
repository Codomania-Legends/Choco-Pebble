import React, { useEffect } from 'react'
import BackgroundStart from '../../Animations/background'
import Door from '../../Animations/Door'
import "./Menu.css"
import doorleft from "/doorLeft.svg"
import doorright from "/doorRight.svg"
function Menu() {
    useEffect( () => {
        BackgroundStart(".background-gr")
        Door()
  } )
  return (
    <div className='menu-high flex'>
      <div className="mainBuyChocolateDiv background-gr flex">
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
