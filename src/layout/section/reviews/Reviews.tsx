import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Reviews = () => {
    return (
        <StyledReviews>
            <SectionTitle>Reviews</SectionTitle>
            <FlexWrapper direction="column" align="center">
                <Slider/>
            </FlexWrapper>
        </StyledReviews>
    );
};

const StyledReviews =styled.section`
    background-color: #9fbb9e;
`
