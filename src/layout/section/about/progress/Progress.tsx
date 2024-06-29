import { Icon } from "../../../../components/icon/Icon";
import { ProgressPropsType, S } from "../About_Styles";


export const Progress = (props: ProgressPropsType) => {
    return (
        <S.StyledProgress>
            <Icon iconId={props.iconId} width={'40px'} height={'40px'} />
            <S.Label>
                <S.ProgressWrap>
                    <S.ProgressLine iconId={props.iconId} progressWidth={props.progressWidth}>
                        <span>{props.text}</span></S.ProgressLine>
                </S.ProgressWrap>
            </S.Label>
        </S.StyledProgress>
    );
};
