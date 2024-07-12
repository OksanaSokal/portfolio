import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import React from "react";

export const Reviews: React.FC = () => {
  return (
    <StyledReviews id={"testimonials"}>
      <Container>
        <FlexWrapper direction="column" align="center">
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledReviews>
  );
};

const StyledReviews = styled.section`
  background: rgba(251, 63, 92, 0.3);
  position: relative;
`;
