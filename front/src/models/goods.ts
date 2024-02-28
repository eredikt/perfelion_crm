export interface IHeaders {
  key: string | null,
  title: string
}
export interface IItemsGoods {
  label: string,
  value: number,
  color?: string,
}
export interface IFormAddGoods {
  date?: string,
  count?: string,
  size?: number,
  color?: number,
  type?: number,
  status?: number | undefined,
}
