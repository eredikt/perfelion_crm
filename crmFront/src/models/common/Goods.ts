export interface IGoods {
    types: string,
    count: number,
    date_create: string,
    colors: Colors,
    sizes: string,
    status: TypesOrStatus,
    $id: string,
}

export interface IGoodsAppWrite {
    types: TypesOrStatus[],
    count: number,
    date_create: string,
    colors: Colors[],
    sizes: Sizes[],
    status: TypesOrStatus[],
}

type Colors = {
    $collectionId:string
    $databaseId:string
    color:string
    color_hex:string,
}
type Sizes = {
    $collectionId:string
    $databaseId:string
    size: string
}
export type TypesOrStatus = {
    $collectionId?:string
    $id?:string
    $databaseId?:string
    color?: string | undefined
    name: string
}