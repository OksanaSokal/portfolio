import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from '../../../assets/images/photo2.webp';
import { Info } from "./info/Info";
import styled from "styled-components";
import { Container } from "../../../components/Container";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify = {'space-between'}>
                    <Photo src={photo} alt="photo" width = {'360px'} height= {'450px'} />
                    <Info />
                </FlexWrapper>
            </Container>
       </StyledAbout>
    );
};

const StyledAbout = styled.section`
    margin: 120px 0 216px;
`