import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as Logo } from '../img/bar-chart.svg';
import '../css/Nav.css';

const BootstrapNav = props => {
  return (
    <div>
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand href="/"><Logo className="octopus-logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <LinkContainer exact to="/">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link>About</Nav.Link>
        </LinkContainer>
      </Navbar.Collapse>
    </Navbar>
    </div>
  )
}

export default BootstrapNav;