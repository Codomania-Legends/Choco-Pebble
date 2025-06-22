import React from 'react'
import "./PageFooter.css"
import splash from "/footerSplash.png"
function PageFooter() {
  return (
    <div className='page-footer flex'>
        <img src={splash} className="splash" />
    </div>
  )
}

export default PageFooter