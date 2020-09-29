import React, { Component } from "react";

export class Navigation extends Component {
  passedFunction = () => {}

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              福石自動車（有）
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#features" className="page-scroll">
                {this.props.data ? this.props.data.title : "Loading"}
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                {this.props.data ? this.props.data.about : "Loading"}
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                {this.props.data ? this.props.data.services : "Loading"}
                </a>
              </li>
              {/* <li>
                <a href="#portfolio" className="page-scroll">
                  Gallery
                </a>
              </li> */}
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                <a href="#contact" className="page-scroll">
                  {this.props.data ? this.props.data.contact : "Loading"}
                </a>
              </li>
              <a　className="btn btn-custom btn-lg page-scroll"　scroll-behavior= "smooth"　onClick={this.props.passedFunction}>
                {this.props.data ? this.props.data.language : "Loading"}
              </a>{" "}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
