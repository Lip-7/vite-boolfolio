<template>
    <section id="projects">
        <div class="container">
            <div class="project-wrapper">
                <h2 class="section-title dark-blue-text">Projects</h2>
                <SingleProjectComponent v-for="(proj, index) in projects" :project="proj" :index="index"/>
            </div>
        </div>
        <PaginationComponent @nextPage="changePage('+')" @prevPage="changePage('-')" v-if="queryLoaded" :pageData="queryData" />
    </section>
</template>
  
<script>
import { store } from '../../../store/store';
import axios from 'axios';
import SingleProjectComponent from './SingleProjectComponent.vue';
import PaginationComponent from './PaginationComponent.vue';
export default {
    name: 'ProjectsComponent',
    data() {
        return {
            apiUrl: 'http://127.0.0.1:8000/api/',
            projects: null,
            queryData: null,
            queryLoaded: false,
            store,
        }
    },
    watch: {
        'store.currentPage'(newCurrentPage) {
            this.getProjects(newCurrentPage);
        },
    },
    methods: {
        getProjects(page) {
            axios.get(this.apiUrl + 'projects', {
                params: {
                    page,
                }
            }).then((res) => {
                this.queryData = res.data;
                this.projects = res.data.results.data;
                store.currentPage = res.data.results.current_page;
                store.lastPage = res.data.results.last_page;
                this.queryLoaded = true;
            });
        },
        changePage(prop) {
            console.log(prop);
            store.currentPage = (prop === '+') ?
                (store.currentPage + 1) :
                ((prop === '-') ?
                    (store.currentPage - 1) :
                    prop
                );

            //this.getProjects(this.currentPage);
        }
    },
    components: {
    SingleProjectComponent,
        PaginationComponent,
},
    mounted() {
        this.getProjects(store.currentPage);
    }
}
</script>
  
<style lang="scss" scoped></style>