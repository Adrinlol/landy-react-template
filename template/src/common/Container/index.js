import * as S from "./styles";

const Container = ({ padding, border, children }) => (
  <S.Container padding={padding} border={border}>
    {children}
  </S.Container>
);

export default Container;
