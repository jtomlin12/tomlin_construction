import React from "react";
import { Container } from "reactstrap";
import { ReactPhotoCollage } from "react-photo-collage";

export default function Home(props) {
  const setting = {
    width: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: ['500px', '170px'],
    layout: [2, 4, 3, 3],
    photos: [
      { src: '/images/IMG_1972.JPG' },
      { src: '/images/IMG_1974.JPG' },
      { src: '/images/IMG_1976.JPG' },
      { src: '/images/IMG_3178.JPG' },
      { src: '/images/IMG_3179.JPG' },
      { src: '/images/IMG_3184.JPG' },
      { src: '/images/IMG_3185.JPG' },
      { src: '/images/IMG_3186.JPG' },
      { src: '/images/IMG_3187.JPG' },
      // { src: '/images/IMG_3188.mov' },
      { src: '/images/IMG_3190.JPG' },
      { src: '/images/IMG_3191.JPG' }
    ],
    showNumOfRemainingPhotos: true
  };
  
  return (
    <div>
      <Container>
        <ReactPhotoCollage {...setting} />
      </Container>
    </div>
  );
}
