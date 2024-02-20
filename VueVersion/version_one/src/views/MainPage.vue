<template>
  <Header :loggedIn="logged_in" @dropdownElementClick="openModal" />
  
  <div class="center_container">
    <Banner />
  
    <Modal v-if="show_modal" @emitBackdropClick="closeModal"/>
  
    <Catalog />
  </div>
  
  <Footer />
</template>
  
  <script>
  import '@/assets/css/global.css';
  import "../assets/css/modal.css"
  import Header from '../components/header/Header.vue'
  import Banner from '../components/Banner.vue';
  import Modal from "../components/Modal.vue"
  import Catalog from "@/components/Catalog.vue"
  import Footer from '../components/Footer.vue';

  export default {
    name: 'App',
    components: {
      Header, Banner, Footer, Catalog, Modal
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
  