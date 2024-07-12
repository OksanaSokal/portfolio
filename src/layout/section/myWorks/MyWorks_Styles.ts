import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Link } from "../../../components/link/Link";
import { theme } from "../../../styles/Theme";

const Works = styled.section`
  ${FlexWrapper} {
    gap: 30px;
  }

  position: relative;
`;

const Work = styled.div`
  background-color: rgb(248, 238, 239);
  /* width: 330px;
  flex-grow: 1; */

  & ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }

  /* @media ${theme.media.desktop} {
    max-width: 540px;
  } */
`;
const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    transition: ${theme.animation.transition};
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    transition: ${theme.animation.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 260px;
`;

const Title = styled.h3``;

const Text = styled.p`
  margin: 14px 0 10px;
`;

const Description = styled.div`
  padding: 25px 20px;
`;

export const S = {
  Works,
  Work,
  ImageWrapper,
  Image,
  Title,
  Text,
  Description,
};
