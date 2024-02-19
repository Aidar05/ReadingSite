<template>
  <AboutSite />
</template>

<script>
import '@/assets/css/global.css';
import AboutSite from "@/views/AboutSite.vue"

export default {
  name: 'App',
  components: {
    AboutSite
  },
  data() {
    return{
      logged_in: true,
      show_modal: false,
    }
  }
}
</script>

