import React, { useEffect, useRef, useState } from "react";

const PhotoGallery = (props) => {
  const screenRef = useRef(null);
  const [hexGrid, setHexGrid] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
    let hexes = [];

    if (props.galleryPhotos && hexes.length === 0) {
      hexes = props.galleryPhotos.map((gallery, index) => {
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
    }

    const hexagonWidth = 290; // Width of each hexagon in pixels
    // console.log("windowWidth", windowWidth);
    const hexGridWidth = windowWidth - 150; // Width of the hex grid in pixels
    const numColsOdd = Math.floor(hexGridWidth / hexagonWidth);
    // console.log("numColsOdd", numColsOdd);
    const numColsEven = Math.floor((hexGridWidth + 145) / hexagonWidth);
    // console.log("numCols", numColsEven);
    if (numColsEven < 1) {
      setHexGrid(hexes);
      return;
    }

    let len = hexes.length;
    let row_index = 0
    let updatedHexGrid = [];

    while (len > Math.min(numColsOdd, numColsEven)) {
      let row_count = 0
      if (row_index % 2 === 0) {
        row_count = numColsOdd;
      } else {
        row_count = numColsEven;
      }
      updatedHexGrid.push([]);
      for (let i = 0; i < row_count; i++) {
        updatedHexGrid[row_index].push(hexes.pop());
      }
      len -= row_count;
      row_index++;
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
