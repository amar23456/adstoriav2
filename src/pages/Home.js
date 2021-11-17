import React from 'react'

import Logo from '../assets/images/logo.png'
import Video from '../assets/images/video.mp4'

import { motion } from "framer-motion"

import useWindowDimensions from '../assets/components/WindowSize';


import { Link } from "react-router-dom";

import { AiOutlineMenu } from 'react-icons/ai';

function Home() {
    const { height, width } = useWindowDimensions();
    return (
        <div className="main">
            <div className="main--info"
                initial={{ opacity: 1, x: -width }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3, duration: 1, type: 'easeInOut' }}
            >

                <div className="main--info--header">

                    <div className="main--info--header--logo">
                        <img src={Logo} alt="" />
                        <span>adstoria</span>
                    </div>     

                    <div className="main--info--header--nav-mobile">
                        <AiOutlineMenu size="25px" />
                    </div>

                </div>          

                <div className="main--info--title">
                    <h1>Evolve into your full potential with creative & growth solutions</h1>

                    <p>These are the words we live by in everything we do. Every story we tell, every brand we build, and every interaction we create must not only look beautiful but has to feel and function beautifully, too. Crafted to perfection.</p>
                </div>                

                <div className="main--info--cta">
                <Link to=""><button>Get started</button></Link>
                </div>

            </div>

            <div className="main--video"
                initial={{ width: width+5 }}
                animate={{ width: width/1.205 }}
                transition={{ delay: 1.78, duration: 1, type: 'easeInOut' }}
            >
                <div className="main--video--nav">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portofolio">Portofolio</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="main--video--cta">
                <Link to=""><button>Watch video</button></Link>
                </div>
                <video loop autostart autoPlay muted src={Video} 
                    initial={{ y:height }}
                    animate={{ y: 0 }}
                    transition={{ delay: .5, duration: 1.1, type: 'easeInOut' }}
                />
            </div>
        </div>
    )
}

export default Home
