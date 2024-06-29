import { Achievements } from './achievements/Achievements';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import React from 'react';
import { S } from './Achievements_Styled';

export const AchievementsLine: React.FC = () => {
    return (
        <S.AchievementsWrap >
            <Container>
                <FlexWrapper justify={'space-around'}>
                    <Achievements count={'81+'} text={'HAPPY CUSTOMERS'} />
                    <Achievements count={'97+'} text={'Completed Projects'}/>
                    <Achievements count={'50'} text={'Awards Won'}/>
                </FlexWrapper>
            </Container>
        </S.AchievementsWrap>
    );
};