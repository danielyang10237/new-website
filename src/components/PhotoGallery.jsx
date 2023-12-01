import React, { useEffect, useRef, useState } from "react";

const PhotoGallery = (props) => {
  const screenRef = useRef(null);
  const [hexGrid, setHexGrid] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let hexes = [];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (props.galleryPhotos && hexes.length === 0) {
      let newHexes = props.galleryPhotos.map((gallery, index) => {
        return (
          <div key={index} className="flip-container">
            <div className="flipper">
              <div className="front">
                <div className="hex">
                  <div className="hexagon-border">
                    <img
                      className="hexagon-image"
                      src={gallery.image}
                      alt={gallery.title}
                    />
                  </div>
                </div>
              </div>
              <div className="back">
                <div key={index} className="hex">
                  <div className="hexagon-border">
                    <div className="hexagon-image back-hexa-description">
                      <h2>"{gallery.description}"</h2>
                      <h4>{gallery.date}</h4>
                      <h3>{gallery.location}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
      hexes = newHexes;
    }

    const hexagonWidth = 290; // Width of each hexagon in pixels
    // console.log("windowWidth", windowWidth);
    const hexGridWidth = windowWidth - 100; // Width of the hex grid in pixels
    const numColsOdd = Math.floor(hexGridWidth / hexagonWidth);
    // console.log("numCols", numCols);
    const numColsEven = Math.floor((hexGridWidth - 145) / hexagonWidth);
    if (numColsEven < 1) {
      return;
    }
    const minCols = Math.min(numColsOdd, numColsEven);
    let numRows = Math.ceil(hexes.length / minCols);

    let updatedHexGrid = [];

    for (let i = 0; i < numRows; i++) {
      updatedHexGrid.push([]);
    }

    let n = hexes.length - 1;
    let count = 0;
    while (n >= 0) {
      let limit = count % 2 === 0 ? numColsOdd : numColsEven;
      if (updatedHexGrid[count % numRows].length === limit) {
        count++;
        continue;
      }
      updatedHexGrid[count % numRows].push(hexes.pop());
      n--;
      count++;
    }
    setHexGrid(updatedHexGrid);
  }, [windowWidth, props.galleryPhotos]);

  const renderHexGrid = () => {
    return hexGrid.map((hexRow, index) => {
      const offset = index % 2 === 0 ? "row-odd-hexa" : "row-even-hexa";
      return (
        <div key={index} className={`hex-row ${offset}`}>
          {hexRow}
        </div>
      );
    });
  };

  return (
    <div id="PhotoGallery">
      <div className="col-md-12">
        <h1 className="section-title2">
          <span className="text-white section-header-title">Some Fun Photos</span>
        </h1>
      </div>
      <div className="col-md-12 center">
        <div ref={screenRef} className="hex-grid">
          {renderHexGrid()}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
