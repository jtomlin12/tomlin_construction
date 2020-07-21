import React from "react";
import { Container } from "reactstrap";
// import { Fade } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import img1 from "../images/IMG_3187.JPG"
import img2 from "../images/IMG_3185.JPG"
import img3 from "../images/IMG_3186.JPG"
import img4 from "../images/IMG_1974.JPG"

export default function Home(props) {
  const fadeImages = [
    img1,
    img2,
    img3,
    img4,
  ];

  return (
    <div>
      <Container>
      <div className="slide-container">
        {/* <Carousel> */}
          {
            fadeImages.map((img, i) => (
              <div key={i} className="each-fade">
                <img src={img} alt="image0" className="App"/>
              </div>
            ))
          }
        {/* </Carousel> */}
      </div>
      </Container>
    </div>
  );
}
