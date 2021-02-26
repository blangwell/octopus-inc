import { NavLink } from 'react-router-dom';
import '../css/Nav.css';
import swirl from '../img/swirl.png';

const Nav = props => {
  return (
    <div>
      <nav className="navbar">
        <a href="/"><img src={swirl} alt="logo" className="logo"/></a>
        <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav;