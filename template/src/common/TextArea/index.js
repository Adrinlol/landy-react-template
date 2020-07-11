import React from "react";

import * as S from "./styles";

const Textarea = (props) => (
  <S.Container>
    <S.Textarea {...props} spellcheck="false" />
  </S.Container>
);

export default Textarea;
