<template>
    <main>
        <HeroComponent />
        <AboutComponent />
        <ProjectsComponent />
    </main>
</template>
  
<script>
import ProjectsComponent from './MainComponents/ProjectsComponents.vue'
import AboutComponent from './MainComponents/AboutComponent.vue';
import HeroComponent from './MainComponents/HeroComponent.vue';
export default {
    name: 'MainComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        HeroComponent,
        AboutComponent,
        ProjectsComponent,

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>