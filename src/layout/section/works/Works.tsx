import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Work } from "./work/Work";
import img1 from "../../../assets/images/card1.png"
import img2 from "../../../assets/images/card2.png"
import img3 from "../../../assets/images/card3.webp"
import img4 from "../../../assets/images/card4.webp"
import img5 from "../../../assets/images/card5.webp"
import img6 from "../../../assets/images/card6.webp"
import { S } from "./Works_Styles";
import { Container } from "../../../components/Container";
import React from "react";

const worksData = [
    {
        title: 'Project title',
        src: img1
    },
    {
        title: 'Project title',
        src: img2
    },
    {
        title: 'Project title',
        src: img3
    },
    {
        title: 'Project title',
        src: img4
    },
    {
        title: 'Project title',
        src: img5
    },
    {
        title: 'Project title',
        src: img6
    },
]

export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>Latest work</SectionTitle>
                <FlexWrapper wrap={'wrap'} justify={'space-between'} gap={'35px'}>
                    {worksData.map((w, ind) => {
                        return <Work title={w.title} key={ind} src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};