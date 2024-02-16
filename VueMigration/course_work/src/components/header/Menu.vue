<template>
    <div class="elements">
      <router-link to="#" class="menu_element">Читать</router-link>
      <router-link to="#" class="menu_element">Про сайт</router-link>
      <router-link to="#footer" class="menu_element">&#8943;</router-link>
    </div>
    <router-view></router-view>
</template>

<script>
import "../../assets/css/header.css"

export default {
    name: 'Header',
    data() {
        return {
            logged_in: true
        };
    },
}

</script>