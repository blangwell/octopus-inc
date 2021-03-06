import '../css/Home.css';
import Button from 'react-bootstrap/Button';
import  Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

const Home = props => {
  return (
    <div class="banner-container">
      <style type="text/css">
        {`
        .btn-banner {
          background-color: white;
          border: 2px solid orange;
          border-radius: 20px;
          color: orange;
          padding: 5px 20px;
          margin: 1rem 1rem .5rem .5rem;
          font-weight: 600;
          white-space: nowrap;
          font-size: .8rem;
        }
        .btn-banner:hover, .btn-banner-primary {
          background-color: orange;
          border: 2px solid orange;
          border-radius: 20px;
          color: white;
          padding: 5px 20px;
          margin: 1rem 1rem .5rem .5rem;
          font-weight: 600;
          white-space: nowrap;
          font-size: .8rem;
        }
        .btn-banner-primary:hover {
          background-color: rgb(255, 140, 0);
          border: 2px solid rgb(255, 140, 0);
          color: white;
        }
        
        `}
      </style>
      <Container fluid>
        <Row>
          <h1 className="display-4">Octopus Incorporated</h1>
        </Row>
        <Row>
          <h2>Leverage Analytics. Mobilize Your Niche.</h2> 
        </Row>
        <Row md={4} lg={5}>
          <Col>
            <Button variant="banner-primary">Bootscrap Button</Button>
          </Col>
          <Col>
            <Button variant="banner">Boontsprap Button</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;