import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexWrapper } from '../../components/FlexWrapper';
import { HeaderMenu } from './headerMenu/HeaderMenu';

const items = ['Home', 'About', 'My skills', 'Latest Works', 'Testimonials', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify= {'space-between'} align= {'center'} >
                    <Logo/>
                    <HeaderMenu menuItems={items} />
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background-color: rgb(251, 63, 92);
    padding: 20px 0 25px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`