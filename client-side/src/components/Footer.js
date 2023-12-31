import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.sharedBasicInfo) {
      this.props.sharedBasicInfo.social.map(function (network) {
        return (
          <span key={network.name} className="m-4">
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.class}></i>
            </a>
          </span>
        );
      });
    }

    return (
      <footer>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="copyright py-4 text-center">
            <div className="container center col-sm-12 col-md-12 col-lg-12">
              <small>
                Copyright &copy;{" "}
                {this.props.sharedBasicInfo
                  ? this.props.sharedBasicInfo.name
                  : "???"}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
