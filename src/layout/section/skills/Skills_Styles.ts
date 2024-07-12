import styled from "styled-components";
import { theme } from "../../../styles/Theme";

const Skills = styled.section`
  position: relative;
`;

const Skill = styled.div`
  width: 330px;
  padding: 42px 20px 56px;
  flex-grow: 1;

  @media ${theme.media.mobile} {
    padding: 62px 0 40px;
  }
`;

const SkillTitle = styled.h3`
  margin: 70px 0 15px;
  font-family: "Nunito Sans";
  font-size: 28px;
  font-weight: 700;
  letter-spacing: 0%;
`;
const SkillText = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 33px;
`;
const IconWrapper = styled.div`
  position: relative;
  z-index: 0;
  color: ${theme.colors.accent};

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background-color: rgb(248, 238, 239);
    transform: rotate(45deg) translate(-50%, -50%);

    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: top left;
    z-index: -1;
  }
`;

export const S = {
  Skills,
  Skill,
  SkillTitle,
  SkillText,
  IconWrapper,
};
