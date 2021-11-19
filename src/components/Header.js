import React from 'react'

import { Link } from "react-router-dom";

import Logo from '../assets/images/logo.png'
import { AiOutlineMenu } from 'react-icons/ai';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

function Header() {
    return (
        <div className="header">
            <Link to="/"><div className="header--logo">
                <img src={Logo} alt="" />
                <span>adstoria</span>
            </div></Link> 

            <div className="header--nav">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/portofolio">Portofolio</Link>
                <Link to="/about-us">About Us</Link>
            </div>

            <div className="header--cta">
                Contact
                <BsFillArrowRightCircleFill size="23" />
            </div>
        </div>
    )
}

export default Header
