import photo from '../../../assets/images/mainphoto.png'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import rect from '../../../assets/images/svg/rect-dark.svg';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap-reverse'}>
                    <TextWrap>
                        <SmallText>Hello</SmallText>
                        <StyledName>I’m <Name>Daniella Adams</Name> </StyledName>
                        <Text>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</Text>
                        <Button>Download CV</Button>
                    </TextWrap>
                    <PhotoWrapper>
                        <Photo src={photo} />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

    @media ${theme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
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
    max-width: 480px;
`

const PhotoWrapper = styled.div`
    z-index: 0;
    position: relative;

    &::before {
        content: '';
        width: 620px;
        height: 690px;

        position: absolute;
        top: -70px;
        left: -50px;
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
