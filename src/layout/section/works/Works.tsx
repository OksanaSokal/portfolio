import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Menu } from "../../../components/menu/Menu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import img1 from "../../../assets/images/card1.png"
import img2 from "../../../assets/images/card2.png"
import img3 from "../../../assets/images/card3.webp"
import img4 from "../../../assets/images/card4.webp"
import img5 from "../../../assets/images/card5.webp"
import img6 from "../../../assets/images/card6.webp"
import { Achievements } from "../about/achievements/Achievements";



const workItems = ['all', 'landing page', 'React', 'spa']

export const Works = () => {
    return (
        <StyledWorks>
            <FlexWrapper background = {'rgb(254, 197, 206)'} justify={'space-around'} >
                <Achievements count={'81+'} text={'HAPPY CUSTOMERS'} ></Achievements>
                <Achievements count={'97+'} text={'Completed Projects'}></Achievements>
                <Achievements count={'50'} text={'Awards Won'}></Achievements>
            </FlexWrapper>
            <SectionTitle>Latest work</SectionTitle>
            <Menu menuItems={workItems} />
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Work title={'Project title'} src={img1} />
                <Work title={'Project title'} src={img2}/>
                <Work title={'Project title'} src={img3}/>
                <Work title={'Project title'} src={img4}/>
                <Work title={'Project title'} src={img5}/>
                <Work title={'Project title'} src={img6}/>
            </FlexWrapper>
        </StyledWorks>
    );
};


const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #c8adda;
`