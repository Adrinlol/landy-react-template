import React from "react";

import * as S from "./styles";

const UnderlineText = (props) => (
  <S.Container {...props}>
    <S.Title>{props.title}</S.Title>
    {props.content ? (
      <S.TextWrapper>
        <S.Content>{props.content}</S.Content>
      </S.TextWrapper>
    ) : (
      <S.Content>{props.content}</S.Content>
    )}
  </S.Container>
);

export default UnderlineText;
