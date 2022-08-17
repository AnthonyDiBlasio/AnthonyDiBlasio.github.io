import React from "react";
import githublogo from '../../github-512.webp'
import linkedin from '../../LinkedIn_icon_circle.svg.png'

export default function Contact() {
    return (
        <section class="contact-section" id="contact">
            <section class="contact-section bg-black">
                <a href="#contact"></a>
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5">
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <i class="fa-solid fa-briefcase text-primary mb-2"></i>
                                    <a
                                        href="https://docs.google.com/document/d/1afa4-Ye1JB4s7t3gQlxD8okPmAUqqdkD2-rLUnVwyow/edit?usp=sharing">
                                        <h4 class="text-uppercase m-0">Resume</h4>
                                    </a>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50">Click the link above to see my Resume!</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                                <div class="card-body text-center">
                                    <i class="fas fa-envelope text-primary mb-2"></i>
                                    <h4 class="text-uppercase m-0">Email</h4>
                                    <hr class="my-4 mx-auto" />
                                    <div class="small text-black-50"><a
                                        href="https://www.gmail.com">anthony.diblasio11@gmail.com</a></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3 mb-md-0">
                            <div class="card py-4 h-100">
                            <a href="https://www.linkedin.com/in/anthony-diblasio-499491227/">
                            <img src={linkedin}class=" linkedin fluid-roundedCircle"></img>
                                
                                    <div class="card-body text-center">
                                        
                                        <h4 class="text-uppercase m-0">LinkedIn:</h4>
                                    </div>
                                </a>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">Click on the link above to find my LinkedIn profile!</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="social d-flex justify-content-center">
                    <h1> Click the Github logo to see my Github!</h1>
                    
                    <a class="mx-2" href="https://github.com/AnthonyDiBlasio">
                    <img class="img-fluid roundedCircle"
                    src={githublogo} alt="..." />
                </a>
                </div>
                <footer class="footer bg-black small text-center text-white-50">

                    <div class="container px-4 px-lg-5">Copyright &copy; AnthonyDiBlasio 2022</div>
                </footer>
            </section>
        </section>
    );
}