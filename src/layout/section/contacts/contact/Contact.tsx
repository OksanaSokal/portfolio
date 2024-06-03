import styled from 'styled-components';
import { Button } from '../../../../components/button/Button';
import { theme } from '../../../../styles/Theme';

export const Contact = () => {
    return (
            <StyledForm>
                <Label htmlFor={'email'}>Your Email Address</Label>
                <Field placeholder={'something@website.com'} type={'email'} id='email' />

                <Label htmlFor={'subject'}>Subject</Label>
                <Field placeholder={'Question about your article'} id='subject' />
                
                <Field placeholder={'Your message starts with…'}as={'textarea'} id='message'/>
                <Button type = {'submit'}>Send</Button>
            </StyledForm>
    );
};

const StyledContact = styled.div`
`

const StyledForm = styled.form`
    font-family: 'Nunito Sans', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    color: rgb(7, 26, 88);
    max-width: 520px;
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #071a58;

    textarea {
        resize: none;
        margin-bottom: 40px;
        height: 175px;
    }

    ${Button} {
        width: 223px;
    }
`
const Field = styled.input`
    font-family: 'Nunito Sans', sans-serif;
    width: 100%;
    padding: 13px;
    font-size: 16px;

    border: 1px solid rgba(0, 0, 0, 0.2);
    background: rgba(248, 238, 239, 0);
    border-radius: 3px;
    margin-bottom: 33px;
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;x

    &::placeholder {
        color: ${theme.colors.placeholderColor};
        opacity: 0.6;
    }
    

    &:nth-of-type(2) {
        margin-bottom: 56px;
    }

    &:focus-visible {
        outline: 1px solid rgba(0, 0, 0, 0.2);
    }
`
const SectionTitle = styled.h2`
    
`

const Label = styled.label`
    margin-bottom: 7px;
`