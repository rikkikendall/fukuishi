import React, { Component } from "react";

export class Ads extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>商品販売　Products</h2>
          </div>
          <div className="row">
          <div className="col-xs-12 col-md-6"> 
          <div className="hover-bg"> 
            {" "}
            <a href="img/cleverin.jpg"> 
                <div className="hover-text"> 
                    <h4> クレベリン - 消臭、除菌、ウイルスとニオイを除去 </h4>
                </div> 
                <img src="img/cleverin.jpg" className="img-responsive" alt=""/> 
            </a>
          </div> 
          </div>
          <div className="col-xs-12 col-md-6"> 
          <div className="hover-bg"> 
            {" "}
            <a href="img/cleverin.jpg"> 
                <div className="hover-text"> 
                    <h4> ヘッドライト復活　REVIVE COAT </h4>
                </div> 
                <img src="img/photo01.png" className="img-responsive" alt=""/> 
            </a>
          </div> 
          </div>
          <div className="col-xs-12 col-md-6"> 
          <div className="hover-bg"> 
            {" "}
            <a href="img/cleverin.jpg"> 
                <div className="hover-text"> 
                    <h4> ThreeBond(可視光応答型好触媒スプレー) </h4>
                </div> 
                <img src="img/toyotaad.jpg" className="img-responsive" alt=""/> 
            </a>
          </div> 
          </div>
          <div className="col-xs-12 col-md-6"> 
          <div className="hover-bg"> 
            {" "}
            <a href="img/cleverin.jpg"> 
                <div className="hover-text"> 
                    <h4> ヘッドライト復活　REVIVE COAT  </h4>
                </div> 
                <img src="img/ad2.png" className="img-responsive" alt=""/> 
            </a>
          </div> 
          </div>
          </div>
          <div> {" "} </div>

          <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/photo_oil_b1.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Bardahl Oil 1</h4>
                      </div>
                      <img
                        src="img/photo_oil_b1.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/photo_oil_nss.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Bardahl Oil</h4>
                      </div>
                      <img
                        src="img/photo_oil_nss.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/photo_oil_b2.jpg"
                      title="Project Title"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Bardahl Oil 2</h4>
                      </div>
                      <img
                        src="img/photo_oil_b2.jpg"
                        className="img-responsive"
                        alt="Project Title"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Ads;
