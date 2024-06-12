import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img1 from "../../../assets/images/social-network.png"
import img2 from "../../../assets/images/timer.png"
import { Container } from "../../../components/Container";
import { MyWork } from "./myWork/MyWork";



const workItems = ['all', 'landing page', 'React', 'spa']

export const MyWorks = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={workItems} />
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    <MyWork title={'Social Network'} src={img1} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <MyWork title={'Timer'} src={img2} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>
    </StyledWorks>
    );
};

const StyledWorks = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

