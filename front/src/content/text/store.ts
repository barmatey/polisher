import {defineStore} from "pinia";
import {ref} from "vue";

export const useSelectedTextStore = defineStore(
    "useSelectedTextStore",
    () => {
        const text = ref("")

        return {text}
    })