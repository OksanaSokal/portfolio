import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import rect from '../../../assets/images/svg/rect-dark.svg'
import { font } from '../../../styles/Common';


const Main = styled.section`
    min-height: 100vh;
    display: flex;
`

const SmallText = styled.span`
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;
`

const StyledName = styled.h2`
    ${font({family: "'Nunito', sans-serif", weight: 700, Fmax: 50, Fmin: 32})};
    margin: 10px 0;
`

const Name = styled.span`
    color: rgb(251, 63, 92);
    white-space: nowrap;
`

const Text = styled.p`
    ${font({ Fmax: 24, Fmin: 18})};
    margin-bottom: 45px;
`
const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 480px;
    margin: 0 auto;

    @media ${theme.media.tablet} {
        align-items: center;

        & p {
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
        width: 620px;
        height: 690px;

        position: absolute;
        top: -60px;
        left: -40px;
        z-index: -1;
        background-image: url(${rect});

        @media ${theme.media.mobile} {
            width: 306px;
            height: 376px;
            top: -10px;
            left: 0;
            background-repeat: no-repeat;
            background-size: contain;
        }
    }
`
const Photo = styled.img`
    width: 432px;
    height: 541px;
    object-fit: cover;

    @media ${theme.media.mobile} {
        width: 240px;
        height: 301px;
    }
`

export const S = {
    Main,
    SmallText,
    StyledName,
    Name,
    Text,
    TextWrap,
    PhotoWrapper,
    Photo
}