import styled from "styled-components";
import { theme } from "../styles/Theme";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    background?: string
    width?: string
    gap?: string
    margin?: string
}

export const FlexWrapper = styled.div <FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    flex-wrap: ${props => props.wrap || 'wrap'};
    background-color: ${props => props.background};
    width:  ${props => props.background};
    height: 100%;
    gap: ${props => props.gap};
    margin: ${props => props.margin};
`