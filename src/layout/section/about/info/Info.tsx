import styled from "styled-components";
import { Button } from "../../../../components/button/Button";
import { Progress } from "../progress/Progress";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Achievements } from "../../works/achievements/Achievements";


export const Info = () => {
    return (
        <div>
            <Title>I am a creative Graphic & UI Designer</Title>
            <Text>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
            <Button>Download CV</Button>
            <Button background= {'transparent'} color= {'rgb(251, 63, 92)'} border = {'1px solid rgb(251, 63, 92)'}>View Portfolio</Button>
            <FlexWrapper wrap= {'wrap'}>
                <Progress iconId = {'ps'} text={'70%'} value={'70'}/>
                <Progress iconId = {'ai'} text={'80%'} value={'80'}/>
                <Progress iconId = {'figma'} text={'50%'} value={'50'}/>
            </FlexWrapper>
        </div>
    );
};


const Title = styled.h1`
    font-family: "Nunito Sans", sans-serif;;
    font-weight: 700;
    font-size: 48px;
    color: #191018;
`

const Text = styled.p`
    
`