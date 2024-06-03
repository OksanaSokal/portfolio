import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";

export const Reviews = () => {
    return (
        <StyledReviews>
            <FlexWrapper direction="column" align="center">
                <Slider/>
            </FlexWrapper>
        </StyledReviews>
    );
};

const StyledReviews =styled.section`
    background: rgba(251, 63, 92, 0.3);
`
