
import styled from "styled-components";
import { Link } from "../../../../components/link/Link";
import { Button } from "../../../../components/button/Button";



type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const MyWork = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Image src={props.src} />
                <Button>view project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href = {'#'}>Demo</Link>
                <Link href = {'#'}>Code</Link>
            </Description>
        </StyledWork>
    );
};



const StyledWork = styled.div`
background-color: rgb(248, 238, 239);
    max-width: 540px;
    width: 100%;

    & ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
        }
    }

    
`
const ImageWrapper = styled.div`
    position: relative;

    &:hover {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.3);
        }
        ${Button} {
            opacity: 1;
        }
    }

    ${Button} {
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
    height: 260px;
`


const Title = styled.h3`

`

const Text = styled.p`
    margin: 14px 0 10px;
`

const Description = styled.div`
    padding: 25px 20px;
`

