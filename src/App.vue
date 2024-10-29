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
      <canvasFluid></canvasFluid>
    </main>
  </div>
</template>

<script>
import AppHeader from './components/app-header.vue'
import canvasFluid from './components/canvasFluid.vue'
export default {
  components: {
    AppHeader,
    canvasFluid
  }
}
</script>
