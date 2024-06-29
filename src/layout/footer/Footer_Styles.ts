import styled from "styled-components"
import { theme } from "../../styles/Theme"


const Footer = styled.footer`
    color: rgb(248, 238, 239);
    background-color: ${theme.colors.accent};
`

const ContactsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
    max-width: 1050px;
    width: 100%;
    font-size: 24px;
    margin: 50px auto 20px;

    @media ${theme.media.tablet} {
        justify-content: center;

        & li::before, li::after {
            opacity: 0;
        }
    }
`

const SocialList = styled.ul`
    display: flex;
    gap: 15px;
    width: 24px;
    height: 22px;
    justify-content: center;
`

const SocialLink = styled.a`
`

const SocialItem = styled.li`
`

const Copyright = styled.small`
`

const Contact = styled.li`
    display: flex;
    opacity: 1;

    position: relative;

    svg{
        margin-right: 15px;
    }

    &:nth-child(2) {
        padding: 0 25px;
    }


    &:nth-child(2)::before {
        content: '';
        position: absolute;
        display: inline-block;
        background-color:  rgb(248, 238, 239);
        height: 35px;
        width: 4px;
        left: 0;
    }

    &:nth-child(2)::after {
        content: '';
        position: absolute;
        display: inline-block;
        background-color:  rgb(248, 238, 239);
        height: 35px;
        width: 4px;
        right: 0;
    }
`

const ContactItem = styled.span`
`

const Link = styled.a`
    color: ${theme.colors.secondaryFont};

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${theme.media.tablet} {
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }
`

export const S = {
    Footer,
    ContactsList,
    SocialList,
    SocialLink,
    SocialItem,
    Copyright,
    Contact,
    ContactItem,
    Link,
    
}