import { Icon } from '../../../components/icon/Icon';
import React from 'react';
import { S } from '../Footer_Styles';

type ContactPropsType = {
    icon: string
    text: string
    href?: string
    width: string
    height: string
    viewbox: string
}

export const Contact: React.FC<ContactPropsType> = (props: ContactPropsType) => {
    return (
        <S.Contact>
            <S.Link href={`${props.href}${props.text}`}>
                <Icon iconId={props.icon} width={props.width} height={props.height} viewBox={props.viewbox} />
                <S.ContactItem>{ props.text}</S.ContactItem>
            </S.Link> 
        </S.Contact>
    );
};
