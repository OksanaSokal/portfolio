import styled from "styled-components"
import { theme } from "../../../styles/Theme"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/button/Button"


const Contacts = styled.section`
    height: 100%;

    @media ${theme.media.tablet} {
        ${FlexWrapper}  {
            justify-content: center;
        }
    }
`
const Map = styled.iframe`
    max-width: 510px;
    max-height: 505px;
    border: 0;

    @media ${theme.media.tablet} {
        width: 282px;
        height: 195px;
    }
`

const Form = styled.form`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(7, 26, 88);
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #071a58;

    textarea {
        resize: none;
        margin-bottom: 40px;
        height: 175px;
    }

    ${Button} {
        width: 223px;
    }

    @media ${theme.media.tablet} {
        align-items: center;
    }
`
const Field = styled.input`
    font-family: 'Nunito Sans', sans-serif;
    width: 100%;
    padding: 13px;
    font-size: 16px;

    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(248, 238, 239, 0);
    border-radius: 3px;
    margin-bottom: 33px;
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;x

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        opacity: 0.6;
    }
    

    &:nth-of-type(2) {
        margin-bottom: 56px;
    }

    &:focus-visible {
        outline: 1px solid rgba(0, 0, 0, 0.2);
    }
`

const Label = styled.label`
    margin-bottom: 7px;
`

export const S = {
    Contacts,
    Map,
    Form,
    Field,
    Label
}