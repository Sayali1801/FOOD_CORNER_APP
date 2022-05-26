 import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import { BrowserRouter as Router, Switch  , Route  } from 'react-router-dom';
import Home from './component/Home';
import Menu from './component/Menu';
import About from './component/About';
import Contact from './component/Contact';
import Footer from './component/Footer';
function App() {
  return (
    <Router>

    <div className="App">
      <Navbar />
      <Switch>
      <Route path="/" exact component ={ Home } />
      <Route path="/menu" exact component={  Menu  } /> 
      <Route path="/about" exact component={ About } />
      <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </div>
    </Router>

  );
}

export default App;
