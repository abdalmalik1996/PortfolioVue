<template>
  <section class="work section">
    <h2 data-heading="My ProtFolio" class="section__title">Recent Works</h2>

    <div class="work__container container grid">
      <workCard @click="hanlder(card)" v-for="(card, index) in work" :key="index" :card="card"> </workCard>
      <workModal v-if="this.TogglePopup" :data="this.popupData" />
    </div>
  </section>
</template>

<script>
import { data } from '../data'
import workCard from './work/workCard.vue'
import workModal from './work/workModal.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      work: data.work,
      popupData: null,
      popupAcive: false
    }
  },
  components: {
    workCard,
    workModal
  },
  methods: {
    ...mapMutations(['TOGGLE_POPUP']),
    hanlder(card) {
      this.popupData = card
      this.TOGGLE_POPUP()
    }
  },
  computed: {
    ...mapState(['TogglePopup'])
  }
}
</script>

<style>
/* ======= work section ===== */
.work__container {
  grid-template-columns: repeat(3, calc((33.3333% - 2.5rem) - 0.001rem));
  gap: 1.8rem;
  justify-content: center;
  padding-top: 1rem;
  height: 50vh;
  overflow-y: auto;
}

.work__item {
  cursor: pointer;
  color: var(--title-color);
  padding: 0.25rem 0.75rem;
  font-weight: var(--font-meidum);
  border-radius: 0.5rem;
}

.work__card {
  width: 100%;
  background-color: var(--box-color);
  border-radius: 0.5rem;
  margin: 0 auto;
  cursor: pointer;
}

.work__image {
  height: 250px;
  overflow: hidden;
}
.work__img {
  border-radius: 0.5rem;
  margin-bottom: var(--mb-1);
  height: auto;
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease 0s;
}
.work__img:hover {
  transform: scale(1.05);
}

.work__text {
  padding: 1.25rem;
}

.work__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-meidum);
  margin-bottom: var(--mb-0-5);
  height: 70px;
  overflow: hidden;
}

.work__technologies {
  margin: 20px 0;
  font-size: 18px;
}

.work__button {
  display: flex;
  align-items: cen;
}
.work_link {
  color: var(--skin-color);
  font-size: var(--saml-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  margin-left: 5px;
}

.work__button-icon {
  font-size: 1rem;
  transition: 0.3s;
}

.work_link:hover .work__button-icon {
  transform: translateX(0.25rem);
}

@media screen and (max-width: 1216px) {
  .work__container {
    grid-template-columns: repeat(2, calc((50% - 1.25rem) - 0.001rem));
    gap: 2.5rem;
  }
}
@media screen and (max-width: 1024px) {
  .work__img {
    margin-bottom: var(--mb-0-75);
  }
  .work__title {
    margin-bottom: var(--mb-0-25);
    height: 20px;
  }

  .protofolio__item-details {
    margin-bottom: var(--mb-1-5);
  }
  .details__info li {
    margin-bottom: var(--mb-0-5);
  }
  .details__title {
    margin-bottom: var(--mb-0-75);
  }
}
@media screen and (max-width: 768px) {
  .work__container {
    grid-template-columns: 380px;
  }
}
@media screen and (max-width: 576px) {
  .work__container {
    grid-template-columns: 320px;
  }
}
@media screen and (max-width: 350px) {
  .work__container {
    grid-template-columns: 1fr;
  }
  .work__item {
    font-size: var(--saml-font-size);
  }
  .work__filters {
    column-gap: 0.25rem;
  }
  .work__img {
    object-fit: contain;
  }
}
</style>
