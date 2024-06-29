import { FlexWrapper } from "../../../../components/FlexWrapper";
import React from "react";
import { S } from "../Achievements_Styled";

type TextPropsType = {
    count: string
    text: string
}


export const Achievements: React.FC<TextPropsType> = (props: TextPropsType) => {
    return (
        <FlexWrapper direction={'column'} justify={'center'}>
            <S.Text>{props.count}</S.Text>
            <S.Text>{props.text}</S.Text>
        </FlexWrapper>
    );
};