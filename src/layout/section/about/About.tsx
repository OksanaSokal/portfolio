import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from '../../../assets/images/photo2.webp';
import { Info } from "./info/Info";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./About_Styles";


export const About: React.FC = () => {
    return (
        <S.StyledAbout>
            <Container>
                <FlexWrapper align={'center'} justify={'space-between'} gap={'50px'}>
                    <S.PhotoWrapper>
                        <Photo src={photo} alt="photo" width = {'360px'} height= {'450px'} />
                    </S.PhotoWrapper>
                    <Info />
                </FlexWrapper>
            </Container>
       </S.StyledAbout>
    );
};
