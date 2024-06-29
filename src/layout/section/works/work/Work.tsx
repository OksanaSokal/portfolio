import React from "react";
import { S } from "../Works_Styles";

type WorkPropsType = {
    title: string
    src: string
}

export const Work: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.Image src = {props.src} />
            <S.Title>{props.title}</S.Title>
            <S.Link href = {'#'}>UI</S.Link>
            <S.Link href = {'#'}>Art Direction</S.Link>
        </S.Work>
    );
};