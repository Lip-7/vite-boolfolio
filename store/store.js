import { reactive } from "vue";

export const store = reactive({
    currentPage: 1,
    lastPage: null,
    apiUrl: 'http://127.0.0.1:8000/api/',
  
});