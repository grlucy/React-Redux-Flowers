import React from "react";

import "./image.css";

function Image(props) {
  return (
    <div className="image-border">
      <img src={props.previewURL} alt={props.tags} width="300" height="200" />
      <div className="image-heart">
        <i className="fa fa-heart" aria-hidden="true"></i>
      </div>
      <div className="image-label">
        Photo by {props.author} on{" "}
        <a href={props.pageURL} target="_blank" rel="noopener noreferrer">
          Pixabay
        </a>
      </div>
    </div>
  );
}

export default Image;
