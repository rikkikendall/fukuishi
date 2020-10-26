import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <Typography variant="h1" component="h1" styles={{backgroundColor: 'white', color: "#FFFFFF", root: { color: "#FFFFFF"}}} gutterBottom>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </Typography>
                  <Typography variant="h1" gutterBottom>
                  {this.props.data ? this.props.data.subtitle : "Loading"}
                  </Typography>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>
                  <p> 
                  &nbsp;&nbsp; &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp;  &nbsp;&nbsp; 
                  {'                                                   '} 
                  </p>
                  <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                    scroll-behavior= "smooth"
                  >
                    Learn More　詳しく
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
