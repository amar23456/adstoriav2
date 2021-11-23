import React from 'react'
import { Helmet } from "react-helmet";

import ServicesBrand from '../assets/images/services-brand.png'

import Header from '../components/Header'

import { MdOutlineHorizontalRule } from 'react-icons/md'

function Services() {
    return (
        <>
            <Helmet>
                <title>Services - Adstoria</title>
            </Helmet>

            <Header />

            <div className="hero">
                <h1>OUR CAPABILITIES</h1>
            </div>

            <div className="main_services">

                <div className="main_services--item">
                    <div className="main_services--item--top">
                        <div className="main_services--item--top--number">
                            1
                        </div>
                        <div className="main_services--item--top--title">
                            <h2>Brand & Identity</h2>
                        </div>
                    </div>
                    <div className="main_services--item--content">
                        <p>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.</p>
                        <div className="main_services--item--content--list">
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />The story behind the brand
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Logo design
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Packaging
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Visual ads
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Some lipsum text
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Another text lorem here
                            </div>
                        </div>
                    
                    </div>
                </div>

                
                <div className="main_services--item bg-color none-mobile">
                    <img src={ServicesBrand} alt="" />
                </div>

                
                <div className="main_services--item bg-color none-mobile">
                    <img src={ServicesBrand} alt="" />
                </div>

                <div className="main_services--item">
                    <div className="main_services--item--top">
                        <div className="main_services--item--top--number empty-number">
                            2
                        </div>
                        <div className="main_services--item--top--title">
                            <h2>Video production</h2>
                        </div>
                    </div>
                    <div className="main_services--item--content">
                        <p>We fuel the growth of purpose driven brands through strategy activation, design empowerment, and market adoption. From cultivating new ideas to connecting the dots for customers or users, these are our core principles.</p>
                        <div className="main_services--item--content--list">
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />The story behind the brand
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Logo design
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Packaging
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Visual ads
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Some lipsum text
                            </div>
                            <div className="main_services--item--content--list--item">
                                <MdOutlineHorizontalRule />Another text lorem here
                            </div>
                        </div>
                    
                    </div>
                </div>

            </div>
        </>
    )
}

export default Services
