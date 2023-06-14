import { reactive } from "vue";

export const store = reactive({
    currentPage: 1,
    lastPage: null,
    apiUrl: 'http://127.0.0.1:8000/api/',
    techColors: {
        'html': 'bg-orange-400',
        'css': 'bg-violet-400',
        'javascript': 'bg-emerald-400',
        'nodejs': 'bg-sky-400',
        'express': 'bg-zinc-400',
        'mysql': 'bg-red-400',
        'php': 'bg-amber-400',
        'postgresql': 'bg-lime-400',
        'python': 'bg-fuchsia-400',

    },
});