<template>
  <Header />
  <Intro/> 
</template>

<script>
import Header from './components/Header.vue';
import Intro from './components/Intro.vue'
import '@/assets/css/global.css';

export default {
  name: 'App',

  components: {
    Header, Intro
  }
}
</script>

