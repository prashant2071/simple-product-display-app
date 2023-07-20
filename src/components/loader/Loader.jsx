import React, { useState } from "react";

import { PacmanLoader } from "react-spinners";

const Loader = () => {
  let [color, setColor] = useState("#003580");
  const Loaderoverride = {
    display: "block",
    margin: "30% auto",
  };
  return (
    <>
      <PacmanLoader color={color} cssOverride={Loaderoverride} size={50} />
      <p style={{margin:"33% auto",display:"block"}}>loading ...</p>
    </>
  );
};

export default Loader;
