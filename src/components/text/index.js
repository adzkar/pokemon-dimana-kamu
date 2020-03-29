import React from "react";
import { TextWrapper } from "./style";

const Header = props => {
  return (
    <TextWrapper className={props.className} id={props.id}>
      <h3>{props.children}</h3>
    </TextWrapper>
  );
};

export default {
  Header
};
