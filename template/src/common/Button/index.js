import * as S from "./styles";

const Button = ({ color, width, children }) => (
  <S.Button color={color} width={width}>
    {children}
  </S.Button>
);

export default Button;
