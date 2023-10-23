<template>
  <div class="header">
    <div @click="NAV_TOGGLE()" class="nav__toggle" id="nav-toggle">
      <font-awesome-icon icon="fa-solid fa-bars" />
    </div>
    <aside :class="{ 'show-sidebar': navToggle }" class="sidebar" id="sidebar">
      <nav class="nav">
        <div class="nav__logo">
          <a href="index.html" class="nav__logo-text">A</a>
        </div>

        <div class="nav__menu">
          <div class="menu">
            <ul class="nav__list">
              <li class="nav__item">
                <router-link
                  @click="closeNave"
                  class="nav__link"
                  exact-active-class="active-link"
                  to="/"
                  >Home</router-link
                >
              </li>
              <li class="nav__item">
                <router-link
                  @click="closeNave"
                  class="nav__link"
                  exact-active-class="active-link"
                  :to="{ name: 'about' }"
                  >About</router-link
                >
              </li>
              <li class="nav__item">
                <router-link
                  @click="closeNave"
                  class="nav__link"
                  exact-active-class="active-link"
                  to="/skills"
                  >Skills</router-link
                >
              </li>
              <li class="nav__item">
                <router-link
                  @click="closeNave"
                  class="nav__link"
                  exact-active-class="active-link"
                  to="/work"
                  >Work</router-link
                >
              </li>
              <li class="nav__item">
                <router-link
                  @click="closeNave"
                  class="nav__link"
                  exact-active-class="active-link"
                  to="/contact"
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- <div @click="TOGGLE_SHARE()" class="btn__share">
          <font-awesome-icon
            icon="fa-solid fa-share-nodes"
            style="color: #e1094a; font-size: 1.8rem"
          />
        </div> -->
        <div @click="NAV_TOGGLE()" class="nav__close" id="nav-close">
          <font-awesome-icon icon="fa-solid fa-xmark" style="color: #e1094a" />
        </div>
      </nav>
    </aside>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations(['NAV_TOGGLE']),
    closeNave() {
      this.$store.state.navToggle = false
    }
  },
  computed: {
    ...mapState(['navToggle'])
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  width: 100px;
  height: 100vh;
  background-color: var(--body-color);
  border-right: 1px solid var(--box-color);
  transition: 0.5s;
}

.nav__logo {
  position: absolute;
  left: 0;
  right: 0;
  top: 1.8rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--skin-color);
  box-shadow: 0px 0px 16px 2px #e1094a;
  text-align: center;
  margin: auto;
}
.nav__logo-text {
  font-size: 1.125rem;
  color: var(--title-color);
  font-weight: var(--font-bold);
  line-height: 40px;
}
.nav__menu {
  position: fixed;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: left top;
  width: 100vh;
}
.menu {
  display: flex;
}
.nav__list {
  display: flex;
  flex-direction: row-reverse;
  margin: -2px auto 0 auto;
}

.nav__link {
  float: right;
  height: 100%;
  line-height: 100px;
  padding: 0 1rem;
  color: var(--title-color);
  font-weight: var(--font-meidum);
  position: relative;
  transition: 0.4s;
}
.btn__share {
  position: absolute;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  text-align: center;
  cursor: pointer;
}

.nav__toggle {
  height: 32px;
  width: 36px;
  cursor: pointer;
  position: fixed;
  right: 2rem;
  top: 1rem;
  font-size: 1.2rem;
  border-radius: 0.25rem;
  background-color: var(--skin-color);
  color: var(--title-color);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 5;
}
.nav__close {
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 2rem;
  cursor: pointer;
  display: none;
}

/* Active link */
.nav__link.active-link,
.nav__link:hover {
  color: var(--skin-color);
}
.nav__link.active-link::after,
.nav__link:hover::after {
  position: absolute;
  content: '';
  width: 6px;
  height: 6px;
  background-color: var(--skin-color);
  border-radius: 50%;
  bottom: 1.8rem;
  left: 0;
  right: 0;
  margin: auto;
}
@media screen and (max-width: 1024px) {
  .sidebar {
    width: 100%;
    z-index: 999;
    transform: translateX(-100%);
  }

  .show-sidebar {
    transform: translateX(0);
  }

  .nav__logo,
  .btn__share {
    display: none;
  }

  .nav__menu {
    height: 100%;
    width: 100%;
    transform: rotate(0deg) translateX(0);
    display: flex;
    justify-content: center;
  }

  .nav__list {
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .nav__link {
    padding: 1rem 0;
    line-height: 1.5rem;
  }

  .nav__link.active-link::after,
  .nav__link:hover::after {
    bottom: 0;
  }

  .nav__close {
    display: block;
  }

  .nav__toggle {
    display: flex;
  }
}
@media screen and (max-width: 576px) {
  .nav__toggle {
    right: initial;
    left: 1.5rem;
  }
}
</style>
