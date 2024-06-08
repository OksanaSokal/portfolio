import styled from "styled-components";
import { Icon } from "../icon/Icon";
import avatar from "../../assets/images/avatar.webp"
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <FlexWrapper direction={'column'}>
                    <IconWrap>
                        <Icon iconId={'quote'} width={'110px'} height={'86px'} viewBox={'0 0 110 86'}/>
                    </IconWrap>
                    <Image src={avatar} />
                    <Name>Adams Ademola</Name>
                    <span>Happy Client</span>
                    <Text>“Everyone working in the office is very knowledgeable about all types of dental work and options for your individual needs.”</Text>
                    <StarWrapper>
                        <Icon iconId={'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'} />
                        <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
                        <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
                        <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
                        <Icon iconId= {'star'} width={'26px'} height={'26px'} viewBox={'0 0 26 26'}/>
                    </StarWrapper>  
                </FlexWrapper>
            </Slide>
            <Pagination>
                    <span className={'active'}></span>
                    <span></span>
                    <span></span>
                </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    font-family: 'Poppins', sans-serif;
    max-width: 725px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
    border-radius: 140px 0px 140px 0px;
    box-shadow: 0px 54px 104px 0px rgba(0, 0, 0, 0.04);
    background: rgb(255, 255, 255);
    padding: 52px 57px;
    margin: 85px 0 40px;

    position: relative;
`

const IconWrap = styled.div`
    position: absolute;
`

const Image = styled.img`
    max-width: 104px;
    width: 100%;
    object-fit: cover;
    margin: 0 auto;
`

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
`

const Text = styled.p`
    margin: 20px 0 12px;
    color: rgb(93, 97, 111);
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
`
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
`

const StarWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
`