import {defineStore} from "pinia";

interface ILoaderStore {
    isLoading: boolean
}

export const useIsLoadingStore = defineStore('isLoading', {
    state: ():ILoaderStore => ({
        isLoading: false,
    }),
    getters: {
        isLoader: state => !!state.isLoading,
    },
    actions: {
        set(data: boolean) {
            this.$patch({isLoading: data});
        }
    }
})