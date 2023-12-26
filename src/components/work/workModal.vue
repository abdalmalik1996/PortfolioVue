<template>
  <div class="potfolio__popup">
    <div class="potfolio__popup-inner">
      <div class="potfolio__popup-content grid">
        <span class="potfolio__popup-clase" @click="closeWorkModal"
          ><font-awesome-icon icon="fa-solid fa-xmark"
        /></span>
        <div v-if="data.imgscrol" class="pp__thumbnail-scroll">
          <img :src="data.imgscrol" alt="" class="pottfolio__popup-img_scroll" />
        </div>
        <div v-else class="pp__thumbnail">
          <img :src="data.img" alt="" class="pottfolio__popup-img" />
        </div>
        <div class="pottfolio__popup-info">
          <div class="pottfolio__popup-subtitle"><span></span></div>
          <div class="pottfolio__popup-body">
            <h3 class="details__title">{{ data.title }}</h3>
            <p class="details__description">{{ data.description }}</p>
            <ul class="details__info">
              <!-- <li>created - <span>4 dec 2020</span></li> -->
              <li>
                technologies -
                <span
                  v-for="(technologie, index) in data.technologies"
                  :class="technologie"
                  :key="index"
                  >{{ technologie.toUpperCase() + ' ' }}</span
                >
              </li>
              <!-- <li>Role - <span>frontend</span></li> -->
              <li>
                <a class="work_link" target="_blank" :href="data.link"
                  >view page:
                  <font-awesome-icon icon="fa-solid fa-arrow-right" class="work__button-icon" />
                </a> 
              </li>
              <li>
                <a class="work_link" target="_blank" :href="data.linkgithub"
                  >view github:
                  <font-awesome-icon icon="fa-solid fa-arrow-right" class="work__button-icon" />
                </a> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    data: {
      typeof: Object
    }
  },
  methods: {
    ...mapMutations(['TOGGLE_POPUP']),
    closeWorkModal() {
      this.TOGGLE_POPUP()
    }
  }
}
</script>

<style>
.potfolio__popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  transition: 0.3s;
}

.potfolio__popup.open {
  opacity: 1;
  visibility: visible;
}

.potfolio__popup-inner {
  background-color: var(--box-color);
  width: 900px;
  border-radius: 0.5rem;
  padding: 2.5rem;
  position: relative;
}

.potfolio__popup-content {
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 3rem;
  height: 80vh;
  max-height: 500px;
}

.potfolio__popup-clase {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--skin-color);
  cursor: pointer;
}
.pp__thumbnail {
  width: 100%;
  height: 50%;
}
.pottfolio__popup-img {
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
}
.pottfolio__popup-img_scroll {
  height: auto;
  width: 98%;
}
.pp__thumbnail-scroll {
  height: 50%;
  overflow-y: auto;
}
.pottfolio__popup-subtitle {
  font-size: var(--saml-font-size-font-size);
  margin-bottom: var(--mb-0-25);
}

.details__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-meidum);
  margin-bottom: var(--mb-1);
}

.details__description {
  font-size: var(--saml-font-size);
  margin-bottom: var(--mb-2);
}

.details__info li {
  margin-bottom: var(--mb-0-75);
  text-transform: capitalize; /*????????????????*/
  font-size: var(--saml-font-size);
}

.details__info {
  margin-bottom: 0;
}

.details__info li span {
  font-weight: normal;
}

.details__info li a {
  text-transform: lowercase;
  color: var(--skin-color);
}
@media screen and (max-width: 768px) {
  .potfolio__popup-inner {
    width: 420px;
  }
  .potfolio__popup-content {
    grid-template-columns: 1fr;
    grid-row: 1.6rem;
  }
  .details__title {
    font-size: var(--normal-font-size);
  }
  .potfolio__popup-clase {
    top: 0.5rem;
  }
  .pp__thumbnail {
    height: 100%;
  }

  .pp__thumbnail-scroll,
  .pp__thumbnail {
    min-height: 230px;
  }
}
</style>
