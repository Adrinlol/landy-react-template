import React from 'react';

import * as S from './styles';

const TextArea = ({ name, id, placeholder, onChange }) => (
  <S.Container>
    <label htmlFor={id}>{id}</label>
    <S.TextArea
      spellcheck="false"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default TextArea;
