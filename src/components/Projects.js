import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  render() {
    let detailsModalShow = (data) => {
      this.setState({ detailsModalShow: true, deps: data });
    };
    let detailsModalClose = () => this.setState({ detailsModalShow: false });

    const rows = [];
    let currentRow = [];

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.projects;

      this.props.resumeProjects.forEach((projects, index) => {
        currentRow.push(
          <span
            key={index}
            className="col-lg-6 col-lg-12 center"
            style={{ flex: 1, padding: "10px", maxwidth: "550px" }}
          >
            <div className={`foto`} onClick={() => detailsModalShow(projects)}>
              <div className={`project-container`}>
                <img
                  className="inline"
                  src={projects.images[0]}
                  alt="projectImages"
                  height="230"
                  style={{
                    marginBottom: 0,
                    paddingBottom: 0,
                    position: "relative",
                  }}
                />
                <div className="project-descr center">
                  <p className="project-title-settings mt-3">
                    {projects.title}{" "}
                  </p>
                  <p className="project-date-settings">{projects.startDate}</p>
                </div>
              </div>
            </div>
          </span>
        );

        if (
          this.props.resumeProjects.length % 2 === 1 &&
          index === this.props.resumeProjects.length - 1
        ) {
          currentRow.push(<span key="filler"></span>);
        }

        if (
          currentRow.length === 2 ||
          index === this.props.resumeProjects.length - 1
        ) {
          rows.push(
            <div
              className="row row-cols-1 row-cols-lg-2"
              key={rows.length}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {currentRow}
              {currentRow.length === 1 && <div style={{ flex: 1 }}></div>}
            </div>
          );
          currentRow = [];
        }
      });
    }

    // return <div>Error Retrieving Projects</div>;

    // let detailsModalClose = () => this.setState({ detailsModalShow: false });
    // if (this.props.resumeProjects && this.props.resumeBasicInfo) {
    //   var sectionName = this.props.resumeBasicInfo.section_name.projects;
    //   var projects = this.props.resumeProjects.map(function (projects) {
    //     return (
    //       <div
    //         className="col-sm-12 col-md-12 col-lg-12"
    //         key={projects.title}
    //         style={{ cursor: "pointer" }}
    //       >
    //         <span className="portfolio-item d-block">
    //           <div className="foto" onClick={() => detailsModalShow(projects)}>
    //             <div className="project-container">
    //               <img
    //                 className="inline"
    //                 src={projects.images[0]}
    //                 alt="projectImages"
    //                 height="230"
    //                 style={{
    //                   marginBottom: 0,
    //                   paddingBottom: 0,
    //                   position: "relative",
    //                 }}
    //               />
    //               <span>
    //                 <span className="project-date">{projects.startDate}</span>
    //                 <br />
    //                 <p className="project-title-settings mt-3">
    //                   {projects.title}
    //                 </p>
    //               </span>
    //             </div>
    //           </div>
    //         </span>
    //       </div>
    //     );
    //   });
    // }

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="section-header-title">{sectionName}</span>
          </h1>
          {/* <div className="col-md-12 mx-auto">{projects}</div> */}
          {rows}
          <ProjectDetailsModal
            show={this.state.detailsModalShow}
            onHide={detailsModalClose}
            data={this.state.deps}
          />
        </div>
      </section>
    );
  }
}

export default Projects;
