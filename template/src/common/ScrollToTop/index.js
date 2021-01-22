import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Input = () => {
  const scrollUp = () => {
    const element = document.getElementById("intro");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <S.Up onClick={scrollUp}>
      <SvgIcon src="scroll-top.svg" width="26px" height="26px" />
    </S.Up>
  );
};

export default Input;
