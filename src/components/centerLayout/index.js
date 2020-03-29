import React from "react";
import { CenterLayoutStyle } from "./style";

function CenterLayout(props) {
  return (
    <CenterLayoutStyle
      className={props.className + " component_center_layout"}
      width={props.width}
    >
      {props.children}
    </CenterLayoutStyle>
  );
}

export default CenterLayout;
