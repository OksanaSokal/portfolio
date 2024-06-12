import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { font } from "../../../../styles/Common";

type TextPropsType = {
    count: string
    text: string
}


export const Achievements = (props: TextPropsType) => {
    return (
        <FlexWrapper direction={'column'} justify={'center'}>
            <Text>{props.count}</Text>
            <Text>{props.text}</Text>
        </FlexWrapper>
    );
};


const Text = styled.span`
    ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 48, Fmin: 12})}
    display: block;
    text-align: center;

    line-height: 65px;

    & + span {
        ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 36, Fmin: 11})}
    }
`