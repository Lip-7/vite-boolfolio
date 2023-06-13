<template>
    <section id="projects">
        <div class="container">
            <div class="project-wrapper">
                <h2 class="section-title dark-blue-text">Projects</h2>

                <!-- Each .row is a project -->
                <article class="row">
                    <div class="project-wrapper__text">
                        <h3 class="project-wrapper__text-title">Project Title</h3>
                        <p class="project-wrapper__text-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deleniti voluptas, sit nam perspiciatis tempore aspernatur ullam
                            necessitatibus impedit repellendus vero sed ipsa eos beatae ab
                            sint saepe nostrum! Enim, perferendis.
                        </p>
                        <div class="project-wrapper__text-btns">
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                class="cta-btn cta-btn--hero cta-btn--projects">See Live</a>
                            <a href="#" target="_blank" class="cta-btn text-color-main">Source Code</a>
                        </div>
                    </div>

                    <div class="project-wrapper__image">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <div class="thumbnail rounded">
                                <img src="./assets/project.png" class="img-fluid" alt="Project Image" width="1366"
                                    height="767" />
                            </div>
                        </a>
                    </div>
                </article>
                <!-- /END Project -->

                <!-- Each .row is a project -->
                <article class="row">
                    <div class="project-wrapper__text">
                        <h3 class="project-wrapper__text-title">Project Title</h3>
                        <p class="project-wrapper__text-info">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Deleniti voluptas, sit nam perspiciatis tempore aspernatur ullam
                            necessitatibus impedit repellendus vero sed ipsa eos beatae ab
                            sint saepe nostrum! Enim, perferendis.
                        </p>
                        <div class="project-wrapper__text-btns">
                            <a href="#" target="_blank" rel="noopener noreferrer"
                                class="cta-btn cta-btn--hero cta-btn--projects">See Live</a>
                            <a href="#" target="_blank" class="cta-btn text-color-main">Source Code</a>
                        </div>
                    </div>

                    <div class="project-wrapper__image">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <div class="thumbnail rounded">
                                <img src="./assets/project.png" class="img-fluid" alt="Project Image" width="1366"
                                    height="767" />
                            </div>
                        </a>
                    </div>
                </article>
                <!-- /END Project -->

            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'ProjectsComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    mounted() {

    }
}
</script>
  
<style lang="scss" scoped></style>