import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`;

export const Input = styled.input`
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  outline: none;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  transition: border-color 0.3s ease-in;
  border-radius: 8px;
  color: #000;

  &:focus,
  &:hover {
    border-color: #2e186a;
  }
`;
