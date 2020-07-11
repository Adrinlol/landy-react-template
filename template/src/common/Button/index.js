import React from "react";

import * as S from "./styles";

const Primary = (props) => <S.Button {...props}>{props.children}</S.Button>;

export default Primary;
