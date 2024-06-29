import photo from '../../../assets/images/mainphoto.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Button } from '../../../components/button/Button';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} wrap={'wrap-reverse'}>
                    <S.TextWrap>
                        <S.SmallText>Hello,</S.SmallText>
                        <S.StyledName>I’m <S.Name>Daniella Adams</S.Name> </S.StyledName>
                        <S.Text>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</S.Text>
                        <Button>Download CV</Button>
                    </S.TextWrap>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} />
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};

