// Card.js
import React, { useState } from "react";

function get_my_coords(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

function Card(props) {
  const [isHovered, setIsHovered] = useState(false);
  const new_coords = get_my_coords(props.theta, props.radius);

  const handleCardClick = (event) => {
    event.preventDefault();
    // Handle the click event
    window.open(props.linkTo, "_blank");
  };

  return (
    <a
      href={props.linkTo}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.card,
        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div
        style={{
          ...styles.imageContainer,
          transform: `scale(${isHovered ? 1.2 : 1})`,
        }}
      >
        <img
          src={props.imageSrc}
          alt={`Card ${props.index}`}
          style={styles.image}
        />
      </div>
    </a>
  );
}
//Card Styles
const styles = {
  card: {
    position: "absolute",
    transform: "translate(-50%, -50%)",
    height: "60px",
    width: "60px",
    borderRadius: "50%",
    cursor: "pointer", 
    transition: "transform 0.3s ease-in-out", 
   
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    overflow: "hidden", 
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  },

};

export default React.memo(Card);
