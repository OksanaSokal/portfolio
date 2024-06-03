import styled from "styled-components";

type ButtonPropsType = {
    background?: string
    padding?: string
    color?: string
    border?: string
}


export const Button = styled.button<ButtonPropsType>`
    background-color: ${props => props.background || 'rgb(251, 63, 92)'};
    padding: ${props => props.padding || '19px 57px'};
    border-radius: 18px;
    border: ${props => props.border || 'none'};
    color: ${props => props.color || 'rgb(248, 238, 239)'};
    font-size: 20px;
    
`