
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
      radius: 200,
      cards: [],
      hasSpun: false,
      isHovering: false,
    };

    this.temp_theta = 0.0;
    this.anim_id = null;

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

  handleMouseEnter = (event) => {
    const isOverCenterImage = this.isMouseOverCenterImage(event);

    if (isOverCenterImage) {
      if (!this.state.hasSpun) {
        this.spinWheel();
        this.setState({ hasSpun: true });
      }
    } else {
      this.enlargeCard(event);
    }

    this.setState({ isHovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
    clearTimeout(this.anim_id);

    if (this.state.hasSpun) {
      this.rotateToZero();
      this.setState({ hasSpun: false });
    }
  };

  isMouseOverCenterImage = (event) => {
    const rect = this.wheel.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
  };

  rotateToZero = () => {
    const rotationStep = 1;
    const rotateBack = () => {
      if (this.temp_theta > 0) {
        this.temp_theta -= rotationStep;
        this.wheel.style.transform = `translate(-50%, -50%) rotate(${
          (this.temp_theta * 1) % 360
        }deg)`;
        requestAnimationFrame(rotateBack);
      } else {
        this.setState({ hasSpun: false });
      }
    };

    rotateBack();
  };

  spinWheel = () => {
    this.temp_theta += 360; // Rotate by 360 degrees for a single spin

    this.wheel.style.transform = `translate(-50%, -50%) rotate(${
      (this.temp_theta * 1) % 360
    }deg)`;
  };

  enlargeCard(event) {
    const cards = document.getElementsByClassName("card");
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    for (let i = 0; i < cards.length; i++) {
      const cardRect = cards[i].getBoundingClientRect();

      const isMouseOverCard =
        mouseX >= cardRect.left &&
        mouseX <= cardRect.right &&
        mouseY >= cardRect.top &&
        mouseY <= cardRect.bottom;

      if (isMouseOverCard) {
        cards[i].style.transform = "scale(1.2)";
      } else {
        cards[i].style.transform = "scale(1)";
      }
    }
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
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
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    backgroundSize: "cover",
  },
};

export default Wheel;
