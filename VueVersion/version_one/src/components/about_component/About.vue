<template>
  <!-- Про сайт -->
    <Attributes/>

    <Description/>
</template>

<script>
import "../../assets/css/about/about.css"
import Attributes from "./Attributes.vue";
import Description from "./Description.vue";

export default {
    name: 'About',
    components: { 
      Attributes, Description
    }
}

</script>