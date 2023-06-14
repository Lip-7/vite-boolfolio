<template>
    <main class="my-10 mt-20 min-h-screen">
        <div v-if="project" class="container mx-auto text-start">
            <h1 class="text-5xl font-bold text-[#272341] text-center mb-11">{{ project.name }}</h1>
            <div class="text-3xl font-bold text-[#272341] my-6">
                <h3 class="text-4xl mb-2">Description</h3>
                <p>{{ project.description }}</p>
            </div>
            <div class="text-3xl font-bold text-[#272341] my-6">
                <h3 class="text-4xl mb-2">Project Url</h3>
                <a :href="project.gitUrl">{{ project.gitUrl }}</a>
            </div>
            <div class="text-3xl font-bold text-[#272341] my-6">
                <h3 class="text-4xl mb-2">Framework</h3>
                <h6>{{ project.framework.name }}</h6>
            </div>
            <div class="text-3xl font-bold text-[#272341] my-6">
                <h3 class="text-4xl mb-4">Technologies</h3>
                <div class="badges flex gap-2">
                    <span v-for="tech in project.technologies" class="text-xl py-2 px-3 rounded-full " :class="store.techColors[tech.slug]"> {{ tech.name }}</span>
                </div>
                <span class="hidden bg-orange-400 bg-violet-400 bg-emerald-400 bg-sky-400 bg-zinc-400 bg-red-400 bg-amber-400 bg-lime-400 bg-fuchsia-400"></span>
            </div>
        </div>
    </main>
</template>
  
<script>
import { store } from '../../store/store';
import axios from 'axios';
export default {
    name: 'ProjectView',
    data() {
        return {
            store,
            slug: this.$route.params.slug,
            project: null,
        }
    },
    methods: {
        getData() {
            axios.get(store.apiUrl + 'projects/' + this.slug).then(res => {
                if (!res.data.success) {
                    return this.$router.push({name: 'notFound'})
                }
                console.log(res.data.results);
                this.project = res.data.results;
                    
                
            });
        }
    },
    components: {

    },
    mounted() {
        this.getData();
    }
}
</script>
  
<style lang="scss" scoped></style>