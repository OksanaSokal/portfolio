import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";

type ProgressPropsType = {
    iconId: string
    text?: string
    value: string
    max?: string
}

export const Progress = (props: ProgressPropsType) => {
    return (
        <FlexWrapper>
            <Icon iconId = {props.iconId} />
            <Label>{props.text}
                <ProgressWrap>
                    <StyledProgress value ={props.value} max = {'100'}></StyledProgress>
                </ProgressWrap>
            </Label>
        </FlexWrapper>
    );
};


const Label =styled.label`
    
`

const ProgressWrap =styled.div`
  
    width: 210px;
    height: 8px;
`

const StyledProgress = styled.progress`
    border: none;
    background: rgb(196, 196, 196);
    /* background-color: rgb(251, 63, 92); */
    height: 8px;
    overflow: hidden;
    display: block;
    width: 100%;
/* 
    &::-moz-progress-bar {
    border: none;
    background-color:  rgb(251, 63, 92);
    
    }

    &::-webkit-progress-bar {
    border: none;
    background-color: rgb(251, 63, 92);
    }

    &::-webkit-progress-value {
    background-color:  rgb(251, 63, 92);
    } */
`