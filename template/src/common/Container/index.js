import React from "react";

import * as S from "./styles";

const Container = (props) => (
  <S.Container {...props}>{props.children}</S.Container>
);

export default Container;
