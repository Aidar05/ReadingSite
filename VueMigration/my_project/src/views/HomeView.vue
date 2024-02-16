<template>
  <Intro />

  <Footer />
</template>

<script>
// @ is an alias to /src
import "../assets/css/main_page/intro.css"
import Intro from '@/components/Intro.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Intro, Footer
  }
}
</script>
