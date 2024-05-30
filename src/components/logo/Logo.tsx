import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo = () => {
    return (
        <StyledLink href="#">
            <Icon iconId={'logo'} width={'160px'} height= {'50px'} viewBox = {'0 10 160px 50px'} />
        </StyledLink>
    );
};

const StyledLink = styled.a`
    text-align: center;
`