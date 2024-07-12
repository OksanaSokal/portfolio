import styled from "styled-components";
import { font } from "../../../styles/Common";

const AchievementsWrap = styled.section`
  background: rgb(254, 197, 206);
  padding: 55px 0 60px;
  position: relative;
`;
const Text = styled.span`
  ${font({ family: "'Nunito', sans-serif", weight: 700, Fmax: 48, Fmin: 12 })}
  display: block;
  text-align: center;

  line-height: 65px;

  & + span {
    ${font({ family: "'Nunito', sans-serif", weight: 700, Fmax: 36, Fmin: 11 })}
  }
`;

export const S = {
  AchievementsWrap,
  Text,
};
