import React, { Component } from "react";
import { Icon } from "@iconify/react";
import reactIcon from "@iconify/icons-logos/react";
import mongoDBIcon from "@iconify/icons-logos/mongodb";
import nodeJSIcon from "@iconify/icons-logos/nodejs";

class About extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      var profilepic = "images/" + this.props.sharedBasicInfo.image;
    }
    if (this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about = this.props.resumeBasicInfo.description;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <div className="row center mx-auto mb-5">
            <div className="center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  <div id="caption-section">
                    <span
                      className="iconify text-icon"
                      data-icon="teenyicons:pin-solid"
                    ></span>
                    <p className="profile-caption">Yosemite National Park</p>
                  </div>
                </span>
              </div>
            </div>

            <div className="col-md-7">
              <h1
                className="section-header col-md-10"
                style={{ color: "black" }}
              >
                <span className="section-header-title">{sectionName}</span>
              </h1>
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :) </span>
                    <br />
                    <br />
                    {about}
                    <div className="iconHolders">
                      <p>
                        The user interface is developed with React, the
                        server-side operations are handled by NodeJS, and
                        MongoDB is utilized as the database.
                      </p>
                      <Icon
                        icon={reactIcon}
                        style={{ fontSize: "400%", margin: "0% 5% 0 0%" }}
                      />
                      <Icon
                        icon={mongoDBIcon}
                        style={{ fontSize: "400%", margin: "0% 5% 0 0%" }}
                      />
                      <Icon
                        icon={nodeJSIcon}
                        style={{ fontSize: "400%", margin: "0% 5% 0 0%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
