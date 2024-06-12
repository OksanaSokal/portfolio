import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/link/Link';



export const TabMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <LinkItem key={index}>
                        <Link href=''>{item}</Link>
                    </LinkItem>
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`

const LinkItem = styled.li`
    
`
