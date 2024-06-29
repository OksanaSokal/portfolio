import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { Contact } from "./contact/Contact";
import { S } from "../footer/Footer_Styles";

const socialItemsData = [
    {
        iconId: 'twitter',
        width: '24px',
        viewBox: '0 0  24 23'
    },
    {
        iconId: 'instagram',
        width: '24px',
        viewBox: '0 0  24 23'
    },
    {
        iconId: 'snapchat',
        width: '24px',
        viewBox: '0 0  24 23'
    },
    {
        iconId: 'facebook',
        width: '24px',
        viewBox: '0 0  24 23'
    },
    {
        iconId: 'youtube',
        width: '23px',
        viewBox: '0 0  34 23'
    },
]


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.ContactsList>
                    <Contact icon={'phone'} text={'09028793244'} href={'tel:'} width={'24px'} height={'23px'} viewbox={'0 0 24 23'}/>
                    <Contact icon={'email'} text={'shalewa64@gmAil.com'} href={'mailto:'} width={'24px'} height={'18px'} viewbox={'0 0 24 18'}/> 
                    <Contact icon={'map-icon'} text={'497 Evergreen Rd. Roseville, CA 95673'}  width={'21px'} height={'24px'} viewbox={'0 0 21 24'}/>
                </S.ContactsList>
                <FlexWrapper direction={'column'} align={'center'} gap={'15px'} margin={'0 0 20px'}>
                    <S.SocialList>

                        {socialItemsData.map((i, ind) => {
                            return <S.SocialItem key ={ind}>
                                        <S.SocialLink>
                                            <Icon iconId={i.iconId} width={i.width} height={'23px'}  viewBox={i.viewBox}/>
                                        </S.SocialLink>
                                    </S.SocialItem>
                        })}
                        
                    </S.SocialList>
                    <S.Copyright>© 2023 Daniella Adams, All Rights Reserved.</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
