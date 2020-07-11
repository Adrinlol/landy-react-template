import React from "react";

import * as S from "./styles";

const Input = (props) => (
  <S.Container>
    <S.Input {...props} spellcheck="false" />
    <S.Span>{props.error}</S.Span>
  </S.Container>
);

export default Input;
