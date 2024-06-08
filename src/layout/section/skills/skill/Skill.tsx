import styled from 'styled-components';
import { Icon } from '../../../../components/icon/Icon';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import testIcon from './../../../../assets/images/svg/instagram.svg'
import { theme } from '../../../../styles/Theme';

type SkillPropsType = {
    iconId: string
    title: string
    text: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={'column'} align= {'center'}>
                <IconWrapper>
                    <Icon iconId={props.iconId} />
                </IconWrapper>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 380px;
    padding: 62px 20px 40px;
    /* display: flex; */
`

const SkillTitle = styled.h3`
    margin: 70px 0 15px;
    font-family: 'Nunito Sans',;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: 0%;
`
const SkillText = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 33px;
`
const IconWrapper = styled.div`
    position: relative;
    z-index: 0;
    color: ${theme.colors.accent};

    &::before {
        content: '';
        display: inline-block;
        width: 80px;
        height: 80px;
        background-color: rgb(248, 238, 239);
        transform: rotate(45deg) translate(-50%, -50%);

        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: top left;
        z-index: -1;
    }
`