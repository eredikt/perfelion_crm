import {IItemsGoods} from "@/models/goods";

export const itemsColor:Array<IItemsGoods> = [
  {
    label: 'Белый',
    value: 1,
    color: '#fff'
  },
  {
    label: 'Чёрный',
    value: 2,
    color: '#000',
  },
  {
    label: 'Графит',
    value: 3,
    color: '#474a51'
  },
  {
    label: 'Электрик',
    value: 4,
    color: '#2c75ff'
  },
  {
    label: 'Бежевый',
    value: 5,
    color: '#e6daa6',
  },
  {
    label: 'Барби',
    value: 6,
    color: '#fe46a5'
  },
  {
    label: 'Фукси',
    value: 7,
    color: '#f400a1'
  },
  {
    label: 'Красный',
    value: 8,
    color: '#f00'
  },
  {
    label: 'Хаки',
    value: 9,
    color: '#556832'
  },
  {
    label: 'Кофейный',
    value: 10,
    color: '#6a513b',
  },
];
export const itemsType:Array<IItemsGoods> = [
  {
    label: 'Завязки',
    value: 1
  },
  {
    label: 'Топ/галочка',
    value: 2
  },
]

export const itemsSize: Array<IItemsGoods> = [
  {
    label: '42',
    value: 42
  },
  {
    label: '44',
    value: 44
  },
  {
    label: '46',
    value: 46
  },
]
 export const itemsStatus: Array<IItemsGoods> = [
   {
     label: 'В Пошиве',
     value: 1,
     color: 'warning'
   },
   {
     label: 'Упаковка',
     value: 2,
     color: 'primary'
   },
   {
     label: 'Подготовка к отправвке',
     value: 3,
     color: 'success',
   },
   {
     label: 'Отправлено на WB',
     value: 4,
     color: 'gray',
   },
 ]
