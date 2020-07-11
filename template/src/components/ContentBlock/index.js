import React from "react";

import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";

const AboutBlock = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};

export default AboutBlock;
