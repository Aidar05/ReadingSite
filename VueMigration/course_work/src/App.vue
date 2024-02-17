<template>
  <Header :loggedIn="logged_in" @dropdownElementClick="openModal"/>

  <Modal v-if="show_modal"/>

  <Intro />

  <About />

  <Footer />
</template>

<script>
import '@/assets/css/global.css';
import Header from './components/header/Header.vue'
import Intro from './components/Intro.vue';
import About from './components/about_component/About.vue';
import Footer from './components/Footer.vue';
import Modal from "./components/Modal.vue"

export default {
  name: 'App',
  components: {
    Header, Intro, About, Footer, Modal
  },
  data() {
    return{
      logged_in: true,
      show_modal: false
    }
  },
  methods: {
    openModal () {
      console.log("openModal")
      this.show_modal = !this.show_modal
    },
  
    toggleModal: function(e) {        
      console.log("toggleModal")

      if (!this.$el.contains(e.target)) {
        this.show_modal = false
      } 
    }
  },
  
  // mounted() {
  //     document.addEventListener('click', this.toggleModal);
  //   },
  // beforeUnmount() {
  //   document.removeEventListener('click', this.toggleModal);
  // }
}
</script>

