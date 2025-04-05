<template>
  <section class="contact section_flex" id="contact">
    <h2 data-heading="Get in touch ProtFolio" class="section__title">Contact</h2>

    <div class="contact__container container grid">
      <div class="contact__contact">
        <div class="contact__info">
          <CardParallaxDepth>
            <div class="contact__card">
              <font-awesome-icon icon="fa-brands fa-linkedin" class="contact__card-icon" />

              <h3 class="contact__card-title">Linkedin</h3>
              <span class="contact__card-data">AbdAlmalikJakmery</span>
              <a
                class="contact__button"
                target="_blank"
                href="https:/www.linkedin.com/in/abd-almalik-jakmery-57a2b0192"
              >
                Write me
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact__button-icon" />
              </a>
            </div>
          </CardParallaxDepth>
          <CardParallaxDepth>
            <div class="contact__card">
              <font-awesome-icon icon="fa-solid fa-envelope" class="contact__card-icon" />
              <h3 class="contact__card-title">Email</h3>
              <span class="contact__card-data">Abd.almalik96@gmail.com</span>
              <a class="contact__button" href="mailto:Abd.almalik96@gmail.com">
                Write me
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact__button-icon" />
              </a>
            </div>
          </CardParallaxDepth>

          <CardParallaxDepth>
            <div class="contact__card">
              <font-awesome-icon icon="fa-brands fa-whatsapp" class="contact__card-icon" />

              <h3 class="contact__card-title">Whatsapp</h3>
              <span class="contact__card-data">+963 967 287 756</span>
              <a class="contact__button" target="_blank" href="https://wa.me/+963967287756">
                Write me
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact__button-icon" />
              </a>
            </div>
          </CardParallaxDepth>
          <CardParallaxDepth>
            <div class="contact__card">
              <font-awesome-icon
                icon="fa-brands fa-facebook-messenger"
                class="contact__card-icon"
              />

              <h3 class="contact__card-title">messenger</h3>
              <span class="contact__card-data">AbdAlmalikJakmery</span>
              <a class="contact__button" target="_blank" href="https://m.me/AbdAlmalikJakmery">
                Write me
                <font-awesome-icon icon="fa-solid fa-arrow-right" class="contact__button-icon" />
              </a>
            </div>
          </CardParallaxDepth>
        </div>
      </div>
      <!-- <div class="contact__contact">
        <form action="" class="contact__form">
          <div class="input__container">
            <input type="text" class="input" @focus="handleFukcs" @blur="handleBlur" />
            <label for="">Username</label>
            <span>username</span>
          </div>

          <div class="input__container">
            <input type="email" class="input" @focus="handleFukcs" @blur="handleBlur" />
            <label for="">Email</label>
            <span>Email</span>
          </div>

          <div class="input__container">
            <input type="tel" class="input" @focus="handleFukcs" @blur="handleBlur" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>

          <div class="input__container textarea">
            <textarea
              name=""
              id=""
              class="input"
              @focus="handleFukcs"
              @blur="handleBlur"
            ></textarea>
            <label for="">Massage</label>
            <span>Massage</span>
          </div>
          <button type="submit" class="button">
            <img src="@/assets/icons/paper-plane.svg" alt="" />
            Send Message
          </button>
        </form>
      </div> -->
    </div>
  </section>
</template>

<script>
import CardParallaxDepth from '../components/CardParallaxDepth.vue'
export default {
  components: {
    CardParallaxDepth
  },
  methods: {
    handleBlur(event) {
      if (event.target.value == '') {
        event.target.parentNode.classList.remove('focus')
      }
    },
    handleFukcs(event) {
      event.target.parentNode.classList.add('focus')
    }
  }
}
</script>
<style scoped>
/* ============== contact section  ================ */
.contact__container {
  grid-template-columns: 500px;
  column-gap: 3rem;
  justify-content: center;
  align-items: center;
}

.contact__info {
  display: grid;
  row-gap: 1rem; /*??????????????????*/
}

.contact__card {
  background-color: var(--box-color);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
}
.contact__card-icon {
  font-size: 1.8rem;
  margin-bottom: var(--mb-0-25);
}

.contact__card-title,
.contact__card-data {
  font-size: var(--saml-font-size);
}

.contact__card-title {
  font-weight: var(--font-meidum);
}

.contact__card-data {
  display: block;
  margin-bottom: var(--mb-0-75);
}

.contact__button {
  color: var(--skin-color);
  font-size: var(--saml-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
  cursor: pointer;
}

.contact__button-icon {
  font-size: 0.9rem;
  transition: 0.3s;
}

.contact__button:hover .contact__button-icon {
  transform: translateX(0.25rem);
}

.input__container {
  position: relative;
  margin-top: 0.1rem;
  margin-bottom: 1.9rem;
}

.input {
  width: 100%;
  border: 2px solid var(--text-color);
  background-color: transparent; /*?????????????????/*/
  padding: 0.6rem 1.2rem;
  color: var(--title-color);
  font-weight: var(--font-meidum);
  font-size: var(--normal-font-size);
  letter-spacing: 0.5px;
  outline: none;
  border-radius: 0.5rem;
  transition: 0.3s;
}
.textarea .input {
  padding: 0.8rem 1.2rem;
  min-height: 140px;
  border-radius: 0.5rem;
  resize: none; /*?????????????????/*/
}

.input__container label {
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  padding: 0 0.4rem;
  color: var(--text-color);
  font-size: 1rem;
  font-weight: var(--font-meidum);
  pointer-events: none; /*?????????????????/*/
  z-index: 2;
  transition: 0.5s;
}

.input__container.textarea label {
  top: 1rem;
  transform: translateY(0);
}

.input__container span {
  position: absolute;
  top: 0;
  left: 25px;
  transform: translateY(-50%);
  font-size: var(--saml-font-size);
  padding: 0 0.4rem;
  pointer-events: none;
  z-index: var(--z-fixed);
  color: transparent;
}

.input__container span::before,
.input__container span::after {
  content: '';
  position: absolute;
  width: 10%;
  height: 5px;
  opacity: 0;
  background-color: var(--body-color);
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
}

.input__container span::before {
  left: 50%;
}

.input__container span::after {
  right: 50%;
}

.input__container.focus label {
  top: 0;
  transform: translateY(-50%);
  left: 25px;
  font-size: var(--smaller-font-size);
}

.input__container.focus span::after,
.input__container.focus span::before {
  width: 50%;
  opacity: 1;
}
@media screen and (max-width: 768px) {
  .section__title {
    margin-bottom: var(--mb-0-5);
  }
  .input__container {
    margin-bottom: 0.5rem;
  }
  .contact__container {
    grid-template-columns: 360px;
    row-gap: 0.5rem;
  }
  .contact__info {
    row-gap: 0.5rem;
  }
  .contact__card {
    padding: 0;
  }
  .input {
    font-size: var(--saml-font-size);
  }
  .textarea .input {
    min-height: 100px;
  }
}
@media screen and (max-width: 576px) {
  .contact__container,
  .work__container {
    grid-template-columns: 320px;
  }
}
@media screen and (max-width: 350px) {
  .contact__container {
    grid-template-columns: 1fr;
  }
}
</style>
