import React from "react";
import projImage1 from '../../Screenshot 2022-04-30 151302.jpg'
import projImage2 from '../../Screenshot 2022-07-06 113416.jpg'
import projImage3 from '../../Screenshot 2022-07-06 112913.jpg'


export default function Projects() {
    return(
    <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
           
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7"><a href="https://github.com/AnthonyDiBlasio/stock-weather"><img
                            class="img-fluid mb-3 mb-lg-0"
                            src={projImage1}
                            alt="..." /></a></div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                        <h4>Project Mist</h4>
                        <p class="text-black-50 mb-0">This was a project showing off my capabilty of working with server
                            side APIS.</p>
                    </div>
                </div>
            </div>
           
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><a href="https://github.com/cpaschall/codeOp"><img class="img-fluid"
                            src={projImage2}
                            alt="..." /></a></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                                <h4 class="text-white">Project CodeOP</h4>
                                <p class="mb-0 text-white-50">This project demonstrated my ability to create a full
                                    stack web application with a small team of developers using Models, Views, and
                                    Controllers. This app allows for users to post project ideas that they need help
                                    with specifically for coding ideas and the skills needed for said project. Users can
                                    also comment on projects they want to help work on that match up with their skills.
                                </p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6"><a href="https://github.com/AnthonyDiBlasio/tech-blog-MVC"><img class="img-fluid"
                            src={projImage3}
                            alt="..." /></a></div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                <h4 class="text-white">Tech Blog</h4>
                                <p class="mb-0 text-white-50">Another example of a project with its respect to MVC and
                                    full stack
                                    development. This project allows for a user to signup, login and create a blog post.
                                    Users can also comment on a blog post.
                                </p>
                                <hr class="d-none d-lg-block mb-0 me-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}