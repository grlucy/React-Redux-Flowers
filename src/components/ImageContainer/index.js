import React from "react";

import "./ImageContainer.css";

function ImageContainer(props) {
  return <div className="image-container">{props.children}</div>;
}

export default ImageContainer;
