<template>
  <div>
    <div class="qualification__continear container grid">
      <div class="education">
        <h3 class="qualification__title"><i class="uil uil-graduation-cap"></i> Education</h3>
        <div class="timeline">
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Computer Technical Institute (Damascus , Syria)</h3>
            <p class="timeline__text">Technical Diploma in Computer Engineering</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2018 - 2021
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Syrian Virtual University (Damascus , Syria)</h3>
            <p class="timeline__text">BAIT | Bachelor in Information Technology - Third year</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              - For now
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Web Site Free Code Camp</h3>
            <p data-content="webdesign" class="timeline__text">
              Responsive Web Design
              <span class="timeline__button" @click="test('design')"
                >View
                <i class="uil uil-arrow-right timeline__button-icon"></i>
              </span>
            </p>
            <p data-content="javascript" class="timeline__text">
              JavaScript Algorithms and Data Structures
              <span class="timeline__button" @click="test('js')"
                >View
                <i class="uil uil-arrow-right timeline__button-icon"></i>
              </span>
            </p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2022
            </span>
          </div>
        </div>
      </div>

      <div class="Courses">
        <h3 class="qualification__title"><i class="uil uil-suitcase"></i>Courses completed</h3>
        <div class="timeline">
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">
              Udemy - Complete Vue 3 Developer 2023 Zero to Mastery (Pinia, Vitest)
            </h3>
            <p class="timeline__text">28h total length</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              For now
            </span>
          </div>

          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">
              Udemy - CSS - The Complete Guide (incl. Flexbox, Grid & Sass)
            </h3>
            <p class="timeline__text">22h 46m total length</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              For now
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)</h3>
            <p class="timeline__text">20h 46m total length</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2023/7
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Elzero Web School Learn JavaScript in Arabic 2021</h3>
            <p class="timeline__text">188 videos</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2021
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Elzero Web School Learn HTML in Arabic 2021</h3>
            <p class="timeline__text">37 videos</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2021
            </span>
          </div>
          <div class="timline__item">
            <div class="circle__dot"></div>
            <h3 class="timline__title">Elzero Web School Learn CSS in Arabic 2021</h3>
            <p class="timeline__text">88 videos</p>
            <span class="timline__date"
              ><i class="uil uil-calendar-alt"></i>
              2021
            </span>
          </div>
        </div>
      </div>
    </div>
    <Certificate v-if="this.certToggle" />
  </div>
</template>

<script>
import Certificate from './certificatePopup.vue'
import {mapActions,mapState} from 'vuex'
export default {
  components: {
    Certificate
  },
  methods :{
    ...mapActions(['CRET_DATA']),
    test(da) {
        this.CRET_DATA(da)
    }
  },
  computed : {
    ...mapState(['certToggle','cretData'])
  }
  
}
</script>

<style>
/* ====== Qualification Section =========== */
.qualification__continear {
  grid-template-columns: repeat(2, 420px);
  column-gap: 3rem;
  justify-content: center;
  height: 574px;
  overflow-y: auto;
  overflow-x: hidden;
}

.qualification__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-meidum);
  margin-bottom: var(--mb-2);
}
.timeline {
  height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
}
.timline__item {
  position: relative;
  padding-left: 2rem;
  margin-bottom: var(--mb-2);
}

.timline__:last-child {
  /*????????????????????*/
  margin-bottom: 0;
}
.timline__item::before {
  content: '';
  width: 1px;
  position: absolute;
  left: 0.48rem;
  top: 0;
  height: 100%;
  background-color: var(--skin-color);
}

.circle__dot {
  position: absolute;
  left: 0;
  top: 0;
  height: 1rem;
  width: 1rem;
  border: 2px solid var(--skin-color);
  border-radius: 50%;
  background-color: var(--skin-color);
  transition: 0.3s;
}
.timline__item:hover .circle__dot {
  background-color: var(--body-color);
}
.timline__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-meidum);
  margin-bottom: var(--mb-0-25);
}
.timeline__text {
  display: flex;
  font-size: var(--smaller-font-size);
  margin-bottom: var(--mb-1);
}

.timline__date {
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
  font-size: var(--saml-font-size);
  color: var(--skin-color);
}
.timeline__button {
  display: inline;
  color: var(--skin-color);
  font-size: var(--saml-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  margin-left: var(--mb-0-75);
}

.timeline__button-icon {
  font-size: 1rem;
  transition: 0.3s;
}

.timeline__button:hover .timeline__button-icon {
  transform: translateX(0.25rem);
}
@media screen and (max-width: 1024px) {
  .qualification__continear {
    grid-template-columns: repeat(2, 290px);
  }
}
@media screen and (max-width: 768px) {
  .qualification__continear {
    grid-template-columns: 290px;
    row-gap: 3rem;
  }
}
@media screen and (max-width: 576px) {
  .education {
    grid-template-columns: repeat(1, 320px);
  }
}

@media screen and (max-width: 350px) {
  .qualification__continear {
    grid-template-columns: 1fr;
  }
}
.education {
  grid-template-columns: repeat(1, 250px);
}
</style>
