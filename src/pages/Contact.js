import React from 'react'
import Header from '../components/Header'

function Contact() {
    return (
        <>
            <Header />
            
            <div className="hero">
                <h1>Contact</h1>
            </div>

            <div className="main_contact">
                <div className="main_contact--informations">
                    <div className="main_contact--informations--top">
                        <h1>Contact informations</h1>
                        <p>Feel free to ask us any questions</p>
                    </div>
                    <ul>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Address</li>
                    </ul>
                    <div className="main_contact--informations-icons">
                        instagram
                    </div>
                </div>
                <div className="main_contact--form">
                    <form>
                        <h4>First Name</h4>
                        <input placeholder="First Name" />
                        <h4>Last Name</h4>
                        <input placeholder="Last Name" />
                        <h4>Email</h4>
                        <input placeholder="Email" />
                        <h4>Message</h4>
                        <textarea placeholder="Name" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
