<template>
  <MainPage v-if="false" />

  <AboutSite v-if="true"/>
</template>

<script>
import '@/assets/css/global.css';
import AboutSite from "@/views/AboutSite.vue"
import MainPage from "@/views/MainPage.vue"

export default {
  name: 'App',
  components: {
    AboutSite, MainPage
  },
  data() {
    return{
      logged_in: true,
      show_modal: false,
    }
  }
}
</script>

