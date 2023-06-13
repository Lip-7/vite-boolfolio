<template>
    <section id="projects">
        <div class="container">
            <div class="project-wrapper">
                <h2 class="section-title dark-blue-text">Projects</h2>
                <SingleProjectComponent v-for="(proj, index) in projects" :project="proj" :index="index"/>

            </div>
        </div>
        <!-- pagination -->

    </section>
</template>
  
<script>
import axios from 'axios';
import SingleProjectComponent from './SingleProjectComponent.vue';
export default {
    name: 'ProjectsComponent',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/',
            currentPage: null,
            lastPage: null,
            projects: null,

        }
    },
    methods: {
        getProjects(page) {
            axios.get(this.apiUrl + 'projects', {
                params: {
                    page,
                }
            }).then((res) => {
                console.log(res.data);
                this.projects = res.data.results.data;

            });
        }

    },
    components: {
    SingleProjectComponent
},
    mounted() {
        this.getProjects();
    }
}
</script>
  
<style lang="scss" scoped></style>