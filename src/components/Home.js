import '../css/Home.css';
import Button from 'react-bootstrap/Button';

const Home = props => {
  return (
    <div class="banner-container">
      <style type="text/css">
        {`
        .btn-green {
          background-color: green;
        }
        .btn-green:hover {
          background-color: darkgreen;
        }
        .btn-banner {
          background-color: white;
          border: 2px solid orange;
          border-radius: 20px;
          color: orange;
          padding: 5px 20px;
          margin: 1rem 1rem .5rem .5rem;
          font-weight: 600;
        }
        .btn-banner:hover {
          background-color: orange;
          border: 2px solid orange;
          border-radius: 20px;
          color: white;
          padding: 5px 20px;
          margin: 1rem 1rem .5rem .5rem;
        }
        `}
      </style>
      <div class="container-sm banner-text">
        <h1 class="display-4">Octopus Incorporated</h1>
        <h2>Leverage Analytics. Mobilize Your Niche.</h2> 
        <Button variant="banner">Bootscrap Button</Button>
        <Button variant="banner">Boontsprap Button</Button>
      </div>
    </div>
  )
}

export default Home;