<template>
  <div>
    <AppHeader></AppHeader>
    <main>
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="animate__animated animate__fadeIn"
          leave-active-class="animate__animated animate__fadeOut"
          mode="out-in"
        >
          <Component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'

export default {
  components: {
    AppHeader
  }
}
</script>
