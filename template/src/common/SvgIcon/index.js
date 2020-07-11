import React from "react";
import { ReactSVG } from "react-svg";

const Icon = (props) => <ReactSVG {...props} src={`/img/svg/${props.src}`} />;

export default Icon;
