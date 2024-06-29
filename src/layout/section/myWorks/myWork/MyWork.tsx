
import { Link } from "../../../../components/link/Link";
import { Button } from "../../../../components/button/Button";
import React from "react";
import { S } from "../MyWorks_Styles";

type WorkPropsType = {
    title: string
    text: string
    src: string
}

export const MyWork: React.FC<WorkPropsType> = (props: WorkPropsType) => {
    return (
        <S.Work>
            <S.ImageWrapper>
                <S.Image src={props.src} />
                <Button>view project</Button>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Link href = {'#'}>Demo</Link>
                <Link href = {'#'}>Code</Link>
            </S.Description>
        </S.Work>
    );
};
