<template>
  <div class="about_container container grid">
    <img src="@/assets/images/hd.png" alt="" class="about__img" />

    <div class="about__data">
      <h3 class="about__heading">Hi,i'm Abd Almalek Jakmery, Based in Syria</h3>
      <p class="about__description">
        Proficient in utilizing Vue and Vuetify for front-end development, adept at working with
        APIs, and experienced in using Postman for seamless API testing and integration.
      </p>

      <div class="about__info grid">
        <div class="about__box">
          <font-awesome-icon icon="fa-solid fa-award" class="about__icon" />
          <h3 class="about__title">Experience</h3>
          <span class="about__subtitle"> 2 years</span>
        </div>

        <div class="about__box">
          <font-awesome-icon icon="fa-solid fa-suitcase" class="about__icon" />
          <h3 class="about__title">Compleated</h3>
          <span class="about__subtitle">8 projects </span>
        </div>
        <div class="about__box">
          <font-awesome-icon icon="fa-solid fa-headphones" class="about__icon" />
          <h3 class="about__title">Support</h3>
          <span class="about__subtitle">Online 24/7</span>
        </div>
      </div>
      <router-link class="button" to="contact">
        <img src="@/assets/icons/paper-plane.svg" alt="" />
        contact Me
      </router-link>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
.about_container {
  grid-template-columns: repeat(2, 1fr); /*???????????????????????????????????????????????? */
  column-gap: 4rem;
  align-items: center;
}

.about__img {
  width: 480px;
  border-radius: 0.75rem;
  justify-self: center; /*????????? */
}
.about__heading {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-75);
}

.about__description {
  text-align: left;
  margin-bottom: var(--mb-2);
  line-height: 1.5;
}

.about__info {
  grid-template-columns: repeat(3, 140px);
  column-gap: 0.5rem;
  margin-bottom: var(--mb-3);
}
.about__box {
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem 1.25rem;
  background-color: var(--box-color);
}
.about__icon {
  font-size: 1.5rem;
  color: var(--skin-color);
  margin-bottom: var(--mb-0-75);
}
.about__title {
  font-size: var(--saml-font-size);
}

.about__subtitle {
  font-size: var(--smaller-font-size);
}
</style>
