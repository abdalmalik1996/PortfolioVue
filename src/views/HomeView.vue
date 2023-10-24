<template>
  <section class="home" id="home">
    <div class="home__container container grid">
      <!-- <div class="home__social">
        <span class="home__social-follow">Follow ME</span>
        <div class="home__social-links">
          <a href="https://www.facebook.com" target="_blank" class="home__social-link">
            <i class="uil uil-facebook-f facebook"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" class="home__social-link">
            <i class="uil uil-instagram instagram"></i>
          </a>
        </div>
      </div> -->

      <div class="home__data">
        <h1 class="home__title">{{ title }}</h1>
        <p class="home__subtitle">{{ subtitle }}</p>
        <p class="home__description">{{ description }}</p>
        <router-link class="animate__animated animate__bounce button" to="about" v-if="showButton">
          <font-awesome-icon icon="fa-solid fa-user" style="font-size: 1.25rem" />
          More About Me
        </router-link>
      </div>
      <div class="my__info">
        <a class="info__item messenger" target="_blank" href="https://m.me/AbdAlmalikJakmery">
          <font-awesome-icon icon="fa-brands fa-facebook-messenger" class="info__icon" />

          <div>
            <h4 class="info__title">Messenger</h4>
            <span class="info__subtitle">AbdAlmalikJakmery</span>
          </div>
        </a>
        <a target="_blank" href="https://wa.me/+963967287756" class="info__item whatsapp">
          <font-awesome-icon icon="fa-brands fa-whatsapp" class="info__icon whatsapp" />
          <div>
            <h4 class="info__title">Whatsapp</h4>
            <span class="info__subtitle">+963-967287756</span>
          </div>
        </a>
        <a target="_blank" href="mailto:Abd.almalik96@gmail.com" class="info__item email">
          <font-awesome-icon class="info__icon" icon="fa-solid fa-envelope" />

          <div>
            <h4 class="info__title">Email</h4>
            <span class="info__subtitle">Abd.Almlaik@gmail.com</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import 'animate.css'

export default {
  data() {
    return {
      showButton: false,
      title: '',
      subtitle: '',
      description: ''
    }
  },
  mounted() {
    this.animateText()
  },
  methods: {
    async animateText() {
      const titleText = 'Hi, I am Abd Almalek'
      const subtitleText = 'Designer, Frontend developer'
      const descriptionText = 'I design and code beautifully simple things, and love what I do.'

      await this.animateCharacters(titleText, 'title')
      await this.animateCharacters(subtitleText, 'subtitle')
      await this.animateCharacters(descriptionText, 'description')

      this.showButton = true
    },
    async animateCharacters(text, prop) {
      let animatedText = ''

      for (let i = 0; i < text.length; i++) {
        animatedText += text[i]
        this[prop] = animatedText
        await this.delay(100) // تأخير قصير بين كل حرف
      }
    },
    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms))
    },
    handleButtonClick() {
      console.log('Button clicked!')
      // أداء أي إجراءات إضافية هنا
    }
  }
}
</script>

<style scoped>
.home {
  background: url('../assets/images/home-1-2.png');
  background-size: cover;
  background-position: center center;
  height: 100vh;
}
.home__container {
  position: relative;
  height: 100%;
  align-items: center;
}
.home__social {
  position: absolute;
  top: 1.8rem;
  left: 0;
  display: flex;
  align-items: center;
  column-gap: 3.5rem; /*?????????*/
}
.home__social-follow {
  font-weight: var(--font-meidum);
  position: relative;
}
.home__social-follow::after {
  content: '';
  position: absolute;
  width: 1rem;
  height: 2px;
  background-color: var(--text-color);
  right: -35%;
  top: 50%;
}
.home__social-links {
  display: inline-flex;
  column-gap: 1rem;
}

.home__social-link {
  font-size: 1.08rem;
  color: var(--text-color);
  transition: 0.3s;
}
.home__social-link:hover {
  transform: translateY(0.25rem); /*????????? */
}

.home__title {
  font-size: var(--biggest-font-size);
}

.home__subtitle {
  font-size: var(--h3-font-size);
  font-weight: var(--font-meidum);
  margin-bottom: var(--mb-0-75);
}

.home__description {
  max-width: 450px;
  margin-bottom: var(--mb-2);
}

.my__info {
  display: flex;
  column-gap: 1.8rem; /*????????? */
  position: absolute;
  left: 0;
  bottom: 1.8rem;
}

.info__item {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
}

.info__title,
.info__subtitle {
  font-size: var(--saml-font-size);
}

.info__title {
  font-weight: var(--font-meidum);
}
.info__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-75);
}
@media screen and (max-width: 576px) {
  .home {
    background: none;
    /* height: initial; */
    align-items: initial;
    padding: 5rem 0 2rem;
  }
  .home__container {
    grid-template-columns: repeat(2, 1fr);
  }
  .home__data {
    width: 350px;
    line-height: 2;
  }

  .home__img {
    display: block;
    width: 150px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .my__info {
    display: none;
  }
  .home__social-link {
    font-size: var(--normal-font-size);
  }

  .home__social {
    left: initial;
    right: -1rem;
    top: -1.5rem;
    flex-direction: column;
    row-gap: 3.5rem;
  }
  .home__social-follow {
    font-size: var(--smaller-font-size);
    transform: rotate(90deg);
  }
  .home__social-links {
    flex-direction: column;
    row-gap: 0.25rem;
  }
  .button {
    padding: 0.25rem 0.9rem;
  }
}
@media screen and (max-width: 350px) {
  .home__img {
    width: 200px;
    object-fit: contain;
  }
  .home__title {
    font-size: var(--h1-font-size);
  }
  .home__subtitle {
    font-size: var(--normal-font-size);
  }
}
@media (max-width: 300px) {
  .home__data {
    width: 260px;
    padding-left: none;
  }
}
</style>
