import React from 'react';

import * as S from './styles';

const Input = ({ id, name, placeholder, onChange }) => {
  return (
    <S.Container>
      <label htmlFor={name}>{id}</label>
      <S.Input
        spellcheck="false"
        placeholder={placeholder}
        name={name}
        id={name}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Input;
