import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import "../App.css";

const ButtonsContainer = () => {
  const [value, setValue] = useState("default");
  const [color, setColor] = useState("default");
  const [shadow, setShadow] = useState(false);
  const [size, setSize] = useState(8);
  const [iconDisplay, setIconDisplay] = useState(false);
  const [icon, setIcon] = useState("left");
  const shadowStyle = "4px 4px 26px -10px";
  const defaultStyle = {
    borderRadius: "0.6rem",
    border: "0",
    fontSize: "1.4rem",
    fontWeight: "500",
    backgroundColor:
      color === "default"
        ? "#e0e0e0"
        : color === "primary"
        ? "#2962ff"
        : color === "secondary"
        ? "#455a64"
        : color === "danger"
        ? "#d32f2f"
        : "#e0e0e0",
    color:
      color === "default"
        ? "#3f3f3f"
        : color === "disable"
        ? "#9e9e9e"
        : "#fff",
    boxShadow: shadow === true ? shadowStyle : "0 0 0 0 #fff",
    padding: `${size}px ${size * 2}px`,
  };
  const outlineStyle = {
    borderRadius: "0.6rem",
    border: "0.2rem solid",
    fontSize: "1.4rem",
    fontWeight: "500",
    backgroundColor: "white",
    borderColor:
      color === "default"
        ? "#e0e0e0"
        : color === "primary"
        ? "#2962ff"
        : color === "secondary"
        ? "#455a64"
        : color === "danger"
        ? "#d32f2f"
        : "#9e9e9e",
    color:
      color === "default"
        ? "#2f2f2f"
        : color === "primary"
        ? "#2962ff"
        : color === "secondary"
        ? "#455a64"
        : color === "danger"
        ? "#d32f2f"
        : "#9e9e9e",
    boxShadow: shadow === true ? shadowStyle : "0 0 0 0 #fff",
    padding: `${size}px ${size * 2}px`,
  };
  const textStyle = {
    borderRadius: "0.6rem",
    fontSize: "1.4rem",
    fontWeight: "500",
    border: "0",
    backgroundColor: "white",
    color:
      color === "default"
        ? "#2f2f2f"
        : color === "primary"
        ? "#2962ff"
        : color === "secondary"
        ? "#455a64"
        : color === "danger"
        ? "#d32f2f"
        : "#9e9e9e",
    boxShadow: shadow === true ? shadowStyle : "0 0 0 0 #fff",
    padding: `${size}px ${size * 2}px`,
  };

  const styleHandler = (e) => {
    setValue(e.target.value);
  };
  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  const shadowHandler = (e) => {
    setShadow(!shadow);
  };
  const sizeHandler = (e) => {
    setSize(e.target.value);
  };
  const iconDisplayHandler = (e) => {
    setIconDisplay(e.target.value);
    console.log(e.target.value);
  };
  const iconHandler = (e) => {
    const result = e.target.value;

    setIcon(result.toString());
  };

  return (
    <div className="buttons_container">
      <h1>Buttons</h1>
      <div className="button_area">
        <button
          className="btn"
          style={
            value === "default"
              ? defaultStyle
              : value === "outline"
              ? outlineStyle
              : textStyle
          }
        >
          <MdShoppingCart
            style={{
              display: iconDisplay === "true" && icon === "left" ? "" : "none",
            }}
          />
          Default
          <MdShoppingCart
            style={{
              display: iconDisplay === "true" && icon === "right" ? "" : "none",
            }}
          />
        </button>
        <div className="styles_container">
          <div className="styles">
            <label htmlFor="buttons">Choose your Button style:</label>
            <select onChange={styleHandler} name="buttons" id="buttons">
              <option value="default">Default</option>
              <option value="outline">Outline</option>
              <option value="text">Text</option>
            </select>
          </div>
          <div className="styles">
            <label htmlFor="colors">Choose your Button color:</label>
            <select onChange={colorHandler} name="colors" id="colors">
              <option value="default">Default</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="danger">Danger</option>
              <option value="disable">Disable</option>
            </select>
          </div>
          <div className="styles">
            <label htmlFor="size">Choose your Button size:</label>
            <select onChange={sizeHandler} name="size" id="size">
              <option value="8">Medium</option>
              <option value="6">Small</option>
              <option value="11">Large</option>
            </select>
          </div>
          <div className="styles">
            <label htmlFor="iconDisplay">Display Icon:</label>
            <select
              onChange={iconDisplayHandler}
              name="iconDisplay"
              id="iconDisplay"
            >
              <option value="false">Hide</option>
              <option value="true">Display</option>
            </select>
          </div>
          {iconDisplay ? (
            <div className="styles">
              <label htmlFor="icon">Choose your Icon Position:</label>
              <select onChange={iconHandler} name="icon" id="icon">
                <option value="left">Left</option>
                <option value="right">Right</option>
              </select>
            </div>
          ) : (
            ""
          )}
          <div className="styles">
            <label htmlFor="shadow">Shadow:</label>
            <select onChange={shadowHandler} name="shadow" id="shadow">
              <option value="false">False</option>
              <option value="true">True</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonsContainer;
