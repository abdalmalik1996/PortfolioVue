<template>
  <section class="about section" id="about">
    <div data-heading="My Intro" class="section__title">
      <button
        class="btn-about"
        :class="dataTarget === 'AboutMe' ? 'active' : ''"
        @click="dataTarget = 'AboutMe'"
      >
        About Me
      </button>
      <button
        class="btn-about"
        :class="dataTarget === 'qualification' ? 'active' : ''"
        @click="dataTarget = 'qualification'"
      >
        qualification
      </button>
    </div>
    <keep-alive>
      <transition
        enter-active-class="animate__animated animate__zoomInDown"
        leave-active-class="animate__animated animate__zoomOutDown"
        mode="out-in"
      >
        <component :is="dataTarget"></component>
      </transition>
    </keep-alive>
  </section>
</template>

<script>
import AboutMe from './about/aboutMe.vue'
import Qualification from './about/about-qualification.vue'
export default {
  data() {
    return {
      dataTarget: 'AboutMe'
    }
  },
  components: {
    AboutMe,
    Qualification
  }
}
</script>

<style>
.btn-about {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;

  background-color: var(--box-color);
  color: var(--title-color);
  padding: 0.75rem 1.4rem;
  font-weight: var(--font-meidum);
  position: relative;
  z-index: 1;
  font-size: var(--normal-font-size);
}
.btn-about.active {
  background-color: var(--skin-color);
  box-shadow: 0px 0px 20px 1px #e1094a;
  z-index: 2;
}

@media screen and (max-width: 1216px) {
  .about_container {
    column-gap: 2.5rem;
  }
  .about__description {
    padding-right: 0;
  }
}
@media screen and (max-width: 1024px) {
  .about_container {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
  .section__title::before {
    margin-bottom: 15px;
  }
  .section__title {
    margin-bottom: var(--mb-1-5);
  }
  .about__img {
    width: 250px;
  }

  .about__data {
    text-align: center;
  }
  .about__info {
    justify-content: center;
  }
  .about__box {
    padding: 0.75rem 0.5rem;
  }

  .about__description {
    padding: 0 4rem;
    text-align: center;
  }
}
@media screen and (max-width: 768px) {
  .about__img {
    width: 200px;
  }
}
@media screen and (max-width: 576px) {
  .about__info {
    grid-template-columns: repeat(3, 1fr);
  }
  .about__description {
    padding: 0;
  }
}

@media screen and (max-width: 350px) {
  .about__info {
    display: none;
  }
  .btn-about,
  .button {
    padding: 0.25rem 0.9rem;
  }
}
</style>
