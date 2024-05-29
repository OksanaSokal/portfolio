import { FlexWrapper } from "../../../components/FlexWrapper";
import { Photo } from "../../../components/photo/Photo";
import photo from '../../../assets/images/photo2.webp';
import { Info } from "./info/Info";
import { Achievements } from "./achievements/Achievements";
import styled from "styled-components";


export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper justify = {'space-between'}>
                <Photo src={photo} alt="photo" width = {'360px'} height= {'450px'} />
                <Info />
            </FlexWrapper>
            <FlexWrapper background = {'rgb(254, 197, 206)'} justify={'space-around'} >
                <Achievements count={'81+'} text={'HAPPY CUSTOMERS'} ></Achievements>
                <Achievements count={'97+'} text={'Completed Projects'}></Achievements>
                <Achievements count={'50'} text={'Awards Won'}></Achievements>
            </FlexWrapper>
       </StyledAbout>
    );
};

const StyledAbout = styled.section`
    
`