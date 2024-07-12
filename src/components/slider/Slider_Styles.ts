import styled from "styled-components";

const Slider = styled.div`
  font-family: "Poppins", sans-serif;
  max-width: 725px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Slide = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 140px 0px 140px 0px;
  box-shadow: 0px 54px 104px 0px rgba(0, 0, 0, 0.04);
  background: rgb(255, 255, 255);
  padding: 52px 57px;
  margin: 85px 0 90px;

  position: relative;
`;

const IconWrap = styled.div`
  position: absolute;
`;

const Image = styled.img`
  max-width: 104px;
  width: 100%;
  object-fit: cover;
  margin: 0 auto;
  border-radius: 50%;
`;

const Name = styled.span`
  color: rgb(5, 6, 10);
  font-size: 24px;
  font-weight: 600;
  line-height: 26px;
  display: inline-block;
  margin: 20px 0 4px;

  & + span {
    color: rgb(254, 44, 84);
    font-size: 18px;
  }
`;

const Text = styled.p`
  margin: 20px 0 12px;
  color: rgb(93, 97, 111);
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
`;
const Pagination = styled.div`
  margin-bottom: 60px;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgb(242, 242, 242);

    & + span {
      margin-left: 10px;
    }

    &.active {
      background-color: rgb(51, 51, 51);
    }
  }
`;

const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const S = {
  Slider,
  Slide,
  IconWrap,
  Image,
  Name,
  Text,
  Pagination,
  StarWrapper,
};
