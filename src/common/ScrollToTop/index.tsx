import { useCallback, useEffect, useState } from "react";
import { SvgIcon } from "../SvgIcon";
import { ScrollUpContainer } from "./styles";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    setShowScroll(window.scrollY > 350);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [checkScrollTop]);

  const scrollUp = () => {
    document.getElementById("intro")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <ScrollUpContainer onClick={scrollUp} $show={showScroll}> {/* ✅ Use $show */}
      <SvgIcon src="scroll-top.svg" width="20px" height="20px" />
    </ScrollUpContainer>
  );
};

export default ScrollToTop;
