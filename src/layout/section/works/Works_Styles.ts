import styled from "styled-components";

const Works = styled.section`
`

const Work = styled.div`
    width: 330px;
    flex-grow: 1;
`

const Image = styled.img`
    object-fit: cover;
    width: 100%;
`

const Link = styled.a`
    font-family: Nunito Sans;
    font-size: 17px;
    font-weight: 400;
    line-height: 27px;
    color: rgb(45, 45, 45);
`

const Title = styled.h3`
    font-family: 'Nunito', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    margin: 25px 0 10px;
`

export const S = {
    Works,
    Work,
    Image,
    Link,
    Title,
}