import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { Progress } from "../progress/Progress";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { font } from "../../../../styles/Common";
import { theme } from "../../../../styles/Theme";


export const Info = () => {
    return (
        <InfoWrap>
            <Title>I am a creative <br/> Graphic & UI Designer</Title>
            <Text>I’m a Graphics Designer,Design has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <FlexWrapper gap={'30px'}>
                <Button>Download CV</Button>
                <Button background= {'transparent'} color= {'rgb(251, 63, 92)'} border = {'1px solid rgb(251, 63, 92)'}>View Portfolio</Button>
            </FlexWrapper>
            <FlexWrapper wrap= {'wrap'} justify={'space-between'}>
                <Progress iconId={'ps'} text={'70%'}  progressWidth={'70%'} />
                <Progress iconId={'figma'} text={'50%'} progressWidth={'50%'} />
                <Progress iconId = {'ai'} text={'80%'} progressWidth={'80%'}/>
            </FlexWrapper>
        </InfoWrap>
    );
};


const Title = styled.h1`
    ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 48, Fmin: 28})};
    color: #191018;
    text-transform: capitalize;
    margin-bottom: 15px;
`

const InfoWrap = styled.div`
    max-width: 606px;
    margin: 60px auto 0;

    ${FlexWrapper}:last-child {
        justify-content: space-between;
        margin-top: 30px;

        @media ${theme.media.tablet} {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        } 
    }
`

const Text = styled.p`
    margin-bottom: 66px;
    ${font({Fmax: 24, Fmin: 18})};
`