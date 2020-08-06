import React from "react";
import { useTranslation } from "react-i18next";
import { Fade } from "react-reveal";

import * as S from "./styles";

const Block = ({ title, content }) => {
  const { t } = useTranslation();
  return (
    <S.Container>
      <Fade left>
        <S.Title>{t(title)}</S.Title>
        <S.TextWrapper>
          <S.Content>{t(content)}</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );
};

export default Block;
