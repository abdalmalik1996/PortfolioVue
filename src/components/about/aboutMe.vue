<template>
  <div class="about_container container grid">
    <div class="about__img">
      <img style="border-radius: 50px" src="@/assets/images/about.jpg" />
    </div>

    <div class="about__data">
      <h3 class="about__heading">Abd Almalek Jakmery</h3>
      <p class="about__description">
        I'm a Front-End Developer and Freelancer specializing, Vue.js, Vuetify, and TypeScript. I
        have a strong track record of transforming Figma designs into stunning digital experiences
        and building seamless, high-performance admin dashboards. My focus is always on delivering
        exceptional user experiences with clean, efficient, and scalable code. 🚀
      </p>

      <div class="about__info grid">
        <CardParallaxDepth>
          <div class="about__box">
            <font-awesome-icon icon="fa-solid fa-award" class="about__icon" />
            <h3 class="about__title">Experience</h3>
            <span class="about__subtitle"> 2 years</span>
          </div>
        </CardParallaxDepth>
        <CardParallaxDepth>
          <div class="about__box">
            <font-awesome-icon icon="fa-solid fa-suitcase" class="about__icon" />
            <h3 class="about__title">Compleated</h3>
            <span class="about__subtitle">{{ work.length }} projects </span>
          </div>
        </CardParallaxDepth>
        <CardParallaxDepth>
          <div class="about__box">
            <font-awesome-icon icon="fa-solid fa-headphones" class="about__icon" />
            <h3 class="about__title">Support</h3>
            <span class="about__subtitle">Online 24/24</span>
          </div>
        </CardParallaxDepth>
      </div>
      <router-link class="button" to="contact">
        <img src="@/assets/icons/paper-plane.svg" alt="" />
        contact Me
      </router-link>
    </div>
  </div>
</template>
<script>
import CardParallaxDepth from '../CardParallaxDepth.vue'

export default {
  data() {
    return {
      work: this.$store.state.workData
    }
  },
  components: {
    CardParallaxDepth
  }
}
</script>

<style>
.about_container {
  grid-template-columns: repeat(2, 1fr); /*???????????????????????????????????????????????? */
  column-gap: 4rem;
  align-items: center;
}

.about__img {
  width: 480px;
  border-radius: 0.75rem;
  justify-self: center; /*????????? */
}
.about__heading {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-50);
}

.about__description {
  text-align: left;
  margin-bottom: var(--mb-0-75);
  line-height: 1.5;
  font-size: var(--normal-font-size);
}

.about__info {
  grid-template-columns: repeat(3, 140px);
  column-gap: 0.5rem;
  margin-bottom: var(--mb-3);
}
.about__box {
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 1rem;
  background-color: var(--box-color);
}
.about__icon {
  font-size: 1.5rem;
  color: var(--skin-color);
  margin-bottom: var(--mb-0-75);
}
.about__title {
  font-size: var(--saml-font-size);
}

.about__subtitle {
  font-size: var(--smaller-font-size);
}
</style>
