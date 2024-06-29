import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import rect from '../../../assets/images/svg/rect-light.svg';
import { font } from '../../../styles/Common';


export type ProgressPropsType = {
    iconId: string
    text?: string
    width?: string
    max?: string
    style?: string
    progressWidth?: string
}


const StyledAbout = styled.section`
    display: flex;

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }

        h1, p {
            text-align: center;
        }
    }
`

const PhotoWrapper = styled.div`
    margin: 0 auto;
    z-index: 0;
    position: relative;

    &::before {
        content: '';
        width: 388px;
        height: 432px;
        display: block;

        position: absolute;
        bottom: -50px;
        right: -50px;
        z-index: -1;
        background-image: url(${rect});
        background-repeat: no-repeat;
    }
`

// Info


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
    margin-bottom: 50px;
    ${font({ Fmax: 24, Fmin: 18 })};
    line-height: 1.4;
`

// Progress

const StyledProgress = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 270px;
    margin-bottom: 14px;
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

const ProgressLine = styled.div<ProgressPropsType>`
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

export const S = {
    StyledAbout,
    PhotoWrapper,
    Title,
    InfoWrap,
    Text,
    StyledProgress,
    Label,
    ProgressWrap,
    ProgressLine,
}