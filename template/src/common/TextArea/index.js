import React from "react";

import * as S from "./styles";

const TextArea = (props) => (
  <S.Container>
    <S.TextArea {...props} spellcheck="false" />
  </S.Container>
);

export default TextArea;
