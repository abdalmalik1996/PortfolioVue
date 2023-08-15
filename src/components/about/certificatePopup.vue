<template>
  <div class="certificate__popup">
    <div class="certificate__popup-inner">
      <span class="certificate__popup-close" @click="colsecert"><i class="uil uil-times"></i></span>
      <h1 class="certificate__popup-title">{{ this.cretData.title }}</h1>
      <img :src="this.cretData.img" alt="" class="certificate__img__popup" />
      <p class="description__popup">
        Verify this certification at
        <a class="link__popup" target="_blank" :href="this.cretData.link">{{
          this.cretData.link
        }}</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  methods: {
    colsecert() {
      this.$store.state.certToggle = false
    }
  },
  computed: {
    ...mapState(['certToggle', 'cretData'])
  }
}
</script>
<style>
.certificate__popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
  transition: 0.3s;
}
.certificate__popup.open {
  opacity: 1;
  visibility: visible;
}

.certificate__img__popup {
  width: 600px;
  border-radius: 1rem;
}
.certificate__popup-inner {
  background-color: rgba(39, 38, 38, 0.986);
  width: 900px;
  border-radius: 0.5rem;
  padding: 2rem;
  position: relative;
  text-align: center;
}
.certificate__popup-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--skin-color);
  cursor: pointer;
}
.description__popup {
  color: var(--text-color);
}
.certificate__popup-title {
  font-size: var(--h3-font-size);
  color: var(--title-color);
  margin-bottom: var(--mb-2);
}
.link__popup {
  color: var(--text-color);
  transition: 0.5s;
  display: block;
}
.link__popup:hover {
  color: var(--skin-color);
}
</style>
