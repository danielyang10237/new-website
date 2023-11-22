import React, { useEffect, Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import map from "../sources/map.webp";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  moveIcons = () => {
    const icons = document.querySelectorAll(".moving-icon");
    const iconContainer = document.querySelector(".icon-container");

    const iconContainerDimensions = iconContainer.getBoundingClientRect();
    const iconContainerHeight = iconContainerDimensions.height;

    icons.forEach((icon) => {
      // move the icon to the right and up
      icon.style.left = `${parseFloat(icon.style.left) + 1}px`;
      icon.style.top = `${parseFloat(icon.style.top) - 1}px`;

      // if the icon is out of the screen, set it to the bottom
      if (parseFloat(icon.style.top) < -100) {
        icon.style.top = `${iconContainerHeight}px`;
        // set icon left to its id
        icon.style.left = `${parseFloat(icon.id)}px`;
      }
    });
  };

  componentDidMount() {
    setInterval(this.moveIcons, 10);
    this.moveIcons();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
    if (newTheme === "dark") {
      const iconContainer = document.querySelector(".icon-container");

      const createMovingIcon = () => {
        const randomInt = Math.floor(Math.random() * 4);
        const icon = document.createElement("span");
        icon.className = "iconify moving-icon";
        
        const iconsMap = {
          0: 'ion:rocket-sharp',
          1: 'bi:star-fill',
          2: 'ri:moon-fill',
          3: 'ri:planet-fill'
        };
  
        icon.setAttribute('data-icon', iconsMap[randomInt]);
        icon.style.color = "white";
        icon.style.opacity = 0.2;

        const iconContainerDimensions = iconContainer.getBoundingClientRect();
        const iconContainerWidth = iconContainerDimensions.width;
        const iconContainerHeight = iconContainerDimensions.height;
        const x = Math.random() * (iconContainerWidth + iconContainerHeight) - iconContainerHeight;
        const progress = Math.random();
        icon.style.left = `${x + progress * iconContainerWidth}px`;
        icon.style.top = `${(1 - progress) * iconContainerHeight}px`;

        icon.id = `${x}`;

        iconContainer.appendChild(icon);
      };

      const numberOfIcons = 20;
      for (let i = 0; i < numberOfIcons; i++) {
        createMovingIcon();
      }
    } else {
      const iconContainer = document.querySelector(".icon-container");
      iconContainer.innerHTML = "";
    }
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header
        id="home"
        style={{ height: window.innerHeight + 20, display: "block" }}
      >
        <img
          src={map}
          alt="sliding background"
          className="animated-background-layer"
        ></img>
        <img
          src={map}
          alt="sliding background 2"
          className="animated-background-layer-2"
        ></img>
        <div id="icon-container" className="icon-container"></div>
        <div className="row aligner" style={{ height: "100%" }}>
          <div className="col-md-12">
            <div>
              <span
                className="iconify header-icon"
                data-icon="la:laptop-code"
                data-inline="false"
              ></span>
              <br />
              <h1 className="mb-0">
                <Typical steps={[name]} wrapper="p" />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span
                    className="iconify"
                    data-icon="twemoji:owl"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "#353239",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
