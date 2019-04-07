import React, { Component } from "react";
import { Link } from "react-router-dom";

import CardImageLeft from "../common/CardImageLeft";
import CardImageRight from "../common/CardImageRight";
import CardImageTop from "../common/CardImageTop";

import Support from "../../img/supporticon.png";
import Price from "../../img/priceicon.png";
import Code from "../../img/codeicon.png";
import Secure from "../../img/secureicon.png";
import Rootcase from "../../img/rootcase.png";
import Meeting from "../../img/meeting.jpg";
import Client from "../../img/clientpanel.jpg";
import Contact from "../../img/Contact.jpg";
import Video from "../../img/videojot.jpg";
import Story from "../../img/storybook.jpg";

class Landing extends Component {
  render() {
    return (
      <div>
        <div id="wrap">
          <div id="main" className="landing">
            <div className="landing-inner text-light">
              <div
                className="container clear-top"
                uk-scrollspy="cls: uk-animation-slide-bottom-small; repeat: true"
              >
                <div id="paddingTop" className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4 text-white">
                      <strong>Triwnl Productions</strong>
                    </h1>
                    <p className="lead">
                      A web development agency for small businesses who want to
                      get going on ecommerce.
                    </p>
                    <hr />
                    <Link to="/webdev" className="btn btn-lg btn-info mr-auto">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-2">
          <div
            className="col-md-12 text-center"
            uk-scrollspy="cls: uk-animation-scale-up; repeat: true"
          >
            <div>
              <h1 className="uk-text-center">Who are we?</h1>
            </div>
          </div>

          <div className="card-group">
            <CardImageLeft
              image={Price}
              cardBody="Affordable Pricing"
              cardText="At Triwnl Productions, we offer affordable pricing for
              small businesses who are looking to get into the ecommerce
              market. We understand that entering the ecommerce market
              can be quiet the financial trouble, so we are willing to
              work with clients 1 on 1 to ensure success."
            />
            <CardImageRight
              image={Code}
              cardBody="Reliable and Scaleable Code"
              cardText="Triwnl Productions utilizes the resources available to us,
              such as Stripe and Shopify to process payments and using
              the latest features in MERN stack to ensure that powerful
              applications are created in a reasonable timeframe."
            />
          </div>

          <div className="card-group">
            <CardImageLeft
              image={Support}
              cardBody="Client Support"
              cardText="To ensure that communications are met with a high degree
              of success, Triwnl Productions offers a one-on-one support
              group chat and in-person (must contact) where concerns and
              future plans can be addressed."
            />
            <CardImageRight
              image={Secure}
              cardBody="Security"
              cardText="To create safe and efficient websites, Triwnl Productions
              deploys its applications through Heroku, which is pointed
              to a Google Domain and then routed through Cloudflare's
              network. This ensures that online security is met and
              customer info is secured."
            />
          </div>

          <hr />

          <div
            className="col-md-12 text-center pt-4"
            uk-scrollspy="cls: uk-animation-scale-up; repeat: true"
          >
            <div>
              <h1 className="uk-text-center">
                Our Previous Clients and Projects
              </h1>
            </div>
          </div>

          <CardImageTop
            linkLeft="https://rootcase.net"
            imageLeft={Rootcase}
            CardTitleLeft="Rootcase"
            CardTextLeft="As a Junior Achievement business managed by a group of high
            school students, Rootcase is a biodegradeable phone case
            startup with a goal in mind to help the environment. Certified
            to be 50% biodegradeable, Rootcase is an official partner with
            One Tree Planted where for every case Rootcase sells, a tree
            is planted in return."
            learnLeft="https://rootcase.net"
            linkRight="https://github.com/tRieMeRalD/devconnector"
            imageRight={Meeting}
            CardTitleRight="Developer Connectors"
            CardTextRight="DevConnector, also known as Developer Connectors is a
            side-project that was worked on that utilizes the core
            features of MERN stack from front-end (using ReactJS and
            Bootstrap) to the back-end (using NodeJS and Passport
            Authenticatation). User information was stored using MongoDB
            through the site's online servers. The app was finally
            deployed through Heroku and a Git Repo can be found below."
            learnRight="https://github.com/tRieMeRalD/devconnector"
          />

          <CardImageTop
            linkLeft="https://github.com/tRieMeRalD/react_clientpanel"
            imageLeft={Client}
            CardTitleLeft="ClientPanel"
            CardTextLeft="ClientPanel is another side-project created for the purpose of
            managing clients in a contact-form style. This project was
            heavily focused around ReactJS and Redux along with MongoDB to
            store information based on the user specifications."
            learnLeft="https://github.com/tRieMeRalD/react_clientpanel"
            linkRight="https://github.com/tRieMeRalD/contactmanager_redux"
            imageRight={Contact}
            CardTitleRight="Contact Manager"
            CardTextRight="As another side-project, Contact Manager is desgined to mimic
            one's daily contact application, providing very similar
            features. Similar to the previous project, this app uses
            ReactJS and Redux to render all the front-end application."
            learnRight="https://github.com/tRieMeRalD/contactmanager_redux"
          />

          <CardImageTop
            linkLeft="https://github.com/tRieMeRalD/vidjotbeta"
            imageLeft={Video}
            CardTitleLeft="Video Jot"
            CardTextLeft="Video Jot or VidJot for short is designed to take down quick
            notes for potential video ideas. This was a side-application
            created mainly around NodeJS and focusing on the backend. For
            the front-end, HandleBars was used to render all the user
            content."
            learnLeft="https://github.com/tRieMeRalD/vidjotbeta"
            linkRight="https://github.com/tRieMeRalD/storybook"
            imageRight={Story}
            CardTitleRight="Story Books"
            CardTextRight="Story Books or storybook is an application that simulates the
            similar function to other social media accounts like Instagram
            or FaceBook, where users can create posts and comment off of
            them. This application mainly revolved around the concepts of
            NodeJS with HandleBars used to render the front-end content."
            learnRight="https://github.com/tRieMeRalD/storybook"
          />

          <hr />

          <div className="col-md-12 text-center pt-4">
            <div>
              <h1
                className="uk-text-center"
                uk-scrollspy="cls: uk-animation-scale-up; repeat: true"
              >
                Game Development
              </h1>
              <p uk-scrollspy="cls: uk-animation-fade; repeat: true">
                Triwnl Game Services is affliated with Triwnl Productions and
                offers the following games: Minecraft Hunger Games Server.
                <i>
                  <br />
                  Please note: this is in development at the moment, more
                  information will be released as we near production.
                </i>
              </p>
            </div>

            <div className="card-group">
              <CardImageLeft
                image={Price}
                cardBody="Free to play"
                cardText="Our server is available to anyone, anytime, anywhere.
              Feel free to share our server with your friends and
              family, and get everyone in the game!"
              />
              <CardImageRight
                image={Support}
                cardBody="Customer Support"
                cardText="We understand that games can be frustrating at times,
                especially when customer support is not available.
                However, at Triwnl Game Services, we are committed to
                providing quality customer support."
              />
            </div>
          </div>

          <hr />

          <div className="col-md-12 text-center pt-4">
            <div>
              <h1
                className="uk-text-center"
                uk-scrollspy="cls: uk-animation-scale-up; repeat: true"
              >
                Contact Us Today
              </h1>
              <p uk-scrollspy="cls: uk-animation-fade; repeat: true">
                Triwnl Productions is all about setting up success for future
                clients. If you are interested or have any questions, please
                feel to contact us. We will get back to you 24 hours of
                receiving the message.
              </p>
              <Link to="/contact" className="btn btn-outline-primary">
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
