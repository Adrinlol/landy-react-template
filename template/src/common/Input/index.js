import React from 'react';

import * as S from './styles';

const Input = ({ id, name, placeholder, onChange }) => {
  return (
    <S.Container>
      <label htmlFor={id}>{id}</label>
      <S.Input
        spellcheck="false"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Input;
