import React from 'react'
import "./PageFooter.css"
import splash from "/footerSplash.png"
function PageFooter() {
  return (
    <div className='page-footer flex'>
        <img src={splash} className="splashing" />
        <div className="web-name flex"></div>
        <hr />
        <div className="copyright-support flex"></div>
    </div>
  )
}

export default PageFooter