import styled from "styled-components";

type PhotoType = {
    width?: string
    height?: string
}

export const Photo = styled.img<PhotoType>`
    width: ${props => props.width || '430px'};
    height: ${props => props.height || '540px'};
    object-fit: cover;
`

