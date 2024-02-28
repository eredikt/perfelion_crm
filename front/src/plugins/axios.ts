import axios from "axios";
import {VSnackbar} from "vuetify/components";
import * as process from "process";

type Methods = "head" | "options" | "put" | "post" | "patch" | "delete" | "get";
//GET — для чтения ресурса;
// POST — для создания ресурса;
// PUT — для полного обновления ресурса;
// PATCH — для частичного обновления ресурса;
// DELETE — для удаления ресурса.
export const api = {
  get: async (url:string, query:object = {}) => await sharedApi('get', url, {}, query),
  put: async (url:string, data: object = {})=> await sharedApi('put', url, data),
  patch: async (url:string, data: object = {})=> await sharedApi('patch', url, data),
  delete: async (url:string, data: object = {})=> await sharedApi('delete', url, data),
  post: async (url:string, data:any) => await sharedApi('post', url, data)
};
export const apiWb= {
  get: async (url:string, data:string='') => {
    const response = await axios.get(`https://statistics-api.wildberries.ru/api/v1/supplier/${url}?dateFrom=${data.split('.').reverse().join('-')}`, {
      headers: {
        Authorization: import.meta.env.VITE_APP_TOKEN_WB
      },
      data
    }, );
    if (response.status) {
      if(response.data?.message) {
        // VSnackbar["onUpdate:modelValue"](true);
        // VSnackbar["text"] = response.data?.message;
      }
      return response.data.data;
    }
  }
};
async function sharedApi(methods:Methods, url:string, data:object = {}, queryData:object = {}) {
  let fullUrl:string = `api/${url}`;
  if(Object.keys(queryData).length) {
    let query:string = `?`;
    for (const key in queryData) {
      if(queryData[key as keyof typeof queryData]) query += `${key}=${queryData[key as keyof typeof queryData]}&`;
    }
    fullUrl+= query
  }
  try {
    const response = await axios[methods](fullUrl, data);
    if (response.status) {
      if(response.data?.message) {
        // VSnackbar["onUpdate:modelValue"](true);
        // VSnackbar["text"] = response.data?.message;
      }
      return response.data.data;
    }
  } catch (e) {
    console.log(e);
  }
}
export default {
  install(app: any) {
    app.config.globalProperties.api = api;
    app.provide('api', api)
  },
};
