import React, { useState } from "react";
import '../../index.css'
import ratwerks from '../../images/rw.png'
import rentmyride from '../../images/rentmyride.jpg'



export default function Projects() {
    const [isHovering, setIsHovering] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);





    return (
        <section style={{ marginTop: "1pc", marginBottom: "1pc" }} className="container-projects">
            <div style={{ marginTop: "10pc", marginLeft: "2pc" }} className="grid-container">
                <div className="grid-child">

                    <h1 style={{ marginLeft: "5pc" }}>Projects</h1>
                    <div className="line-container2" ></div>
                    <a href='https://github.com/AnthonyDiBlasio/ratwerksllc '>
                        <h3 style={{marginTop: "1pc", color: "black", marginLeft: "6pc" }}
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}

                        >
                            Ratwerks Engineering
                        </h3></a>
                    <a href='https://github.com/AnthonyDiBlasio/RentMyRide'> <h3 style={{ color: "black", marginLeft: "6pc" }}
                        onMouseEnter={() => setIsHovering2(true)}
                        onMouseLeave={() => setIsHovering2(false)}

                    >
                        RentmyRide
                    </h3></a>
                    </div>
                    <div className="grid-child" style={{  marginTop: "5pc" }}>
                        <div>
                            <div>
                                {isHovering && (
                                    <div className=''>


                                        <img style={{ position: "", marginTop: "2pc", borderRadius: "5%", width: "400px" }} src={ratwerks} alt="ratwerks" className='img-fluid' />

                                    </div>
                                )}
                            </div>

                        </div>

                        <div>
                            {isHovering2 && (
                                <div className=''>


                                    <img style={{ marginTop: "2pc", borderRadius: "5%", height: "300px", width: "500px" }} src={rentmyride} alt="rentmyride" className='img-fluid' />

                                </div>
                            )}
                        </div>
                    </div>


                </div>



            
        </section>
    )
}


