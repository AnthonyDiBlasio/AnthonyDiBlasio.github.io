// Wheel.js
import React, { Component } from "react";
import Card from "./Card";
import githublogo from "../images/github-512.webp";
import linkedin from "../images/LinkedIn_icon_circle.svg.png";
import resume from "../images/resume.jpg";
import hackerRank from "../images/hackerrank.png";
import rw from "../images/rw.png";
import rentmyride from "../images/rentmyride.png";
import wheelImage from "../images/img_avatar.png";

export class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 100,
      cards: [],
      hasSpun: false,
    };

    this.temp_theta = 0.0;

    this.images = [
      githublogo,
      resume,
      hackerRank,
      linkedin,
      rw,
      rentmyride,
    ];
    this.links = [
      "https://github.com/AnthonyDiBlasio",
      "https://docs.google.com/document/d/19dz01Knl24N503VwSuvD84Nkmgfk6e8UxsTLOKc1kyE/edit?usp=sharing",
      "https://www.hackerrank.com/profile/anthony_diblasi1",
      "https://www.linkedin.com/in/anthony-diblasio/",
      "https://ratwerks.org/",
      "https://rentmyride01.herokuapp.com/",
    ];
  }

  componentDidMount() {
    this.generateCards();
  }

  generateCards() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let new_cards = [];

    for (let i = 0; i < 6; i++) {
      new_cards.push(
        <Card
          key={`card_${i}`}
          index={i}
          theta={(Math.PI / 3) * i}
          radius={this.state.radius}
          center={center_of_wheel}
          imageSrc={this.images[i % this.images.length]}
          linkTo={this.links[i % this.links.length]}
        />
      );
    }
    this.setState({ cards: new_cards });
  }

  handleWheelClick = () => {
    if (!this.state.hasSpun) {
      this.spinWheel();
      this.setState({ hasSpun: true });
    }
  };

  rotateToZero = () => {
    this.temp_theta = 0;
    this.wheel.style.transition = "transform 1s ease-in-out";
    this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta}deg)`;
  };

  spinWheel = () => {
    this.temp_theta += 360; // Rotate by 360 degrees for a single spin

    this.wheel.style.transition = "transform 3s cubic-bezier(0.1, 2.7, 0.58, 1)";
    this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta}deg)`;

  
  };

  render() {
    return (
      <div
        onClick={this.handleWheelClick}
        ref={(ref_id) => (this.wheel = ref_id)}
        style={{
          ...styles.wheel,
          backgroundImage: `url(${wheelImage})`,
        }}
      >
        {this.state.cards}
      </div>
    );
  }
}

const styles = {
  wheel: {
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100px",
    width: "100px",
    borderRadius: "50%",
    backgroundSize: "cover",
    cursor: "pointer",
    marginBottom: '5pc',

  },
};

export default Wheel;
