import React, { Component } from "react";
import * as emailjs from 'emailjs-com';

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject:'ホームページからのメッセージ',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: '福石自動車 Fukuishi Motors',
      subject,
      message: message,
    };
    // emailjs.send("service_pp8h4ej","template_qkwaqrr");
    emailjs.send(
      'service_pp8h4ej',
      'template_qkwaqrr',
       templateParams,
      'user_4I67pS8EOOwjdNFgoCpA6'
    )
    alert("Message Sent, メール送信済");
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: 'ホームページからのメッセージ',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, message } = this.state;

    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>お問い合わせ　Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                  <p> 下のフォームにお名前と連絡先を入れてください。 </p>
                </div>
                {/* <div className="col-md-6">
                      <div className="form-group">
                      <p>
                      <label>Your Role: 
                        <select name="role[]" multiple>
                        <option value="leader">Leader</option>
                        <option value="follower">Follower</option>
                        </select>
                      </label>
                    </p>
                      </div>
                    </div>  */}
                <form name="sentMessage" id="contactForm" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Name 名前"
                          value={name}
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email　メールアドレス"
                          value={email}
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message　メッセージ"
                      value={message}
                      onChange={this.handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  {/* <div id="success"></div> */}
                  <button type="submit" value="submit" className="btn btn-custom btn-lg">
                    Send Message　送る
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info　連絡先</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address　住所
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone　電話
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>{" "}
                  <span>
                    <i className="fas fa-envelope"></i> &nbsp;&nbsp; Email　メール
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i class="fa fa-hashtag"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.instagram : "/"}>
                      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/brands.min.css" integrity="sha512-D0B6cFS+efdzUE/4wh5XF5599DtW7Q1bZOjAYGBfC0Lg9WjcrqPXZto020btDyrlDUrfYKsmzFvgf/9AB8J0Jw==" crossorigin="anonymous" />
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 
              <p>  </p>
              <a href="http://www.rikkikendall.me" rel="nofollow">
                優太 Rikki Kendall
              </a>. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
