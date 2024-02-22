<template>
  <Header />

  <Landing v-if="false"/>

  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Header from "../components/Header.vue"
import Landing from "../components/Landing.vue"

export default {
  name: 'MainView',
  components: {
    Header, Landing, Footer
  }
}
</script>

<style>
@import url("../assets/css/global.css");
@import url("../assets/css/header.css");
@import url("../assets/css/footer.css");


</style>
