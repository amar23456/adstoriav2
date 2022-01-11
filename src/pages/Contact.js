import React from 'react'
import Header from '../components/Header'

import { RiPhoneFill, RiMailFill, RiMapPin2Fill, RiFacebookFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';

import { ExternalLink } from 'react-external-link';
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import Fade from 'react-reveal/Fade';

function Contact() {
    return (
        <>
            <Header />

            <div className="main_contact">
                <div className="main_contact--informations">
                    <div className="main_contact--informations--top">
                        <h1>Contact informations</h1>
                        <p>Feel free to ask us any questions</p>
                    </div>
                    <ul>
                        <li><RiPhoneFill size="30px" />+0123 4567 8910</li>
                        <li><RiMailFill size="30px" />contact@adstoria.io</li>
                        <li><RiMapPin2Fill size="30px" />102 Street 2714 Don</li>
                    </ul>
                    <div className="main_contact--informations--icons">
                        <div className="icon">
                            <ExternalLink href="https://www.facebook.com/AdStoria-Lab-107793971775092"><RiFacebookFill size="30px" /></ExternalLink>
                        </div>
                        <div className="icon">
                             <RiInstagramFill size="30px" />   
                        </div>
                        <div className="icon">
                            <RiYoutubeFill size="30px" />
                        </div>
                    </div>
                </div>


                <div className="main_contact--form">
                    <form>
                        <h4>First Nase</h4>
                        <input placeholder="First Name" />
                        <h4>Last Name</h4>
                        <input placeholder="Last Name" />
                        <h4>Email</h4>
                        <input placeholder="Email" />
                        <h4>Message</h4>
                        <textarea placeholder="Message" />
                        <Link to="/contact"><div className="button">
                Send 
                <BsFillArrowRightCircleFill size="23" />
            </div></Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
