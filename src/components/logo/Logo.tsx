import React from "react";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

export const Logo: React.FC = () => {
  return (
    <StyledLink
      onClick={() => {
        scroll.scrollToTop();
      }}
    >
      <Icon
        iconId={"logo"}
        width={"160px"}
        height={"50px"}
        viewBox={"0 -12 160 50"}
      />
    </StyledLink>
  );
};

const StyledLink = styled.a`
  text-align: center;
`;
