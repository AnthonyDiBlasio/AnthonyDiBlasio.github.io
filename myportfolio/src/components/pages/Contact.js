import React from "react";
import githublogo from '../../github-512.webp'


export default function Contact() {
    return (
        <section className="contact-section" id="contact">
             <div className="social d-flex justify-content-center">
                <h1>Check out my Github for many more projects</h1>
                    
                    <a className="mx-2" href="https://github.com/AnthonyDiBlasio">
                    <img className="img-fluid roundedCircle"
                    src={githublogo} alt="..." />
                </a>
                </div>
    

        </section>
    );
}