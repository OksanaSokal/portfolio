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
                        <Icon iconId={'phone'} width={'24px'} height={'23px'} viewBox={'0 0 24 23'}></Icon>
                        09028793244
                    </Contact>
                    <Contact>
                        <Icon iconId={'email'} width={'24px'} height={'23px'} viewBox={'0 0 24 23'}></Icon>
                        shalewa64@gmail.com
                    </Contact>
                    <Contact>
                    497 Evergreen Rd. Roseville, CA 95673
                    </Contact>
                </FlexWrapper>
                <FlexWrapper direction={'column'} align={'center'} gap = {'15px'} margin={'0 0 20px'}>
                    <SocialList>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'twitter'} width={'24px'} height={'23px'}  viewBox={'0 0  24 23'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'instagram'} width={'24px'} height={'23px'} viewBox={'0 0  24 23'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'snapchat'} width={'24px'} height={'23px'} viewBox={'0 0  24 23'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'facebook'} width={'24px'} height={'23px'} viewBox={'0 0  24 23'}/>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink>
                                <Icon iconId={'youtube'} width={'34px'} height={'23px'} viewBox={'0 0  34 23'}/>
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
    width: 24px;
    height: 22px;
`

const SocialLink = styled.a`
    
`

const SocialItem = styled.li`
    
`
const Copyright = styled.small`
`

const Contact = styled.span`
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding: 0 30px;
    display: flex;
    align-items: center;

    position: relative;

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

    & svg {
        position: absolute;
        left: 15px;
    }
`
