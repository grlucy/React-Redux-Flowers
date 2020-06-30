import React, { useEffect, useState } from "react";

import Image from "../../components/Image";
import ImageContainer from "../../components/ImageContainer";
import API from "../../utils/API";

function Red() {
  const [redFlowers, setRedFlowers] = useState([]);

  useEffect(() => {
    API.search("red")
      .then((res) => {
        setRedFlowers(res.data.hits);
        console.log(res.data.hits);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ImageContainer>
      {redFlowers.map((flower) => (
        <Image
          key={flower.id}
          previewURL={flower.previewURL}
          tags={flower.tags}
        />
      ))}
    </ImageContainer>
  );
}

export default Red;
