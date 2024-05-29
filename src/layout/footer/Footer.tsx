import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";


export const Footer = () => {
    return (
        <StyledFooter>
                <FlexWrapper direction={'column'} align={'center'}>
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
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: antiquewhite;
`

const SocialList = styled.ul`
    display: flex;
    gap: 15px;
`

const SocialLink = styled.a`

`

const SocialItem = styled.li`

`
const Copyright = styled.small`

`