import React from "react";
import { WrapperStyle } from "./style";

const Wrapper = props => {
  return (
    <WrapperStyle className={props.className}>{props.children}</WrapperStyle>
  );
};

export default Wrapper;
