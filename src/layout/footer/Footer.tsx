import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-around'} gap = {'10px'} margin={'65px 0 35px'}>
                    <Contact>
                        <Icon iconId={'phone'} width={'23px'} height={'23px'}></Icon>
                        09028793244
                    </Contact>
                    <Contact>
                        <Icon iconId={'email'} width={'23px'} height={'17px'}></Icon>
                        shalewa64@gmAil.com
                    </Contact>
                    <Contact>
                    497 Evergreen Rd. Roseville, CA 95673
                    </Contact>
                </FlexWrapper>
                <FlexWrapper direction={'column'} align={'center'} gap = {'15px'} margin={'0 0 20px'}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'twitter'} width={'22px'} height={'22px'}  viewBox={'0 0  22px 22px'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'instagram'} width={'22px'} height={'22px'} viewBox={'0 0  22px 22px'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'snapchat'} width={'22px'} height={'22px'} viewBox={'0 0  22px 22px'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'facebook'} width={'22px'} height={'22px'} viewBox={'0 0  22px 22px'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'youtube'} width={'22px'} height={'22px'} viewBox={'0 0  22px 22px'}/>
                            </SocialLink>
                        </SocialItem>
                    </SocialList>
                    <Copyright>© 2023 Daniella Adams, All Rights Reserved.</Copyright>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    color: rgb(248, 238, 239);
    background-color: ${theme.colors.accent};
`

const SocialList = styled.ul`
    display: flex;
    gap: 15px;

`

const SocialLink = styled.a`
    background-color: #2ea9c5
`

const SocialItem = styled.li`
    
`
const Copyright = styled.small`
`

const Contact = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin: 0 10px;
    padding: 0 20px;

    position: relative;

    &:nth-child(2)::before {
        content: '';
        position: absolute;
        display: inline-block;
        background-color:  rgb(248, 238, 239);
        height: 35px;
        width: 4px;
        left: -20%;
    }

    &:nth-child(2)::after {
        content: '';
        position: absolute;
        display: inline-block;
        background-color:  rgb(248, 238, 239);
        height: 35px;
        width: 4px;
        right: -20%;
    }

    & svg {
        position: absolute;
        left: 0px;
    }
`
