import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import EngJsonData from './data/engdata.json';

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

  // state = {
  //   landingPageData: {},
  // }

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
        {/* <Team data={this.state.landingPageData.Team} /> */}
        <Contact data={this.state.landingPageData.Contact} />
      </div>
    )
    }
  }
}

export default App;
