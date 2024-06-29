import React from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';

export const Logo: React.FC = () => {
    return (
        <StyledLink href="#">
            <Icon iconId={'logo'} width={'160px'} height= {'50px'} viewBox = {'0 -12 160 50'}  />
        </StyledLink>
    );
};

const StyledLink = styled.a`
    text-align: center;
`