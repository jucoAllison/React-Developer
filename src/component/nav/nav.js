import React, { useRef, useState } from "react";
import Classes from "./nav.module.css";
import { ReactComponent as Bell } from "../../asset/bell.svg";
import { ReactComponent as Arrow } from "../../asset/arrow.svg";
import { ReactComponent as Search } from "../../asset/search.svg";
import { ReactComponent as Love } from "../../asset/love.svg";
import { ReactComponent as Message } from "../../asset/message.svg";
import { ReactComponent as Menu } from "../../asset/menu.svg";
import Profile from "../../asset/profile.jpeg";
import EachNotification from "../eachNotification/eachNotification";

/** @summary this is the nav component with notification details from  EachNotification component and search input  */

const Nav = ({ onSubmit }) => {
  const [showNot, setShowNot] = useState(false);
  const inputRef = useRef();
  let notification = [
    {
      imgUrl: "https://randomuser.me/api/portraits/women/0.jpg",
      header: "Abigal liked you!",
      sub: "About 20 minutes ago",
      svg: <Love style={{ fill: "#ccc" }} />,
    },
    {
      imgUrl: "https://randomuser.me/api/portraits/men/90.jpg",
      header: "Jimmy liked you!",
      sub: "About 40 minutes ago",
      svg: <Love style={{ fill: "red" }} />,
    },
    {
      imgUrl: "https://randomuser.me/api/portraits/men/62.jpg",
      header: "Martin commented on your photo!",
      sub: "About 56 minutes ago",
      svg: <Message style={{ fill: "#332a92" }} />,
    },
  ];

  //   mappedNotification
  const notificationsMap = notification.map((v) => {
    return (
      <EachNotification
        key={v.imgUrl}
        src={v.imgUrl}
        note={v.header}
        small={v.sub}
        svg={v.svg}
      />
    );
  });

  return (
    <nav className={Classes.navCover}>
      <form
        onSubmit={onSubmit.bind(this, inputRef)}
        className={Classes.inputCover}
      >
        <Menu
          onClick={(e) => document.body.classList.toggle("open-side-bar")}
          className={Classes.MenuSVG}
        />
        {/* <Search className={Classes.SearchSVG} /> */}
        <input
          ref={inputRef}
          placeholder="Find Something. . ."
          className={Classes.searchInput}
        />
        <button className={Classes.searchBTN}>Search</button>
      </form>
      <div
        style={{ display: "flex", height: "100%" }}
        className={Classes.objCover}
      >
        <div className={Classes.bellCover}>
          <Bell className={Classes.svg} onClick={() => setShowNot(!showNot)} />
          <div className={Classes.bellNot}>3</div>
          {showNot && (
            <>
              <div className={Classes.bellPointer}></div>
              <div className={Classes.NotificationCover}>
                {notificationsMap}
              </div>
            </>
          )}
        </div>
        <div className={Classes.profilCover}>
          <img src={Profile} className={Classes.mainImg} alt="profile" />
          <div>
            <small>Johnson</small>
            <Arrow
              style={{
                width: "13px",
                marginLeft: "5px",
                fill: "#332a92",
                transform: "rotate(-90deg)",
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
