//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import ThisCarousel from './components/ThisCarousel/ThisCarousel';
import Footer from './components/Footer/Footer';
import CardNEws from './components/CardNews/CardNews';
import { Container } from 'react-bootstrap';



class App extends Component{
  render(){
    return (
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <ThisCarousel />
        </div>
        <div class="continer">
          <h1 className="head">We Are Transforming Agriculture</h1><br /><br />
          <p className="head">At AeroFarms, we are on a mission to grow the best plants possible for the betterment of humanity. We are a global, mission-driven company, Certified B Corporation and proud to be named one of the World’s Most Innovative Companies by Fast Company. Our patented, award winning aeroponic technology provides the perfect conditions for healthy plants to thrive, taking indoor vertical farming to a new level of precision and productivity with minimal environmental impact and virtually zero risk. Through our retail brand Dream Greens, you can enjoy locally grown, pesticide-free produce that bursts with flavor and nutrition, all year round.</p>          
        </div>
        <div>
          <CardNEws />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
