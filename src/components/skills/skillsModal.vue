<template>
  <div class="skills__group">
    <div class="skills__list grid">
      <div v-for="(skill, index) in data" class="skills__data" :key="index">
        <div class="skills__titles">
          <h3 class="skills__name">
            <font-awesome-icon
              v-if="skill.icon"
              :icon="skill.icon"
              class="skills_icon"
              :class="skill.name"
            />
            <img v-if="skill.img" :src="skill.img" alt="" :class="skill.name" />
            {{ skill.name }}
          </h3>
          <span class="skills__number">{{ skill.number }}%</span>
        </div>
        <div class="skills__bar">
          <span class="skills__perecentage" :style="{ width: `${skill.number}%` }"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      typeof: Object,
      required: true
    }
  }
}
</script>
