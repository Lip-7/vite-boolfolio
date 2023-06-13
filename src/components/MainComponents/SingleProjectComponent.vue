<template>
    <article class="row">
        <div class="project-wrapper__text">
            <h3 class="project-wrapper__text-title">{{ project.name }}</h3>
            <p class="project-wrapper__text-info">
                {{project.description}}
            </p>
            <div class="project-wrapper__text-btns">
                <a href="#" target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--hero cta-btn--projects">See
                    Live</a>
                <a :href="project.gitUrl" target="_blank" class="cta-btn text-color-main">Source Code</a>
            </div>
        </div>

        <div class="project-wrapper__image">
            <a href="#" target="_blank" rel="noopener noreferrer">
                <div class="thumbnail rounded">
                    <img :src="rndmImg" class="img-fluid" alt="Project Image" width="1366" height="767" />
                </div>
            </a>
        </div>
    </article>
</template>
  
<script>
export default {
    name: 'SingleProjectComponent',
    data() {
        return {
            rndmImg: 'https://picsum.photos/1920/108' + this.index,
        }
    },
    methods: {

    },
    components: {

    },
    props: ['project', 'index'],
    mounted() {
        console.log(this.project);
    }
}
</script>
  
<style lang="scss" scoped></style>