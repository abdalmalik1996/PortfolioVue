<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'

const props = defineProps(['dataImage'])

const card = ref(null)
const width = ref(0)
const height = ref(0)
const mouseX = ref(0)
const mouseY = ref(0)
const mouseLeaveDelay = ref(null)

onMounted(async () => {
  await nextTick()
  width.value = card.value.offsetWidth
  height.value = card.value.offsetHeight
})

const mousePX = computed(() => mouseX.value / width.value)
const mousePY = computed(() => mouseY.value / height.value)

const cardStyle = computed(() => {
  const rX = Math.min(Math.max(mousePY.value * -15, -15), 15) // تقييد زاوية الدوران في المحور X
  const rY = Math.min(Math.max(mousePX.value * 15, -15), 15) // تقييد زاوية الدوران في المحور Y
  return {
    transform: `rotateY(${rY}deg) rotateX(${rX}deg)`,
    transition: 'transform 0.1s'
  }
})

const cardBgTransform = computed(() => {
  const tX = mousePX.value * -50
  const tY = mousePY.value * -50
  return {
    transform: `translateX(${tX}px) translateY(${tY}px)`,
    transition: 'transform 0.1s'
  }
})

const cardBgImage = computed(() => ({
  backgroundImage: `url(${props.dataImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'
}))

const handleMouseMove = (e) => {
  mouseX.value = e.pageX - card.value.offsetLeft - width.value / 2
  mouseY.value = e.pageY - card.value.offsetTop - height.value / 2
}

const handleMouseEnter = () => {
  clearTimeout(mouseLeaveDelay.value)
}

const handleMouseLeave = () => {
  mouseLeaveDelay.value = setTimeout(() => {
    mouseX.value = 0
    mouseY.value = 0
  }, 500)
}
</script>

<style scoped>
.card-wrap {
  margin: 10px;
  transform: perspective(1000px);
  transform-style: preserve-3d;
  cursor: pointer;
  border-radius: 14px;
}

.card {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 10px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  box-shadow: 0px 0px 19px 1px rgba(255, 255, 255, 0.075);
}

.card > div {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  backface-visibility: hidden;
}
</style>
