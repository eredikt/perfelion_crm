/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
declare global {
  interface Array<T> {
    getLabel: (value: number | string) => string,
    getAttr: (value: number | string, attr:string) => any,
  }
}
// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import axios from "@/plugins/axios";
import router from '../router';
import '@/assets/css/style.scss'
// Types
import type { App } from 'vue';

export function registerPlugins (app: App) {
  Array.prototype.getLabel = function (value:any):string {
    return this.find(item => item.value === value)?.label
  };
  Array.prototype.getAttr = function (value:any, attr:string):any {
    return this.find(item => item.value === value)[attr]
  };
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(axios)
}
