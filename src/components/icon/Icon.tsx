import React from 'react';
import iconSprite from '../../assets/images/svg/icon-sprite.svg'

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    fill?:string
    viewBox?: string
    y?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.width || '50'} height={props.height || '50'} viewBox={props.viewBox || "0 0 50 50"} fill={ props.fill ?? 'none'} xmlns="http://www.w3.org/2000/svg">
            <use href={`${iconSprite}#${props.iconId}`} y={props.y || '12'} />
        </svg>
    );
};

