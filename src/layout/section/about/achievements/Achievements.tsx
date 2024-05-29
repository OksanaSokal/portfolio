import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";

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
    display: block;
    text-align: center;
`