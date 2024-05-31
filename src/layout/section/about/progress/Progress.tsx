import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";

type ProgressPropsType = {
    iconId: string
    text?: string
    width: string
    max?: string
}
// value ={props.value} max = {'100'}

export const Progress = (props: ProgressPropsType) => {
    return (
        <FlexWrapper>
            <Icon iconId = {props.iconId} />
            <Label>{props.text}
                <ProgressWrap>
                    <StyledProgress ></StyledProgress>
                </ProgressWrap>
            </Label>
        </FlexWrapper>
    );
};


const Label =styled.label`
    
`

const ProgressWrap =styled.div`
    background: rgb(196, 196, 196);
    width: 210px;
    height: 8px;
`

const StyledProgress = styled.div`
    border: none;
    background-color: rgb(251, 63, 92);
    height: 8px;
    overflow: hidden;
    display: block;
`