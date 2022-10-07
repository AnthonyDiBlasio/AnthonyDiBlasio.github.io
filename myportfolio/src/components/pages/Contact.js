import React from "react";
import githublogo from '../../github-512.webp'
import linkedin from '../../LinkedIn_icon_circle.svg.png'

export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <section className="contact-section bg-black">

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-briefcase text-primary mb-2"></i>
                                    <a
                                        href="https://docs.google.com/document/d/1afa4-Ye1JB4s7t3gQlxD8okPmAUqqdkD2-rLUnVwyow/edit?usp=sharing">
                                        <h4 className="text-uppercase m-0">Resume</h4>
                                    </a>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50">Click the link above to see my Resume!</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a
                                        href="https://www.gmail.com">anthony.diblasio11@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                            <a href="https://www.linkedin.com/in/anthony-diblasio-499491227/">
                            <img src={linkedin}className=" linkedin fluid-roundedCircle" alt="..."></img>
                                
                                    <div className="card-body text-center">
                                        
                                        <h4 className="text-uppercase m-0">LinkedIn:</h4>
                                    </div>
                                </a>
                                <hr className="my-4 mx-auto" />
                                <div className="small text-black-50">Click on the link above to find my LinkedIn profile!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social d-flex justify-content-center">
                    <h1> Click the Github logo to see my Github!</h1>
                    
                    <a className="mx-2" href="https://github.com/AnthonyDiBlasio">
                    <img className="img-fluid roundedCircle"
                    src={githublogo} alt="..." />
                </a>
                </div>
                <footer className="footer bg-black small text-center text-white-50">

                    <div className="container px-4 px-lg-5">Copyright &copy; AnthonyDiBlasio 2022</div>
                </footer>
            </section>
        </section>
    );
}