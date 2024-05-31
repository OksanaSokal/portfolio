import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/Theme';



export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item: string, index: number) => {
                    return <ListItem key={index}>
                        <Link href=''>
                            {item}
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                            <Mask>
                                <span>{item}</span>
                            </Mask>
                        </Link>
                    </ListItem>
                })}
            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
    }
`

const Link = styled.a`
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
    color: transparent;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    color: ${theme.colors.secondaryFont};

    & + & {
        top: 50%;

        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }


`

const ListItem = styled.li`
    position: relative;

    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: rgb(254, 197, 206);

        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }

    &:hover {

        &::before{
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(5deg) translateX(5px);


            & + ${Mask} {
                transform: skewX(5deg) translateX(-5px);
        }
        }
    }
`