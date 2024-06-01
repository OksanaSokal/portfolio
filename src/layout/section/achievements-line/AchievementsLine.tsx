import styled from 'styled-components';
import { Achievements } from './achievements/Achievements';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';

export const AchievementsLine = () => {
    return (
        <AchievementsWrap >
            <Container>
                <FlexWrapper justify={'space-around'}>
                    <Achievements count={'81+'} text={'HAPPY CUSTOMERS'} ></Achievements>
                    <Achievements count={'97+'} text={'Completed Projects'}></Achievements>
                    <Achievements count={'50'} text={'Awards Won'}></Achievements>
                </FlexWrapper>
            </Container>
        </AchievementsWrap>
    );
};

const AchievementsWrap = styled.section`
    background: rgb(254, 197, 206);
    padding: 55px 0 60px
`