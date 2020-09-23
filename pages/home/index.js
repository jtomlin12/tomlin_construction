import { Card, Col, Container, Jumbotron, Row } from "reactstrap"

import ContactCard from './../../components/contact_card'

export default function Home() {

  const styles = {
    cover: {
      backgroundImage: `url('/images/cover.JPG')`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }
  }

  return (
    <>
      <Jumbotron style={styles.cover}>
        <Container>
          <Row className="d-flex align-items-center">
            <Col xs={12} sm={6}>
              <Card className="rounded text-dark font-weight-bold text-center bg-light">
                <h2>Inovative and durable design.</h2>
                <p>Quickly go from idea to product</p>
              </Card>
            </Col>
            <Col xs={12} sm={6}>
              <ContactCard />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Container className="text-center">
        <h4>Many Years of Experience. Quality Work. Diverse Projects. Experienced Team. Impressive Results</h4>
        <p>
          Our team guarantees that our customers will receive the highest quality work
          at the most affordable and fair price. Our commitment is your success. Contact
          us today and let us know how we can help deliver on your new project.
        </p>
      </Container>
    </>
  )
}