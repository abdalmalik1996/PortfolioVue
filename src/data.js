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
import form_main from '@/assets/images/form-main.jpg'
import rest_countries from '@/assets/images/rest-countries-api.jpg'

import figma from '@/assets/icons/figma.svg'
import adobeXd from '@/assets/icons/adobeXd.svg'
import tailwind from '@/assets/icons/tailwind.svg'
import nodejs from '@/assets/icons/nodejs.svg'
import vuetify from '@/assets/icons/vuetify.svg'
export const data = {
  work: [
    {
      img: form_main,
      title: 'Multi-step form solution',
      technologies: ['html', 'css', 'js', 'vue', 'Vuetify'],
      description: ' This website  is a out this multi-step form',
      link: 'https://strong-crumble-fde41e.netlify.app/'
    },
    {
      img: rest_countries,
      title: 'REST Countries API with color theme switcher',
      technologies: ['html', 'css', 'js', 'vue', 'Vuetify'],
      description:
        'integrate with the [REST Countries API](https://restcountries.com) to pull country data and display ',
      link: 'https://merry-tanuki-0f14c7.netlify.app/'
    },
    {
      img: melase,
      title: 'mealse search landing page',
      technologies: ['html', 'css', 'js', 'vue', 'api', 'tailwind'],
      description:
        'Our website is a recipe and meal search application built using Vue.js and Vuex. It interacts with a free third-party API and incorporates Tailwind CSS for styling.',
      link: 'https://flourishing-peony-ba006d.netlify.app/'
    },
    {
      img: invoice,
      title: 'invoice app landing page',
      technologies: ['html', 'css', 'js', 'vue', 'api'],
      description:
        'This website is a Vue-based billing system that uses Vuex for state management and integrates with Firebase. It allows users to create, manage, and synchronize invoices in real-time.',
      link: 'https://courageous-boba-8865df.netlify.app/'
    },

    {
      img: Insure,
      imgscrol: Insure_scrol,
      title: 'Insure-landing-page',
      technologies: ['html', 'css'],
      description: 'layout skills with this HTML & CSS only landing page',
      link: 'https://tubular-axolotl-786ac3.netlify.app/'
    },
    {
      img: space_tourism,
      title: 'space-tourism',
      technologies: ['html', 'css'],
      description: 'layout skills with this HTML & CSS only landing page',
      link: 'https://cozy-flan-0cbc10.netlify.app/index.html'
    },

    {
      img: huddle,
      imgscrol: huddle_scrol,
      title: 'Huddle landing page with curved sections',
      technologies: ['html', 'css', 'js'],
      description:
        'Using pseudo-elements for styling extras and the CSS position property for the sections with curved edges.',
      link: 'https://astonishing-brigadeiros-eadeca.netlify.app/'
    },

    {
      img: blogr,
      imgscrol: blogr_scrol,
      title: 'Blogr landing page',
      technologies: ['html', 'css', 'js'],
      description:
        'Flex layout with this landing page challenge. working with HTML & CSS for this project with a tiny bit of JS for the mobile menu.',
      link: 'https://guileless-crepe-bc35e7.netlify.app/'
    },
    {
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
  ],
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
  },
  skill: {
    frontEnd: [
      {
        name: 'html',
        icon: 'fa-brands fa-html5',
        number: '90'
      },
      {
        name: 'css',
        icon: 'fa-brands fa-css3',
        number: '80'
      },
      {
        name: 'JavaScript',
        icon: 'fa-brands fa-node-js',
        number: '80'
      },
      {
        name: 'vue',
        icon: 'fa-brands fa-vuejs',
        number: '75'
      },
      {
        name: 'vuetify',
        img: vuetify,
        number: '75'
      }
    ],
    design: [
      {
        name: 'figma',
        img: figma,
        number: '50'
      },
      {
        name: 'adobe XD',
        img: adobeXd,
        number: '40'
      }
    ],
    tool: [
      {
        name: 'bootstrap',
        icon: 'fa-brands fa-bootstrap',
        number: '50'
      },
      {
        namehid: 'tailwind',
        img: tailwind,
        number: '40'
      },
      {
        name: 'github',
        icon: 'fa-brands fa-github',
        number: '60'
      },
      {
        namehid: 'nodejs',
        img: nodejs,
        number: '70'
      }
    ]
  }
}
