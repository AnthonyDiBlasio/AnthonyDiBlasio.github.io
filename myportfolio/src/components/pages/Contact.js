import React from "react";
import '../../index.css'


export default function Contact() {
    return (
        <section className="contact-section grid-container" id="contact">
            <div style={{marginTop: "14pc",marginLeft:"10pc"}} className="grid-child" >
                <h1 style={{fontWeight:"bold"}}>Contact me</h1>
                
                <p style={{marginTop:"" }}><a style={{marginTop:"15pc", marginLeft:"" ,color: "#353535" }} href="https://github.com/AnthonyDiBlasio">Follow me on GitHub</a></p>
                <p ><a style={{marginLeft:"" ,color: "#353535"  }} href="https://www.linkedin.com/in/anthony-diblasio">Connect on LinkedIn</a></p>
                <p ><a style={{marginLeft:"", color: "#353535" }} href="https://drive.google.com/file/d/1N68LC0PbqARABMsE-EkuA6-WJzg1_lcW/view?usp=share_link">Check out my resume</a></p>
                

            </div>
          
            <div className="line-container" ></div>
            <div style={{marginTop:"14pc" }} className="container-email" >
                <h1 style={{fontWeight:"bold"}}>Email me</h1>
                <p><a style={{marginTop:"15pc", color: "#353535" }} href="mailto:anthony.diblasio11@gmail.com">anthony.diblasio11@gmail.com</a></p>
                </div>
        </section>
  
    );
}