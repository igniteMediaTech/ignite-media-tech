import React from 'react'
import './Main.css'
import homeBg from '../../assets/images/homeBg.png'

const Main = () => {
  return (
    <div className="main-body">
        <div className="main-body-container">
            <div className="main-body-header">NEED A BUSINESS WEBSITE?</div>
            <div className="main-body-sub">Build a strong Brand Identity website with us that makes your Business Standout.</div>
        </div>
        <div className="bg-container">
                <img src={homeBg} alt="main-bg" className="main-bg" />
        </div>
    </div>
  )
}

export default Main