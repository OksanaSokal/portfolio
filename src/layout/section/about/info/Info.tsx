import { Button } from "../../../../components/button/Button";
import { Progress } from "../progress/Progress";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import React from "react";
import { S } from "../About_Styles";


export const Info: React.FC = () => {
    return (
        <S.InfoWrap>
            <S.Title>I am a creative <br/> Graphic & UI Designer</S.Title>
            <S.Text>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting,Lorem Ipsum is simply dummy text of the printing and typesetting industry.</S.Text>
            <FlexWrapper gap={'30px'}>
                <Button>Download CV</Button>
                <Button background= {'transparent'} color= {'rgb(251, 63, 92)'} border = {'1px solid rgb(251, 63, 92)'}>View Portfolio</Button>
            </FlexWrapper>
            <FlexWrapper wrap= {'wrap'} justify={'space-between'}>
                <Progress iconId={'ps'} text={'70%'}  progressWidth={'70%'} />
                <Progress iconId={'figma'} text={'50%'} progressWidth={'50%'} />
                <Progress iconId = {'ai'} text={'80%'} progressWidth={'80%'}/>
            </FlexWrapper>
        </S.InfoWrap>
    );
};

