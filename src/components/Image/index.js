import React from "react";
import { useDispatch } from "react-redux";

import "./image.css";
import { plusLikeAction } from "../../actions";

function Image(props) {
  const dispatch = useDispatch();
  return (
    <div className="image-border">
      <img src={props.previewURL} alt={props.tags} width="300" height="200" />
      <div
        className="image-heart"
        onClick={() => dispatch(plusLikeAction())}
        style={{ cursor: "Pointer" }}
      >
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
