
import styled from "styled-components";



type WorkPropsType = {
    title: string
    src: string
}

export const MyWork = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Image src = {props.src} />
            <Title>{props.title}</Title>
            <Link href = {'#'}>UI</Link>
            <Link href = {'#'}>Art Direction</Link>
        </StyledWork>
    );
};



const StyledWork = styled.div`
background-color: #e28484;
width: 30%;
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
`

const Link = styled.a`

`

const Title = styled.h3`

`