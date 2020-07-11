import styled from "styled-components";

export const Decoration = styled.div`
  background: ${(props) =>
    `url(../../../../img/svg/${props.background}) no-repeat` || null};
  position: absolute;
  top: ${(props) => props.top || null};
  right: ${(props) => props.right || null};
  bottom: ${(props) => props.bottom || null};
  left: ${(props) => props.left || null};
  width: ${(props) => props.width || null};
  height: ${(props) => props.height || null};
  z-index: ${(props) => props.z || null};
  background-size: ${(props) => props.backgroundSize || null};

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;
