import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from '../../../assets/images/photo2.webp';
import { Info } from "./info/Info";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import rect from '../../../assets/images/svg/rect-light.svg';
import { theme } from "../../../styles/Theme";


export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'50px'}>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo" width = {'360px'} height= {'450px'} />
                    </PhotoWrapper>
                    
                    <Info />
                </FlexWrapper>
            </Container>
       </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`

const PhotoWrapper = styled.div`
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