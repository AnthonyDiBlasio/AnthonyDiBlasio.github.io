import React from "react";
import '../../index.css'
import aboutPhoto from '../../images/aboutPhoto.jpg'

export default function About() {
    return (
        <section  style={{marginTop:"9pc",marginBottom:"50pc"}}className="about-section col-12" id="about">
                    <div style={{position:"absolute", marginTop:"22pc",marginLeft:"15pc"}} className="">
                       <img className="aboutPhoto"src={aboutPhoto} alt="propic"></img>
                       <p ><a style={{color:"#353535"}}href="https://github.com/AnthonyDiBlasio">Follow me on GitHub</a></p>
                       <p ><a style={{color:"#353535"}}href="https://www.linkedin.com/in/anthony-diblasio">Connect on LinkedIn</a></p>
                       <p ><a style={{color:"#353535"}}href="https://drive.google.com/file/d/1N68LC0PbqARABMsE-EkuA6-WJzg1_lcW/view?usp=share_link">Check out my resume</a></p>
                       </div>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                     
                        <h2 style={{textAlign:"center", fontWeight:"bolder",fontSize:"45px",color:"black", marginBottom:"8pc"}} className="">About</h2>
                        <br></br>
                        <div className="title-container" ></div>
                        <br></br>
                        <br></br>
                      
                        <h1 style={{color:"black",fontSize:"25px",marginLeft:"7pc",fontWeight:"bold",display:"block", marginTop:"5pc"}} className=" col-10">
                            I'm Anthony DiBlasio, a full-stack web developer born in the US and currently residing in the greater Philadelphia area. This portfolio is an introduction to some of my recent work,
                            links to projects, and contact information.
                          
                        </h1>
                        <br></br>
                        <br></br>
                        <h2 style={{fontSize:"20px",marginTop:"8pc",marginLeft:"7pc",fontWeight:"bold",display:"block"}}>How did I get here? Here's my little story of my beginnings...</h2>
                        <br></br>
                       
                        <p  style={{ marginTop:"5pc",marginLeft:"7pc",fontSize:"20px",fontWeight:"bold",display:"block"}}className="col-6">  A little about me is that I began my career in Real Estate starting a business from scratch after exiting college early. 
                            A few years of struggling to find my place, I decided to entertain how to transition out; 
                            and find how I could incorporate my ideals, thoughts, and skills to a more expansive ecosytem. 
                            After finding my passion in coding
                            and how it opened a whole new world to me, I switched to a career in web development at the start of 2022.  </p>
                        


                      
                    </div>
                </div>
              
            </div>
        </section>

    );
}