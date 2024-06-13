import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from "../../../assets/images/map.png"
import { Contact } from "./contact/Contact";
import { Container } from "../../../components/Container";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { theme } from "../../../styles/Theme";



export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Get in Touch</SectionTitle>
                <FlexWrapper  justify={'space-between'} gap={'40px'}>
                    <Contact />
                    <StyledMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2981.907029235817!2d41.60629127744528!3d41.63614097126928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406785de47d2ea6f%3A0xd9f77c00f0a530e6!2skhimshiashvili%2C%2027%20Sherif%20Khimshiashvili%20St%2C%20Batumi!5e0!3m2!1sru!2sge!4v1717259785677!5m2!1sru!2sge" width="600" ></StyledMap>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 100%;

    @media ${theme.media.tablet} {
        ${FlexWrapper}  {
            justify-content: center;
        }
    }
`
const StyledMap = styled.iframe`
    max-width: 510px;
    max-height: 505px;
    border: 0;

    @media ${theme.media.tablet} {
        width: 282px;
        height: 195px;
    }
`