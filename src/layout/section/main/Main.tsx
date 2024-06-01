import photo from '../../../assets/images/mainphoto.png'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Photo } from '../../../components/photo/Photo';
import { Container } from '../../../components/Container';

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'}>
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
`

const SmallText = styled.span`
    font-size: 28px;
    font-weight: 400;
    line-height: 38px;
`

const StyledName = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
    font-size: 50px;
    margin: 10px 0;
`

const Name = styled.span`
    color: rgb(251, 63, 92);
`

const Text = styled.p`
    font-weight: 400;
    font-size: 24px;
    letter-spacing: 0.06rem;
    margin-bottom: 45px;
`
const TextWrap = styled.div`
    max-width: 480px;
`

const PhotoWrapper = styled.div`
    /* z-index: 0; */
    position: relative;

    &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        width: 621px;
        height: 692px;
        background-image: url(../../../assets/images/map.png);
        background-size: cover;
    }
`
