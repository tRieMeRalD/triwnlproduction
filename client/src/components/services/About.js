import React, { Component } from "react";

import RowImageRight from "../common/RowImageRight";
import RowImageLeft from "../common/RowImageLeft";
import Profile from "../common/Profile";

import AboutPic from "../../img/about.jpg";
import Success from "../../img/success.jpg";
import Customer from "../../img/customer.jpg";
import School from "../../img/school.jpg";
import Me from "../../img/pfpMe.jpg";
import Temp from "../../img/noprofile.png";

class About extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center">
          <h1 className="display-4">About Us</h1>
          <p className="lead">Meet the team and learn more about us!</p>
        </div>

        <div className="container">
          <div
            className="card mb-3 border-light"
            style={{ maxWidth: "1000px" }}
          >
            <div className="row no-gutters">
              <div
                className="col-md-8 pr-4"
                uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true"
              >
                <div className="card-body">
                  <h3 className="card-title font-weight-bold">
                    A little about us
                  </h3>
                  <p className="card-text">
                    Triwnl Productions was founded in March 2019 with one goal
                    in one, helping small businesses and individuals. We are
                    dedicated towards the success of small businesses in the
                    ecommerce market and we are so happy to join you on this
                    journey!
                  </p>
                  <p className="card-text">
                    Not only do we dedicate most of our resources toward web
                    development, but we understand the market demand for game
                    services. As part of Triwnl Productions, our Game Services
                    sector offers the most popular games at moment. Currently,
                    we are the inprogress of developing a <i> Minecraft</i>{" "}
                    server, which will be free to play with some in-game
                    purchases.
                  </p>
                  <p className="card-text">
                    With our amazing team of developers, we try to make the
                    entrance experience as smooth as possible. Meet our team
                    below!
                  </p>
                </div>
              </div>
              <div
                class="col-md-4"
                uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true"
              >
                <img src={AboutPic} class="card-img" alt="..." />
              </div>
            </div>
          </div>

          <h2 className="pt-4">What makes us different?</h2>
        </div>

        <RowImageRight
          title="Affordable and Reliable"
          text="At Triwnl Productions, reducing the cost while delivering
          high quality services is our goal. We have regular meetings
          with our clients to ensure success from the moment you
          partner with us to the day your business lauches."
          image={Success}
        />

        <RowImageLeft
          title="Support and Secure"
          text="We heavily value communication and being able to effectively
          communicate with our clients to ensure success. Triwnl
          Productions also deeply cares about the security of your
          information as well as your potential customers and clients,
          and therefore, we are committed to help ensure that all user
          information is as secure as possible."
          image={Customer}
        />

        <RowImageRight
          title="Our story"
          text="This startup agency was created by a high school student who
          realized the need for more affordable developers on the
          market. Now, the agency has a team of 3, not only working on
          web development, but other aspects of the industry."
          image={School}
        />

        <div className="text-center">
          <h2 className="pt-4">Meet the team</h2>
          <p>The ones who make this possible</p>
        </div>

        <div className="container">
          <div class="card-deck">
            <Profile
              scrollspy="cls: uk-animation-fade; repeat: true"
              image={Temp}
              name="William Law"
              status="Founder and Lead Developer"
            />

            <Profile
              scrollspy="cls: uk-animation-fade; repeat: true; delay: 100"
              image={Temp}
              name="Sameer Shakeel"
              status="Lead UI/UX Designer"
            />

            <Profile
              scrollspy="cls: uk-animation-fade; repeat: true; delay: 400"
              image={Temp}
              name="Kenneth Tran"
              status="Lead Game Developer"
            />
          </div>

          <hr />
          <div uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true">
            <h2 className="text-center pt-4">Testimonials</h2>
            <blockquote class="blockquote text-center">
              <p class="mb-0">
                Great communcations and was able to meet the deadlines in a
                reasonable timeframe.
              </p>
              <footer class="blockquote-footer">
                Rootcase, Junior Achievement 2018-2019
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
