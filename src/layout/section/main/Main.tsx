import React from 'react';
import photo from '../../../assets/images/mainphoto.png'
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Main = () => {
    return (
        <div>
            <FlexWrapper align = {'center'} justify={'space-around'}>
                <StyledMain>
                    <HiddenTitle>a web developer frontend</HiddenTitle>
                    <span>Hello</span>
                    <h2>I’m <Name>Daniella Adams</Name> </h2>
                    <p>I’m a Graphics Designer,Designng has become my everyday affair. masting styles,grids cant be less interesting.</p>
                    <button>Download CV</button>            
                </StyledMain>
                <Photo src={photo} alt="photo" />
            </FlexWrapper>
        </div>
    );
};

const Name = styled.span`
    color: rgb(251, 63, 92)
`

const HiddenTitle = styled.h1`
    display: none;
`

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: rgb(255, 255, 255);;
`

const Photo = styled.img`
width: 430px;
height: 540px;
object-fit: cover;
`