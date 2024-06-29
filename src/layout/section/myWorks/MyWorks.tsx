import { SectionTitle } from "../../../components/SectionTitle";
import { TabMenu } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper";
import img1 from "../../../assets/images/social-network.png"
import img2 from "../../../assets/images/timer.png"
import { Container } from "../../../components/Container";
import { MyWork } from "./myWork/MyWork";
import React from "react";
import { S } from "./MyWorks_Styles";

const workData = [
    {
        title: 'Social Network',
        src: img1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        title: 'Timer',
        src: img2,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'
    }
]

const workItems = ['all', 'landing page', 'React', 'spa']

export const MyWorks: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>My works</SectionTitle>
                <TabMenu menuItems={workItems} />
                <FlexWrapper wrap={'wrap'} justify={'space-between'} align={'flex-start'}>
                    {workData.map((w) => {
                        return <MyWork title={w.title}
                                        src={w.src}
                                        text={w.text} />
                    })}

                </FlexWrapper>
            </Container>
    </S.Works>
    );
};