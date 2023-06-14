<template>
    <article class="row">
        <div class="project-wrapper__text">
            <h3 class="project-wrapper__text-title">{{ project.name }}</h3>
            <p class="project-wrapper__text-info">
                {{project.description}}
            </p>
            <div class="project-wrapper__text-btns">
                <a :href="project.gitUrl" target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--hero cta-btn--projects">See
                    Live</a>
                <a :href="project.gitUrl" target="_blank" class="cta-btn text-color-main">Source Code</a>
            </div>
        </div>

        <div class="project-wrapper__image">
            <router-link :to="{name: 'project', params: {slug: project.slug}}" rel="noopener noreferrer">
                <div class="thumbnail rounded">
                    <img :src="rndmImg" class="img-fluid" alt="Project Image" width="1366" height="767" />
                </div>
            </router-link>
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
    }
}
</script>
  
<style lang="scss" scoped></style>