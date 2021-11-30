import React from "react";
import Classes from "./card.module.css";
import { ReactComponent as Location } from "../../asset/location.svg";
import { ReactComponent as CircleLove } from "../../asset/circleLove.svg";
import { ReactComponent as Dislike } from "../../asset/dislike.svg";

/** each card that is mapped into the home page with 
 * @param url, location, name, total
 */
const Card = ({
  url,
  location,
  name,
  total
}) => {
  return (
    <div className={Classes.eachCardCover}>
      <img src={url} alt="profile" className={Classes.imgCover} />
      <div className={Classes.nameSection}>
        <h3 className={Classes.nameAndAge}>{name}{name &&","} {total}</h3>
        <div className={Classes.flexTwo}>
          {" "}
          {location && <Location className={Classes.LocationSVG} />}
          <small className={Classes.nameAndAge}>{location}</small>
        </div>
          <div className={Classes.flexTwoBTN}>
            <div className={Classes.eachBTN}>
                <CircleLove />
            </div>
            <div className={Classes.eachBTN}>
            <Dislike />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Card;
