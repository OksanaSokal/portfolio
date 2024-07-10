import React from 'react';
import styled from 'styled-components';
import { Link } from '../../../../components/link/Link';

export type TabStatusType = 'all' | 'landing' | 'react' | 'spa';

type TabMenuPropsType = {
    tabsItems: Array<{ title: string, status: TabStatusType}>
    changeFilterStatus: (value: TabStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return <LinkItem key={index}>
                        <Link active = {props.currentFilterStatus === item.status} as = {'button'} onClick={()=>{props.changeFilterStatus(item.status)}}>{item.title}</Link>
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
