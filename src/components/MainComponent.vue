<template>
    <main class="home">
        <HeroComponent />
        <AboutComponent />
        <ProjectsComponent />
        <ContactComponent/>
    </main>
</template>
  
<script>
import ProjectsComponent from './MainComponents/ProjectsComponents.vue'
import AboutComponent from './MainComponents/AboutComponent.vue';
import HeroComponent from './MainComponents/HeroComponent.vue';
import ContactComponent from './MainComponents/ContactComponent.vue';
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
    ContactComponent
},
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>