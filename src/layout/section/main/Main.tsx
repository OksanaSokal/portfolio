import photo from "../../../assets/images/mainphoto.png";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/button/Button";
import { Container } from "../../../components/Container";
import React from "react";
import { S } from "./Main_Styles";
import Typewriter from "typewriter-effect";
import Tilt from "react-parallax-tilt";

export const Main: React.FC = () => {
  return (
    <S.Main id={"home"}>
      <Container>
        <FlexWrapper
          align={"center"}
          justify={"space-between"}
          wrap={"wrap-reverse"}
        >
          <S.TextWrap>
            <S.SmallText>Hello,</S.SmallText>
            <S.StyledName>
              I’m
              <S.Name> Daniella Adams</S.Name>
            </S.StyledName>
            <S.Text>
              <Typewriter
                options={{
                  strings: [`I’m a Graphics Designer.`],
                  autoStart: true,
                  loop: true,
                }}
              />
              Design has become my everyday affair. Masting styles,grids cant be
              less interesting.
            </S.Text>
            <Button>Download CV</Button>
          </S.TextWrap>
          <S.PhotoWrapper>
            <Tilt>
              <S.Photo src={photo} />
            </Tilt>
          </S.PhotoWrapper>
        </FlexWrapper>
      </Container>
    </S.Main>
  );
};
