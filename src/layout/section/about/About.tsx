import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from '../../../assets/images/photo2.webp';
import { Info } from "./info/Info";
import { Achievements } from "../works/achievements/Achievements";
import styled from "styled-components";


export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper justify = {'space-between'}>
                <Photo src={photo} alt="photo" width = {'360px'} height= {'450px'} />
                <Info />
            </FlexWrapper>
       </StyledAbout>
    );
};

const StyledAbout = styled.section`
    
`