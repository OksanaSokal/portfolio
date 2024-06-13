import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import { Contact } from "./contact/Contact";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                {/* <FlexWrapper justify={'space-around'} gap = {'10px'} margin={'65px 0 35px'}>
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
                </FlexWrapper> */}
                <ContactsList>
                    <Contact icon={'phone'} text={'09028793244'} href={'tel:'} width={'24px'} height={'23px'} viewbox={'0 0 24 23'}/>
                    <Contact icon={'email'} text={'shalewa64@gmAil.com'} href={'mailto:'} width={'24px'} height={'18px'} viewbox={'0 0 24 18'}/> 
                    <Contact icon={'map-icon'} text={'497 Evergreen Rd. Roseville, CA 95673'}  width={'21px'} height={'24px'} viewbox={'0 0 21 24'}/>
                </ContactsList>
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

// const Contact = styled.span`
//     font-family: 'Nunito', sans-serif;
//     font-size: 24px;
//     font-weight: 500;
//     padding: 0 30px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     gap: 5px;

//     position: relative;

//     &:nth-child(2)::before {
//         content: '';
//         position: absolute;
//         display: inline-block;
//         background-color:  rgb(248, 238, 239);
//         height: 35px;
//         width: 4px;
//         left: 0;
//     }

//     &:nth-child(2)::after {
//         content: '';
//         position: absolute;
//         display: inline-block;
//         background-color:  rgb(248, 238, 239);
//         height: 35px;
//         width: 4px;
//         right: 0;

//         & span {
//             display: flex;
//             justify-content: space-between;
//             gap: 5px;
//         }
//     }

//     & svg {
//         position: absolute;
//         left: 15px;
//     }
// `
