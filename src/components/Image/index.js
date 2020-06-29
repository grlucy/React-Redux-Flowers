import React from "react";

function Image(props) {
  return (
    <>
      <img src={props.previewURL} alt={props.tags} width="300" />
    </>
  );
}

export default Image;
