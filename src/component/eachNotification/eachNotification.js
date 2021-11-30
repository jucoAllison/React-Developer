import React from "react";
import Classes from "./eachNotification.module.css";

/** @summary EachNotification has the notification for for Notification in the nav component
 * @param src = imgURL, note = notification header,  svg = notification svg 
 */
const EachNotification = ({ src, note, small, svg }) => {
  return (
    <div className={Classes.cover}>
      <img className={Classes.imgCover} src={src} alt="profile" />
      <div className={Classes.noteCover}>
        <div className={Classes.note}>{note}</div>
        <small className={Classes.small}>{small}</small>
      </div>
      <div className={Classes.svgCover}>{svg}</div>
    </div>
  );
};

export default EachNotification;
