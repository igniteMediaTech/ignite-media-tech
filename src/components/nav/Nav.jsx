import React from 'react'
import './Nav.css'
import IgniteMedia from '../../assets/logo/IgniteMedia.png'


const Nav = () => {
  return (
    <div className='navbar-main'>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={IgniteMedia} alt="Logo" className="d-inline-block align-text" id="main-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active p-4" aria-current="page" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active p-4" aria-current="page" href="#">Theme</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active p-4" aria-current="page" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active p-4" aria-current="page" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active p-4" aria-current="page" href="#">Our Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Nav
