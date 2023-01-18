import React from "react";

import projImage2 from '../../Screenshot 2022-07-06 113416.jpg'
import projImage3 from '../../Screenshot 2022-10-24 135025.jpg'
import Carousel from 'react-bootstrap/Carousel';


export default function Projects() {
    return (
        <section className="">
            <Carousel variant ="dark" fade>
             
                <Carousel.Item><a href="https://github.com/cpaschall/codeOp">
                    <img
                        className="d-block w-100"
                        src={projImage2}
                        alt="Second slide"
                    /></a>

                    <Carousel.Caption>
                        <h3>Project CodeOP</h3>
                        <p>This project demonstrated my ability to create a full stack web application with a small team of developers using Models, Views, and
                            Controllers. This app allows for users to post project ideas that they need help
                            with specifically for coding ideas and the skills needed for said project. Users can
                            also comment on projects they want to help work on that match up with their skills.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item><a href="https://github.com/AnthonyDiBlasio/RentMyRide">
                    <img
                        className="d-block w-100"
                        src={projImage3}
                        alt="Third slide"
                    /></a>

                    <Carousel.Caption>
                        <h3>Project RentmyRide</h3>
                        <p>
                            A full stack web application that allows users to post vehichles that they own for other users to rent. Used mongoDB, React, and other packages to complete this project.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}


