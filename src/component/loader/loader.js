import React from "react";
import Classes from "./loader.module.css";

const Loader = () => {
  return (
    <div className={Classes.loaderCover}>
      <div className={Classes.lds_facebook}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
