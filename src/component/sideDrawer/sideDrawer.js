import React from "react";
import Classes from "./sideDrawer.module.css";
import Logo from "../../asset/logo.png";
import { ReactComponent as Home } from "../../asset/home.svg";
import { ReactComponent as Message } from "../../asset/message.svg";
import { ReactComponent as Ranking } from "../../asset/ranking.svg";
import { ReactComponent as Challenge } from "../../asset/challenge.svg";
import { ReactComponent as Party } from "../../asset/party.svg";
import { ReactComponent as ConnectLink } from "../../asset/link.svg";
import { ReactComponent as Group } from "../../asset/group.svg";
import { ReactComponent as Parade } from "../../asset/parade.svg";
import { NavLink } from "react-router-dom";

const SideDrawer = () => {
  return (
    <aside onMouseLeave={e=>document.body.classList.remove('open-side-bar')} className={Classes.sideCover}>
      <div className={Classes.logoCover}>
        <img src={Logo} alt="logo" />
        <h3>bluecube</h3>
      </div>
      {/* Links */}
      <div className={Classes.eachLinkCover}>
        <EachLink to="dashboard" svg={<Home className={Classes.eachLinkSVG}   />} label="Home" />
        <EachLink to="messages" svg={<Message className={Classes.eachLinkSVG}   />} label="Message" />
        <h3 className={Classes.share}>SHARE</h3>
        <EachLink to="ranking" svg={<Ranking className={Classes.eachLinkSVG} style={{width: "23px"}} />} label="Ranking" />
        <EachLink to="challenge" svg={<Challenge className={Classes.eachLinkSVG}  />} label="Challenge" />
        <EachLink to="party" svg={<Party className={Classes.eachLinkSVG}  />} label="Party" />
        <EachLink to="connect" svg={<ConnectLink className={Classes.eachLinkSVG}  style={{transform: "rotate(-45deg)"}}  />} label="Connect" />
        <EachLink to="group" svg={<Group className={Classes.eachLinkSVG}  />} label="Group" />
        <EachLink to="parade" svg={<Parade className={Classes.eachLinkSVG}  />} label="Parade" />
      </div>
    </aside>
  );
};

// each link component
const EachLink = ({ svg, label, to }) => {
  return (
    <NavLink className={Classes.eachLink} to={`/${to}`}>
      {svg}
      <div className={Classes.label}>{label}</div>
    </NavLink>
  );
};

export default SideDrawer;
