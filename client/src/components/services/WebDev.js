import React, { Component } from "react";
import { Link } from "react-router-dom";

class WebDev extends Component {
  render() {
    return (
      <div>
        <div class="jumbotron jumbotron-fluid webdev">
          <div
            id="triwnlsol"
            className="text-center text-light"
            uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"
          >
            <h1 class="display-3 text-light">Triwnl Solutions</h1>
            <p class="lead">
              We offer web development services for small businesses and
              individuals.
            </p>
          </div>
        </div>

        <div className="container">
          <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            <h1 className="text-center pt-4">What can we do for you?</h1>
            <div class="card-deck">
              <div class="card border-light">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">
                    Personal Development
                  </h5>
                  <p class="card-text">
                    Looking to have your own personal website? We got you
                    covered. With strong knowledge in personal website
                    development, the
                    <i> Basic</i> package is the right option for you to get
                    started!
                  </p>
                </div>
              </div>
              <div class="card border-light">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">
                    Portfolio Development
                  </h5>
                  <p class="card-text">
                    Are you an individual that wants a creative way of
                    showcasing your resume and accomplishments to make your job
                    application stand out? The <i> Intermediate</i> package is a
                    great option for you to impress your potential employers!
                  </p>
                </div>
              </div>
              <div class="card border-light">
                <div class="card-body">
                  <h5 class="card-title font-weight-bold">
                    Ecommerce Development
                  </h5>
                  <p class="card-text">
                    Are you a small business looking to get into the Ecommerce
                    industry, but cannot financially sustain the expenses? Do
                    not worry! The <i> Premium</i> package is a flexible option
                    for small businesses who want to get their business exposed
                    to the internet.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div uk-scrollspy="cls: uk-animation-fade; repeat: true">
            <h1 className="text-center pt-4">Languages and Frameworks</h1>
            <div class="card-deck">
              <div class="card border-light">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item active text-center">
                      Front-end
                    </li>
                    <li class="list-group-item">HTML5</li>
                    <li class="list-group-item">CSS3</li>
                    <li class="list-group-item">jQuery</li>
                    <li class="list-group-item">ReactJS</li>
                  </ul>
                </div>
              </div>
              <div class="card border-light">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item active text-center">Back-end</li>
                    <li class="list-group-item">PHP 7</li>
                    <li class="list-group-item">NodeJS</li>
                    <li class="list-group-item">ExpressJS</li>
                    <li class="list-group-item">Java</li>
                  </ul>
                </div>
              </div>
              <div class="card border-light">
                <div class="card-body">
                  <ul class="list-group">
                    <li class="list-group-item active text-center">
                      Database / Frameworks
                    </li>
                    <li class="list-group-item">MySQL</li>
                    <li class="list-group-item">MongoDB</li>
                    <li class="list-group-item">Bootstrap 4</li>
                    <li class="list-group-item">UIKit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <h1
            class="text-center pt-4"
            uk-scrollspy="cls: uk-animation-fade; repeat: true"
          >
            View Our Plans
          </h1>
          <div class="card-deck">
            <div
              class="card border-light"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true"
            >
              <div class="card-body">
                <h3 class="card-title text-center">Basic</h3>
                <p class="card-text">
                  In the Basic Package, the following is included:
                  <ul>
                    <li>Basic HTML setup</li>
                    <li>SSL Certification</li>
                    <li>Monthly 1-on-1 Meetings</li>
                  </ul>
                  <h3 className="font-weight-bold">Price: $100</h3>
                  <button className="btn btn-primary" disabled>
                    Coming Soon!
                  </button>
                </p>
              </div>
            </div>

            <div
              class="card border-light"
              uk-scrollspy="cls: uk-animation-fade; repeat: true"
            >
              <div class="card-body">
                <h3 class="card-title text-center">Intermediate</h3>
                <p class="card-text">
                  In the Intermediate Package, the following is included:
                  <ul>
                    <li>Basic HTML setup</li>
                    <li>Unique domain</li>
                    <li>SSL Certification</li>
                    <li>Monthly 1-on-1 Meetings</li>
                    <li>Biweekly 1-on-1 Meetings</li>
                    <li>Full MERN development</li>
                  </ul>
                  <h3 className="font-weight-bold">Price: $150</h3>
                  <button className="btn btn-primary" disabled>
                    Coming Soon!
                  </button>
                </p>
              </div>
            </div>
            <div
              class="card border-light"
              uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true"
            >
              <div class="card-body">
                <h3 class="card-title text-center">Premium</h3>
                <p class="card-text">
                  In the Premium Package, the following is included:
                  <ul>
                    <li>Basic HTML setup</li>
                    <li>Unique domain</li>
                    <li>SSL Certification</li>
                    <li>Monthly 1-on-1 Meetings</li>
                    <li>Biweekly 1-on-1 Meetings</li>
                    <li>Weekly 1-on-1 Meetings</li>
                    <li>Full MERN development</li>
                    <li>Access to Git Repo</li>
                  </ul>
                  <h3 className="font-weight-bold">Flexible Pricing</h3>
                  <Link to="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDev;
