import React, { useEffect, useState } from "react";

import Image from "../../components/Image";
import ImageContainer from "../../components/ImageContainer";
import API from "../../utils/API";

function Blue() {
  const [blueFlowers, setBlueFlowers] = useState([]);

  useEffect(() => {
    API.search("blue")
      .then((res) => {
        setBlueFlowers(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ImageContainer>
      {blueFlowers.map((flower) => (
        <Image
          key={flower.id}
          previewURL={flower.previewURL}
          tags={flower.tags}
          author={flower.user}
          pageURL={flower.pageURL}
        />
      ))}
    </ImageContainer>
  );
}

export default Blue;
