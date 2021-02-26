import './css/App.css';
import octopusLogo from './img/octopusLogo.png';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
