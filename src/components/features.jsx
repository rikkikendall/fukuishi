import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Locations</h2>
            <h3>店舗情報</h3>
            <p> Click the Icon for Directions </p>
            <p> アイコンを押してナビを開く </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d,i) => (
                  <div  key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {" "}
                    <a href={d.google}>
                    <i className={d.icon}></i></a>
                    <h3>{d.title}</h3>
                    <p>{d.address}</p>
                    <p>{d.text}</p>
                    <p>{d.phone}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
