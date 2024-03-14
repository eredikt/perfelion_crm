export interface IProps<T> {
    header?: Header[],
    rows?: T[],
}

export type Header = {
    title: string,
    key: string,
}