import React from 'react'
import "../styles/Footer.css"
import {FaLinkedin} from 'react-icons/fa';
import {BsInstagram, BsGithub} from 'react-icons/bs';

function Footer() {
    return (
        <div className='footer'>
            <footer className="bg-dark text-center text-white">
                <div className="p-1">
                    <section>
                        <a className="btn btn-sm btn-outline-light btn-floating m-1" style={{borderRadius: "50%"}} href="https://www.linkedin.com/in/matheusfinatto/" role="button">
                            <FaLinkedin/>
                        </a>
                        <a className="btn btn-sm btn-outline-light btn-floating m-1" style={{borderRadius: "50%"}} href="https://github.com/MatheusFinatto" role="button">
                            <BsGithub/>
                        </a>

                        <a className="btn btn-sm btn-outline-light btn-floating m-1" style={{borderRadius: "50%"}} href="https://www.instagram.com/matheusfinatto/" role="button">
                            <BsInstagram/>
                        </a>
                    </section>
                </div>

                <div className="text-center p-1" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
                    Made by Matheus Finatto, 2022 
                    <br></br>
                    Take a look at my social media above
                </div>
            </footer>
        </div>

    )
}

export default Footer;