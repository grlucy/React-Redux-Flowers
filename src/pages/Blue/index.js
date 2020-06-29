import React, { useEffect, useState } from "react";
import API from "../../utils/API";

function Blue() {
  const [blueFlowers, setBlueFlowers] = useState([]);

  useEffect(() => {
    API.search("blue")
      .then((res) => {
        setBlueFlowers(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <p>This is Blue</p>
    </>
  );
}

export default Blue;
