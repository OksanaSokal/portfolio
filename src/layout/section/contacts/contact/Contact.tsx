import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Get in Touch</SectionTitle>
            <StyledForm>
                <Label htmlFor={'email'}>Your Email Address</Label>
                <Field placeholder={'something@website.com'} type={'email'} id='email' />

                <Label htmlFor={'subject'}>Subject</Label>
                <Field placeholder={'Question about your article'} id='subject' />
                
                <Field placeholder={'Your message starts with…'}as={'textarea'} id='message'/>
                <Button type = {'submit'}>Send</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: #a882cb;
`

const StyledForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between
`
const Field = styled.input`
    
`
const SectionTitle = styled.h2`
    
`

const Label = styled.label`
    
`