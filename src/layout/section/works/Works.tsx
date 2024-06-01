import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import img1 from "../../../assets/images/card1.png"
import img2 from "../../../assets/images/card2.png"
import img3 from "../../../assets/images/card3.webp"
import img4 from "../../../assets/images/card4.webp"
import img5 from "../../../assets/images/card5.webp"
import img6 from "../../../assets/images/card6.webp"

import { Container } from "../../../components/Container";


export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Latest work</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <Work title={'Project title'} src={img1} />
                    <Work title={'Project title'} src={img2}/>
                    <Work title={'Project title'} src={img3}/>
                    <Work title={'Project title'} src={img4}/>
                    <Work title={'Project title'} src={img5}/>
                    <Work title={'Project title'} src={img6}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
`

