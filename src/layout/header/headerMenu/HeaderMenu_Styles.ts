import styled, { css } from "styled-components";
import { theme } from "../../../styles/Theme";
import { Link } from "react-scroll";

// Menu

const MenuItem = styled.li`
  position: relative;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  height: 50%;
  overflow: hidden;
  color: ${theme.colors.secondaryFont};
  transition: ${theme.animation.transition};

  & + & {
    top: 50%;

    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const NavLink = styled(Link)`
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
  color: transparent;

  &::before {
    content: "";
    display: inline-block;
    height: 2px;
    background-color: rgb(254, 197, 206);

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;
    transform: scale(0);
    transition: ${theme.animation.transition};
  }

  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }

    ${Mask} {
      transform: skewX(5deg) translateX(5px);

      & + ${Mask} {
        transform: skewX(5deg) translateX(-5px);
      }
    }
  }
`;

// Mobile Menu

const StyledMobileMenu = styled.nav``;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  background-color: ${theme.colors.accent};
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 0.8s ease-in-out;

  ul {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    transition: 0.8s ease-in-out;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      transform: translateY(0);

      & ul {
        gap: 30px;
      }
    `}
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 1000;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.secondaryFont};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: transparent;
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.secondaryFont};
      position: absolute;
      transform: translateY(-10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0);
        `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.secondaryFont};
      position: absolute;
      transform: translateY(10px);

      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0);
          width: 36px;
        `}
    }
  }
`;

// DesktopMenu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
  }
`;

export const S = {
  NavLink,
  MenuItem,
  Mask,
  StyledMobileMenu,
  MobileMenuPopup,
  BurgerButton,
  DesktopMenu,
};
