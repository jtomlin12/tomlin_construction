import dynamic from 'next/dynamic'
import { Container } from "reactstrap"

const Filter = dynamic(() => import("../../components/filter"), { ssr: false })


export default function Gallery() {

  const data = [
    {
      src: '/images/Chucksters07.jpg',
      filter: "chuckster"
    },
    {
      src: '/images/Chucksters11.jpg',
      filter: "chuckster"
    },
    {
      src: '/images/IMG_1972.jpg',
      filter: "waterfall"
    },
    {
      src: '/images/IMG_1974.jpg',
      filter: "waterfall"
    },
    {
      src: '/images/IMG_1976.jpg',
      filter: "bridge"
    },
    {
      src: '/images/IMG_3178.jpg',
      filter: "fire-pit-patio"
    },
    {
      src: '/images/IMG_3179.jpg',
      filter: "fire-pit-patio"
    },
    {
      src: '/images/IMG_3184.jpg',
      filter: "backyard-patio"
    },
    {
      src: '/images/IMG_3185.jpg',
      filter: "backyard-patio"
    },
    {
      src: '/images/IMG_3186.jpg',
      filter: "backyard-patio"
    },
    {
      src: '/images/IMG_3187.jpg',
      filter: "backyard-patio"
    },
    {
      src: '/images/IMG_3190.jpg',
      filter: "backyard-patio"
    },
    {
      src: '/images/IMG_3191.jpg',
      filter: "backyard-patio"
    }
  ]

  const buttons = [
    {
      name: "All",
      filter: "*"
    },
    {
      name: "Chuckers",
      filter: ".chuckster"
    },
    {
      name: "Waterfall",
      filter: ".waterfall"
    },
    {
      name: "Bridge",
      filter: ".bridge"
    },
    {
      name: "Fire Pit Patio",
      filter: ".fire-pit-patio"
    },
    {
      name: "Backyard Patio",
      filter: ".backyard-patio"
    }
  ]

  return (
    <div className="bg-dark" >
      <Container className="text-center text-light">
        <Filter data={data} buttons={buttons} />

      </Container>
    </div>
  )
}