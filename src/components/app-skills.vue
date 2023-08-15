<template>
  <section class="skills section_flex" id="skills">
    <h2 data-heading="My Abilities" class="section__title">My Experience</h2>

    <div class="skills__container container grid">
      <div class="skill__tabs">
        <div
          class="skills__header"
          :class="dataTarget === 'FrontEnd' ? 'skills__active' : ''"
          @click="dataTarget = 'FrontEnd'"
        >
          <i class="uil uil-brackets-curly skills__icon"></i>
          <div>
            <h1 class="skills__title">Frontend developer</h1>
            <span class="skills__subtitle">More than 4 years</span>
          </div>
          <i class="uil uil-angle-down skills-arrow"></i>
        </div>

        <div
          class="skills__header"
          :class="dataTarget === 'Design' ? 'skills__active' : ''"
          @click="dataTarget = 'Design'"
        >
          <i class="uil uil-swatchbook skills__icon"></i>

          <div>
            <h1 class="skills__title">UI / UX design</h1>
            <span class="skills__subtitle">More than 5 yers</span>
          </div>
          <i class="uil uil-angle-down skills-arrow"></i>
        </div>

        <div
          class="skills__header"
          :class="dataTarget === 'BacEnd' ? 'skills__active' : ''"
          @click="dataTarget = 'BacEnd'"
        >
          <i class="uil uil-server-network skills__icon"></i>
          <div>
            <h1 class="skills__title">Development Tools</h1>
            <span class="skills__subtitle">More than 2 years</span>
          </div>
          <i class="uil uil-angle-down skills-arrow"></i>
        </div>
      </div>

      <div class="skills__content">
        <keep-alive>
          <component :is="dataTarget"></component>
        </keep-alive>
      </div>
    </div>
  </section>
</template>

<script>
import FrontEnd from './skills/Skill-frontEnd.vue'
import Design from './skills/skill-design.vue'
import BacEnd from './skills/skill-bacEnd.vue'

export default {
  data() {
    return {
      dataTarget: 'FrontEnd'
    }
  },
  components: {
    FrontEnd,
    Design,
    BacEnd
  }
}
</script>

<style>
/* ====== skills section ====== */
.skills__container {
  grid-template-columns: 360px 320px;
  column-gap: 3rem;
  justify-content: center;
}
.skills__header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.skills__header:not(:last-child) {
  margin-bottom: var(--mb-2-5);
}

.skills__icon,
.skills-arrow {
  font-size: 2rem;
  color: var(--skin-color);
}

.skills__icon {
  margin-right: var(--mb-2-5);
}

.skills__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-meidum);
}

.skills__subtitle {
  font-size: var(--saml-font-size);
}

.skills-arrow {
  margin-left: auto;
}

.skills__active .skills-arrow {
  transform: rotate(-90deg);
  transition: 0.3s;
}

.skills__list {
  row-gap: 1.8rem;
}

.skills__titles {
  display: flex;
  justify-content: space-between;
  margin: var(--mb-0-5);
}

.skills__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-meidum);
}

.skills__bar,
.skills__perecentage {
  height: 5px;
  border-radius: 0.25rem;
}
.skills__bar {
  background-color: var(--box-color);
}

.skills__perecentage {
  display: flex;
  background-color: var(--skin-color);
}
.skills__content {
  height: 310.391px;
}
@media screen and (max-width: 1024px) {
  .skills__container {
    grid-template-columns: 340px 300px;
  }

  .skills__list {
    row-gap: 1.7rem;
  }
}
@media screen and (max-width: 768px) {
  .skills__container {
    grid-template-columns: 300px;
    row-gap: 3rem;
  }
}
@media screen and (max-width: 350px) {
  .skills__container {
    grid-template-columns: 1fr;
  }
  .skills__title {
    font-size: var(--normal-font-size);
  }
  .skills__container {
    grid-template-columns: repeat(1, 250px);
  }
}
</style>
