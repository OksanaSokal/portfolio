import React from 'react';
import { Button } from '../../../../components/button/Button';
import { S } from '../Contacts_Styles';

export const Contact: React.FC = () => {
    return (
            <S.Form>
                <S.Label htmlFor={'email'}>Your Email Address</S.Label>
                <S.Field placeholder={'something@website.com'} type={'email'} id='email' />

                <S.Label htmlFor={'subject'}>Subject</S.Label>
                <S.Field placeholder={'Question about your article'} id='subject' />
                
                <S.Field placeholder={'Your message starts with…'}as={'textarea'} id='message'/>
                <Button type = {'submit'}>Send</Button>
            </S.Form>
    );
};