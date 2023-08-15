<template>
    <div class="work__card">
        <div class="work__image">
          <img :src="card.img" alt="" class="work__img" />
        </div>

        <div class="work__text">
          <h3 class="work__title">{{ card.title }}</h3>
          <p class="work__technologies">
   
            <span v-for="(technologie,index)  in card.technologies" :class="technologie" :key="index">{{ technologie.toUpperCase() + ' ' }}</span>
          </p>
          <!-- <span class="work__button"
            >Demo
            <i class="uil uil-arrow-right work__button-icon"></i>
          </span> -->
        </div>

        <workModal/>
      </div>
</template>

<script>
export default {
    props : {
        card :{
            type :Object,
        }
    },
}
</script>