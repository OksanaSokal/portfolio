import styled from "styled-components";
import { Icon } from "../icon/Icon";
import avatar from "../../assets/images/avatar.webp"
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <FlexWrapper>
                <Icon iconId={'quote'} />
                <Image src={avatar} />
                <Name>Adams Ademola</Name>
                <Text>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</Text>
                <Icon iconId="star"/>
                </FlexWrapper>
                <Pagination>
                    <span></span>
                    <span></span>
                    <span></span>
                </Pagination>
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`
const Image = styled.img`
    max-width: 104px;
    width: 100%;
    object-fit: cover;
`

const Name = styled.span`

`

const Text = styled.p`

`
const Pagination = styled.div`
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 5px;
        background-color: #dd1010;
    }
`