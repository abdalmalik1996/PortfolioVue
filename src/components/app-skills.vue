<template>
  <section class="skills section_flex" id="skills">
    <h2 data-heading="My Abilities" class="section__title">My Experience</h2>

    <div class="skills__container container grid">
      <div class="skill__tabs">
        <div
          class="skills__header"
          :class="skillsTarget.name === 'frontEnd' ? 'skills__active' : ''"
          @click="this.SKILL_DATA('frontEnd')"
        >
          <img class="skills__icon" src="../assets/icons/brackets-curly.svg" alt="" />
          <div>
            <h1 class="skills__title">Frontend developer</h1>
            <span class="skills__subtitle">More than 4 years</span>
          </div>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="skills-arrow" />
        </div>
        <div
          class="skills__header"
          :class="skillsTarget.name === 'design' ? 'skills__active' : ''"
          @click="this.SKILL_DATA('design')"
        >
          <font-awesome-icon icon="fa-solid fa-swatchbook" class="skills__icon" />
          <div>
            <h1 class="skills__title">UI / UX design</h1>
            <span class="skills__subtitle">More than 5 yers</span>
          </div>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="skills-arrow" />
        </div>
        <div
          class="skills__header"
          :class="skillsTarget.name === 'tool' ? 'skills__active' : ''"
          @click="this.SKILL_DATA('tool')"
        >
          <font-awesome-icon icon="fa-solid fa-toolbox" class="skills__icon" />
          <div>
            <h1 class="skills__title">Development Tools</h1>
            <span class="skills__subtitle">More than 2 years</span>
          </div>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="skills-arrow" />
        </div>
      </div>
      <div class="skills__content">
        <SkillsModal :data="skillsTarget.data" :class="animateClass" />
      </div>
    </div>
  </section>
</template>

<script>
import SkillsModal from './skills/skillsModal.vue'
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      dataTarget: 'frontEnd',
      animateClass: ''
    }
  },
  components: {
    SkillsModal
  },
  methods: {
    ...mapActions(['SKILL_DATA'])
  },
  computed: {
    ...mapState(['skillsTarget'])
  },
  watch: {
    'skillsTarget.data': {
      immediate: true,
      handler(newData, oldData) {
        if (newData !== oldData) {
          this.animateClass = 'animate__animated animate__lightSpeedInRight'
          setTimeout(() => {
            this.animateClass = ''
          }, 1000)
        }
      }
    }
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
  text-transform: capitalize;
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
.skills_icon {
  margin-right: 5px;
}

.slide-enter-active {
  transform: translateY(50px);
  opacity: 1;
  transition: opacity 2;
}
.slide-leave-active {
  transform: translateY(-50px);
  opacity: 0;
  transition: 2s;
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
