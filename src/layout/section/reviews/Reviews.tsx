import styled from "styled-components";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Reviews = () => {
    return (
        <StyledReviews>
            <Container>
                <FlexWrapper direction="column" align="center">
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledReviews>
    );
};

const StyledReviews =styled.section`
    background: rgba(251, 63, 92, 0.3);
`
