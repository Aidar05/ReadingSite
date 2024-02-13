<template>
  <!-- Про сайт -->
  <div class="main_container" id="about_container">
    <div class="about_subcontainer" id="about">      
      <Attributes/>

      <Description/>

      <Best_writers/>
    </div>
  </div>
</template>

<script>
import "../../assets/css/about/about.css"
import Attributes from "./Attributes.vue";
import Description from "./Description.vue";
import Best_writers from "./Best_writers.vue"

export default {
    name: 'About',
    components: { 
      Attributes, Description, Best_writers
    }
}

</script>