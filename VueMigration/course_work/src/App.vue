<template>
  <Header />

  <Intro />

  <About />

  <Footer />
</template>

<script>
import '@/assets/css/global.css';
import Header from './components/Header.vue'
import Intro from './components/Intro.vue';
import About from './components/about_component/About.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header, Intro, About, Footer
  } 
}
</script>

