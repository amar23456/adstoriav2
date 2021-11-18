import React, {useCallback} from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Logo from '../assets/images/logo.png'
import Video from '../assets/images/video_compressed.webm'
import VideoFull from '../assets/images/video.mp4'

import { Link } from "react-router-dom";

import { AiOutlineMenu } from 'react-icons/ai';

function Home() {
    const handle = useFullScreenHandle();
    return (
        <div className="main">
            <div className="main--info">

                <div className="main--info--header">

                    <Link to="/"><div className="main--info--header--logo">
                        <img src={Logo} alt="" />
                        <span>adstoria</span>
                    </div></Link>     

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

            <div className="main--video">
                <div className="main--video--nav">
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/portofolio">Portofolio</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="main--video--cta">
                <button onClick={handle.enter}>Watch video</button>
                <FullScreen handle={handle}>
                    <video controls lazy loop autoPlay src={VideoFull} class="video-full" />
                </FullScreen>
                </div>
                <video lazy loop autostart autoPlay muted src={Video} />
            </div>
        </div>
    )
}

export default Home
