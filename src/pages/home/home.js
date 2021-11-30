import React, { useRef, useState } from "react";
import Nav from "../../component/nav/nav";
import { ReactComponent as Disable } from "../../asset/disable.svg";
import Classes from "./home.module.css";
import Note from "./note";

/** @summary having the home page design with the search integration; note fetched items are stored at 
 * sessionstorage("bluecubeusers")  */
const Home = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  const [showBG, setShowBG] = useState(false);
  const node = useRef();
  const anonode = useRef();
  const containerRef = useRef();
  const [textArea, setTextArea] = useState("");
  const [selected, setSelected] = useState([]);
  const [spanId, setSpanId] = useState("");

  const onSubmitHandler = (ref, e) => {
    e.preventDefault();
    console.log(ref.current.value);
  };

  const onMouseUpHandler = (e) => {
    let selectedtext = selectedText();
    if (!selectedtext) {
      return null;
    }
    setShowBG(true);
    setPositions({ x: e.clientX, y: e.clientY });
    anonode.current = e;
    node.current = selectedtext;
  };

  const setColorHandler = (color, e) => {
    e.stopPropagation();
    const firstRan = Math.random();
    const secondRan = Math.random();
    const spanID = firstRan.toString().split(".")[1];
    const svgID = secondRan.toString().split(".")[1];

    const getOne = selected.filter((v) => v.value === node.current);
    if (getOne.length < 1) {
      setSelected([
        ...selected,
        {
          value: node.current,
          note: textArea,
          color,
          id: spanID,
        },
      ]);
      if (textArea.length < 1) {
        updateSelected(color, spanID, svgID);
      } else {
        setShowBG(false);
        var replceText =
          `<span id=${spanID}  data-id=${svgID} style='background: ${color}' >` +
          node.current +
          "</span>" +
          `<svg id=${svgID} width="20px" fill="#f00" style="margin-left: 4px" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ModeEditOutlineIcon" tabindex="-1" title="ModeEditOutline"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path></svg>`;
        var gethtmlText = anonode.current.target.innerHTML;
        anonode.current.target.innerHTML = gethtmlText.replace(
          node.current,
          replceText
        );
        setTextArea("");
      }
    } else {
      const spread = [...selected];
      const getIndex = selected.findIndex((v) => v.value === node.current);
      spread[getIndex].note = textArea;
      spread[getIndex].color = color;
      spread[getIndex].value = node.current;
      setSelected(spread);
      setShowBG(false);
      const ele = document.getElementById(spanId);
      ele.style.background = color;
    }
  };

  const disableText = (e) => {
    e.stopPropagation();

    const getOne = selected.filter((v) => v.value === node.current);
    if (getOne.length < 1) {
      return;
    }

    const ele = document.getElementById(spanId);
    const spread = [...selected];
    const remove = spread.filter((v) => v.id !== spanId);
    setSelected(remove);
    const eleID = ele.getAttribute("data-id");
    const svgEle = document.getElementById(eleID);
    const parent = ele.parentNode;
    parent.insertBefore(ele.firstChild, ele);
    parent.removeChild(ele);
    setShowBG(false);
    setSpanId("");
    if (svgEle) {
      const anoParent = svgEle.parentNode;
      anoParent.removeChild(svgEle);
    } else {
      return;
    }
  };

  // handler for closing pop over
  const closeModalHandler = () => {
    const firstRan = Math.random();
    const secondRan = Math.random();
    const spanID = firstRan.toString().split(".")[1];
    const svgID = secondRan.toString().split(".")[1];
    const getOne = selected.filter((v) => v.value === node.current);
    if (getOne.length > 0) {
      return;
    }

    setSelected([
      ...selected,
      {
        value: node.current,
        note: textArea,
        color: "yellow",
        id: spanID,
      },
    ]);
    if (textArea.length < 1) {
      updateSelected("yellow", spanID, svgID);
      setTextArea("");
    } else {
      setShowBG(false);
      var replceText =
        `<span id=${spanID}  data-id=${svgID}  style='background: yellow' >` +
        node.current +
        "</span>" +
        `<svg width="20px" fill="#f00" id=${svgID} style="margin-left: 4px" class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-zjt8k" focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="ModeEditOutlineIcon" tabindex="-1" title="ModeEditOutline"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z"></path></svg>`;
      var gethtmlText = anonode.current.target.innerHTML;
      anonode.current.target.innerHTML = gethtmlText.replace(
        node.current,
        replceText
      );
      setTextArea("");
    }
  };

  function selectedText() {
    if (document.getSelection) {
      return document.getSelection().toString();
    } else if (document.selection) {
      return document.selection.createRange().text;
    }
  }
  function updateSelected(color, id, svgID) {
    setShowBG(false);
    var replceText =
      `<span id=${id} data-id=${svgID} style='background: ${color}' >` +
      node.current +
      "</span>";
    var gethtmlText = anonode.current.target.innerHTML;
    anonode.current.target.innerHTML = gethtmlText.replace(
      node.current,
      replceText
    );
  }

  const rightSideHandleClick = (obj, e) => {
    setSpanId(obj.id);
    setPositions({ x: e.clientX, y: e.clientY });
    setShowBG(true);
    setTextArea(obj.note);
    node.current = obj.value;
  };

  const mappedRightSide = selected.map((v, i) => {
    return (
      <div
        key={i}
        onClick={rightSideHandleClick.bind(this, v)}
        className={Classes.eachSelectedCover}
      >
        <h3 style={{ color: v.color }}>{v.value}</h3>
        <p>{v.note}</p>
      </div>
    );
  });

  return (
    <div>
      <Nav onSubmit={onSubmitHandler} />
      <div style={{ height: "40px" }}></div>
      <div style={{ height: "40px" }}></div>
      <div
        style={{ display: showBG ? "block" : "none" }}
        onClick={closeModalHandler}
        className={Classes.bgPop}
      >
        <div
          onMouseDown={(e) => e.stopPropagation()}
          style={{ top: positions.y - 130, left: positions.x - 370 }}
          className={Classes.mainWbg}
        >
          <textarea
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
            className={Classes.textNote}
            rows="2"
            placeholder="Take note..."
          ></textarea>
          <div
            onMouseDown={(e) => e.stopPropagation()}
            className={Classes.flexColors}
          >
            <div
              onMouseDown={(e) => e.stopPropagation()}
              onClick={setColorHandler.bind(this, "yellow")}
              style={{ backgroundColor: "yellow" }}
              className={Classes.eachMainColor}
            ></div>
            <div
              onMouseDown={(e) => e.stopPropagation()}
              onClick={setColorHandler.bind(this, "green")}
              style={{ backgroundColor: "green" }}
              className={Classes.eachMainColor}
            ></div>
            <div
              onMouseDown={(e) => e.stopPropagation()}
              onClick={setColorHandler.bind(this, "orange")}
              style={{ backgroundColor: "orange" }}
              className={Classes.eachMainColor}
            ></div>
            <Disable
              onClick={disableText}
              style={{ width: "20px", marginLeft: "4px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {/* {loading && <Loader />} */}
      <div className={Classes.gridCards}>
        <div
          onMouseUp={onMouseUpHandler}
          ref={containerRef}
          className={Classes.leftSide}
        >
          <Note />
        </div>
        <div className={Classes.rightSide}>{mappedRightSide}</div>
      </div>
    </div>
  );
};

export default Home;
