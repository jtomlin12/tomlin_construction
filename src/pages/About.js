import React from "react";
import { Container } from "reactstrap";

export default function About(props) {
  const styles = {
    content: {
      color: "white",
      textAlign: "center",
    },
    background: {
      backgroundColor: "darkgreen"
    }
  };

  return (
    <div>
      <Container>
        <div style={styles.background}>
          <h3>Charles Tomlin</h3>
          <img src="/images/IMG_3184.JPG" alt="profileimage" className="profile"></img>
          <p style={styles.content}>bio</p>
        </div>
      </Container>
    </div>
  );
}
