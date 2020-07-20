import React from "react";
import { Container } from "reactstrap";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'

export default function Home(props) {
  const fadeImages = [
    "/images/IMG_3178.JPG",
    "/images/IMG_3185.JPG",
    "/images/IMG_3186.JPG",
    "/images/IMG_3184.JPG",
    "/images/IMG_1974.JPG"
  ];

  return (
    <div>
      <Container>
      {/* <div className="slide-container">
        <Fade>
          <div className="each-fade">
            <img src={fadeImages[0]} alt="image0" className="App"/>
          </div>
          <div className="each-fade">
            <img src={fadeImages[1]} alt="image1" className="App" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[2]} alt="image2" className="App" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[3]} alt="image3" className="App" />
          </div>
          <div className="each-fade">
            <img src={fadeImages[4]} alt="image4" className="App" />
          </div>
        </Fade>
      </div> */}
      </Container>
    </div>
  );
}
