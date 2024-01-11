import React from "react";

const moveIcons = () => {
  const icons = document.querySelectorAll(".cloud-icon");
  const iconContainer = document.getElementById("SocalMedia");

  const iconContainerDimensions = iconContainer.getBoundingClientRect();
  const iconContainerHeight = iconContainerDimensions.height;

  icons.forEach((icon) => {
    icon.style.top = `${parseFloat(icon.style.top) - 1}px`;

    // if the icon is out of the screen, set it to the bottom
    if (parseFloat(icon.style.top) < -100) {
      icon.style.top = `${iconContainerHeight}px`;
      // set icon left to its id
      icon.style.left = `${parseFloat(icon.id)}px`;
    }
  });
};
 
function componentDidMount() {
  setInterval(moveIcons, 40);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create cloud icons and add them to the container
function createClouds() {
  const container = document.getElementById("SocalMedia");

  const iconContainerDimensions = container.getBoundingClientRect();
  const iconContainerHeight = iconContainerDimensions.height;

  // Create and add 30 cloud icons to the container
  for (let i = 0; i < 15; i++) {
    const cloud = document.createElement("span");
    cloud.className = "cloud-icon iconify";
    cloud.setAttribute("data-icon", "ic:sharp-cloud");
    cloud.style.left = `${getRandom(0, 100)}%`;
    cloud.style.top = `${(getRandom(0, 100) / 100) * iconContainerHeight}px`;
    cloud.key = i;
    cloud.style.fontSize = `${getRandom(1, 3)}rem`;
    cloud.style.animationDuration = `${getRandom(10, 20)}s`;
    container.appendChild(cloud);
  }

  componentDidMount();
}

window.addEventListener("load", createClouds);

const handleResumeClick = () => {
  const filePath = "/social/Daniel_Yang_Resume.pdf";

  const absolutePath = process.env.PUBLIC_URL + filePath;

  window.open(absolutePath, "_blank");
};

const handleLinkedInClick = () => {
  window.open("https://www.linkedin.com/in/daniel-li-yang-070279255", "_blank");
};

const handleInstagramClick = () => {
  window.open(
    "https://instagram.com/danielyang10237?igshid=NGVhN2U2NjQ0Yg==",
    "_blank"
  );
};

const handleGithubClick = () => {
  window.open("https://github.com/danielyang10237", "_blank");
};

const SocialMedia = () => {
  return (
    <>
      <div id="SocalMedia">
        <div className="col-md-12 additional">
          <h1 className="section-title">
            <span className="additional section-header-title">
              Social Media
            </span>
          </h1>
        </div>
        <div className="col-md-12 center">
          <div className="top-div col-md-12 row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div className="social-section">
              <div className="helicopter hover1" onClick={handleResumeClick}>
                <div className="blade resume">
                  <div className="main-rotor"></div>
                </div>
                <div className="mast"></div>
                <div className="drone-body">
                  <span
                    className="iconify social-icon"
                    data-icon="la-file-alt"
                    data-inline="false"
                  ></span>
                  <h3 className="social-descr">Resume</h3>
                </div>
              </div>
            </div>
            <div className="social-section">
              <div className="helicopter hover2" onClick={handleLinkedInClick}>
                <div className="blade linkedin">
                  <div className="main-rotor"></div>
                </div>
                <div className="mast"></div>
                <div className="drone-body">
                  <span
                    className="iconify social-icon"
                    data-icon="la-linkedin"
                    data-inline="false"
                  ></span>
                  <h3 className="social-descr">LinkedIn</h3>
                </div>
              </div>
            </div>
            <div className="social-section">
              <div className="helicopter hover3" onClick={handleInstagramClick}>
                <div className="blade instagram">
                  <div className="main-rotor"></div>
                </div>
                <div className="mast"></div>
                <div className="drone-body">
                  <span
                    className="iconify social-icon"
                    data-icon="la-instagram"
                    data-inline="false"
                  ></span>
                  <h3 className="social-descr">Instagram</h3>
                </div>
              </div>
            </div>
            <div className="social-section">
              <div className="helicopter hover5" onClick={handleGithubClick}>
                <div className="blade github">
                  <div className="main-rotor"></div>
                </div>
                <div className="mast"></div>
                <div className="drone-body">
                  <span
                    className="iconify social-icon"
                    data-icon="la-github"
                    data-inline="false"
                  ></span>
                  <h3 className="social-descr">Github</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
