import React from "react";

import * as S from "./styles";

const Button = (props) => <S.Button {...props}>{props.children}</S.Button>;

export default Button;
