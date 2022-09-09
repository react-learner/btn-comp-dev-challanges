import React from "react";
import { NavbarOptions } from "../DataFiles/NavbarOptions";

const SideBar = () => {
  return (
    <div>
      <h1 className="headline">
        <span>Dev</span>challenges.io
      </h1>
      <ul>
        {NavbarOptions.map((options) => {
          return 'style' in options ? (
            <li style={{ fontWeight: "700", color:'#000' }} key={options.id}>
              {options.name}
            </li>
          ) : (
            <li key={options.id}>{options.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
