import React from "react";
import myImg from '../../img_avatar.png'

export default function About() {
    return (
        <section class="about-section text-center" id="about">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8">
                        <h2 class="text-white mb-4">About me</h2>
                        <p class="text-white-50">
                            Hi my name is Anthony DiBlasio, this portfolio is an introduction to some of my recent work,
                            links to projects, and contact information.
                            A little about me is that I started my career in Real Estate. After managing to find other
                            passions I switched to a career in web development at the start of 2022.
                            Some fun facts about me is that I enjoy vacationing at the Jersey shore, working on my 1990
                            Mazda Miata, and spending time learning new skills and hobbies, such as fpv drones, playing the
                            guitar, cooking, and many others.
                        </p>
                    </div>
                </div>
                <img class="img-fluid rounded-circle"
                    src={myImg} alt="..." />
            </div>
        </section>

    );
}