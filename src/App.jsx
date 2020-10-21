import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import JsonData from './data/data.json';
import EngJsonData from './data/engdata.json';
import MapSection from './components/map/Map'; // import the map here
import Ads from './components/ads';

const location = {
  address: '22-9 Inaricho, Sasebo, Nagasaki 857-0851',
  lat: 33.158432,
  lng: 129.735950,
} // our location object from earlier

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPageData: {},
      english: false,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  handleClick() {
    this.setState(state => ({
      english: !state.english
    }));
  }

  render() {
    if (this.state.english) {
      return (
        <div>
        <Navigation data={EngJsonData.Nav} passedFunction={this.handleClick} english={this.english} /> 
        <br />
        <br />
        <br />
        <Header data={EngJsonData.Header} />
        <Features data={EngJsonData.Features} />
        <About data={EngJsonData.About} />
        <Services data={EngJsonData.Services} />
        <Gallery />
        <Testimonials data={EngJsonData.Testimonials} />
        <Ads />
        <MapSection location={location} zoomLevel={17} />
        {/* <Team data={EngJsonData.Team} /> */}
        <Contact data={EngJsonData.Contact} />
        </div>
      )
    }
    else {
    return (
      <div>
        <Navigation data={this.state.landingPageData.Nav} passedFunction={this.handleClick} english={this.english} />
        <br />
        <br />
        <br />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Ads />
        <MapSection location={location} zoomLevel={17} />
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
    }
  }
}

export default App;
