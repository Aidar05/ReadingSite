<template>
  <Header :loggedIn="logged_in" @dropdownElementClick="openModal" />

  <div class="main_container">
    <Banner />
  
    <BrowseCallToAction />

    <Modal v-if="show_modal" @emitBackdropClick="closeModal"/>
  
    <About />
  </div>

  <Footer />
</template>

<script>
import '@/assets/css/global.css';
import "../assets/css/modal.css"
import "../assets/css/banner.css"
import "../assets/css/browse_call_to_action.css"
import Header from '../components/header/Header.vue'
import About from '../components/about_component/About.vue';
import Footer from '../components/Footer.vue';
import Modal from "../components/Modal.vue"
import Banner from '@/components/Banner.vue';
import BrowseCallToAction from '@/components/BrowseCallToAction.vue';

export default {
  name: 'App',
  components: {
    Header, About, Footer, Modal, Banner, BrowseCallToAction
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
