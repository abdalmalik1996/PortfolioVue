import melase from '@/assets/images/melase.png'
import invoice from '@/assets/images/invoice-app.jpg'
import Insure from '@/assets/images/Insure.jpg'
import Insure_scrol from '@/assets/images/Insure-scrol.jpg'
import space_tourism from '@/assets/images/space-tourism.jpg'
import huddle_scrol from '@/assets/images/Huddle-scrol.jpg'
import huddle from '@/assets/images/Huddle.jpg'
import blogr from '@/assets/images/Blogr.jpg'
import blogr_scrol from '@/assets/images/blogr-scrol.jpg'
import clipboard from '@/assets/images/Clipboard.jpg'
import Clipboard_scroll from '@/assets/images/Clipboard-mobile.jpg'

import javascript from '@/assets/images/javascript.png'
import web_design from '@/assets/images/web-design.png'

export const data = {
  work: {
    0: {
      img: melase,
      title: 'mealse search landing page',
      technologies: ['html', 'css', 'js', 'vue', 'api', 'tailwind'],
      description:
        'Our website is a recipe and meal search application built using Vue.js and Vuex. It interacts with a free third-party API and incorporates Tailwind CSS for styling.',
      link: 'https://flourishing-peony-ba006d.netlify.app/'
    },
    1: {
      img: invoice,
      title: 'invoice app landing page',
      technologies: ['html', 'css', 'js', 'vue', 'api'],
      description:
        'This website is a Vue-based billing system that uses Vuex for state management and integrates with Firebase. It allows users to create, manage, and synchronize invoices in real-time.',
      link: 'https://courageous-boba-8865df.netlify.app/'
    },
    // 2: {
    //   img: 'src/assets/images/a.png',
    //   title: 'Login landing page',
    //   technologies: ['html', 'css', 'js', 'vue', 'api'],
    //   description:
    //     'The login page uses Vue.js, Vuex, and Axios for a smooth and effective login experience. Vue.js handles the interactive UI components, Vuex manages the application state, and Axios handles HTTP requests to the server.',
    //   link: ''
    // },

    3: {
      img: Insure,
      imgscrol: Insure_scrol,
      title: 'Insure-landing-page',
      technologies: ['html', 'css'],
      description: 'layout skills with this HTML & CSS only landing page',
      link: 'https://tubular-axolotl-786ac3.netlify.app/'
    },
    4: {
      img: space_tourism,
      title: 'space-tourism',
      technologies: ['html', 'css'],
      description: 'layout skills with this HTML & CSS only landing page',
      link: 'https://cozy-flan-0cbc10.netlify.app/index.html'
    },

    5: {
      img: huddle,
      imgscrol: huddle_scrol,
      title: 'Huddle landing page with curved sections',
      technologies: ['html', 'css', 'js'],
      description:
        'Using pseudo-elements for styling extras and the CSS position property for the sections with curved edges.',
      link: 'https://astonishing-brigadeiros-eadeca.netlify.app/'
    },

    6: {
      img: blogr,
      imgscrol: blogr_scrol,
      title: 'Blogr landing page',
      technologies: ['html', 'css', 'js'],
      description:
        'Flex layout with this landing page challenge. working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.',
      link: 'https://guileless-crepe-bc35e7.netlify.app/'
    },
    7: {
      img: clipboard,
      imgscrol: Clipboard_scroll,
      title: 'Clipboard landing page',
      technologies: ['html', 'css'],
      description: 'Layout skills .This project includes a design for hover states',
      link: 'https://joyful-maamoul-f46ba1.netlify.app/'
    }
    // 7: {
    //   img: '',
    //   title: '',
    //   technologies: [],
    //   description: '',
    //   link: ''
    // }
  },
  certificate: {
    js: {
      title: 'JavaScript Algorithms and Data Structures',
      img: javascript,
      link: 'https://freecodecamp.org/certification/AbdAlmalik/responsive-web-design'
    },
    design: {
      title: 'Responsive Web Design',
      img: web_design,
      link: 'https://freecodecamp.org/certification/AbdAlmalik/responsive-web-design'
    }
  }
}
