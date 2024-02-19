<template>
  <Header :loggedIn="logged_in" @dropdownElementClick="openModal" />

  <Modal v-if="show_modal" @emitBackdropClick="closeModal"/>

  <Intro />

  <About />

  <Footer />
</template>

<script>
import '@/assets/css/global.css';
import "../assets/css/modal.css"
import Header from '../components/header/Header.vue'
import Intro from '../components/Intro.vue';
import About from '../components/about_component/About.vue';
import Footer from '../components/Footer.vue';
import Modal from "../components/Modal.vue"

export default {
  name: 'App',
  components: {
    Header, Intro, About, Footer, Modal
  },
  data() {
    return{
      logged_in: true,
      show_modal: false,
    }
  },
  methods: {
    openModal: function() {
      this.show_modal = true
    },

    closeModal: function() {
      this.show_modal = false
    }
  }
}
</script>
