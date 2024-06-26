import { theme } from "./Theme"

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}
export const font = ({ family, weight, color, lineHeight, Fmin, Fmax }: FontPropsType) => `
    font-family: ${family || 'Nunito Sans'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.font};
    line-height: ${lineHeight || 1.2};
    font-size: calc((min(100vw, 1440px) - 370px)/(1440 - 370) * (${Fmax} - ${Fmin} ) + ${Fmin}px);
`