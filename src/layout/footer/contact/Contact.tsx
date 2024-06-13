
import styled from 'styled-components';
import { Icon } from '../../../components/icon/Icon';
import { theme } from '../../../styles/Theme';

type ContactPropsType = {
    icon: string
    text: string
    href?: string
    width: string
    height: string
    viewbox: string
}

export const Contact = (props: ContactPropsType) => {
    return (
        <StyledContact>
            <Link href={`${props.href}${props.text}`}>
                <Icon iconId={props.icon} width={props.width} height={props.height} viewBox={props.viewbox} />
                <ContactItem>{ props.text}</ContactItem>
            </Link> 
        </StyledContact>
    );
};


const StyledContact = styled.li`
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