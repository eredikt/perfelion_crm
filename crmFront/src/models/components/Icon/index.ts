export interface IProps {
    type?: string,
    path: string,
    size?: string | number,
    viewbox?: string,
    flip?: string,
    rotate?: number,
}

export interface IStyles{
    [key: string]: string,
}

export type Types = {
    viewbox: string,
    size: number,
}