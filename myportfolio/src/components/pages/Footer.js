import React from "react";
import githublogo from '../../github-512.webp'


export default function Footer() {
    return (
        <footer>
            <section className="contact-section bg-black">

                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fa-solid fa-briefcase text-primary mb-2"></i>
                                    <a
                                        href="https://drive.google.com/file/d/1JFJty-foRxRZ9lECpdcAM4pDUjCh-cq4/view?usp=sharing">
                                        <h4 className="text-uppercase m-0">Resume</h4>
                                    </a>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50">Check Out My Resume!</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0"><a
                                        href="https://www.gmail.com">Email</a></h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a
                                        href="https://www.gmail.com">anthony.diblasio11@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">linkedin</h4>
                                    <hr className="my-4 mx-auto" />
                                    <div className="small text-black-50"><a
                                        href="www.linkedin.com/in/anthony-diblasio">www.linkedin.com/in/anthony-diblasio</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="social d-flex justify-content-center">
                    <h1> Github</h1>
                    
                    <a className="mx-2" href="https://github.com/AnthonyDiBlasio">
                    <img className="img-fluid roundedCircle"
                    src={githublogo} alt="..." />
                </a>
                </div>
                <footer className="footer bg-black small text-center text-white-50">

                    <div className="container px-4 px-lg-5">Copyright &copy; AnthonyDiBlasio 2022</div>
                </footer>
            </section>
        </footer>
    );
}