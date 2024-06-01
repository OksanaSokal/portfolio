import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";

type ProgressPropsType = {
    iconId: string
    text?: string
    width?: string
    max?: string
    style?: string
    progressWidth?: string
}

export const Progress = (props: ProgressPropsType) => {
    return (
        <StyledProgress>
            <Icon iconId={props.iconId} width={'40px'} height={'40px'} y={'0'} />
            <Label>
                <ProgressWrap>
                    <StyledProgressLine iconId={props.iconId} progressWidth={props.progressWidth}>
                        <span>{props.text}</span></StyledProgressLine>
                </ProgressWrap>
            </Label>
        </StyledProgress>
    );
};

const StyledProgress = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 14px;

    &:first-child {
        margin-right: 70px;
    }
`

const Label =styled.label`
    display: inline-block;
    display: flex;
    align-items: center;
`

const ProgressWrap =styled.div`
    background-color: rgb(196, 196, 196);
    width: 210px;
    height: 8px;
`

const StyledProgressLine = styled.div<ProgressPropsType>`
    background-color: rgb(251, 63, 92);
    height: 8px;
    width: ${props => props.progressWidth};
    position: relative;

    & span {
        position: absolute;
        top: -20px;
        right: 0;
        z-index: 2;
        font-size: 14px;
font-weight: 400;
line-height: 19px;
letter-spacing: 0%;
    }
`