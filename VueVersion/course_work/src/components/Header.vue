<template>
  <div class="main_container" id="header_container">
    <div class="main_sub_container" id="header_sub_container">
      <div class="sided_header_subcontainer" id="left_header_subcontainer">
        <div class="logo" id="header_logo">LOGO</div>
  
        <div id="menu">
          <router-link to="/" class="menu_element">Сохраненные</router-link>
          <router-link to="/" class="menu_element">Любимые</router-link>
          <router-link to="/sign-up" class="menu_element">...</router-link>
        </div>
        <router-view />
      </div>

      <div class="sided_header_subcontainer">
        <button class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-label="auto" aria-live="polite">
          <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <mask class="moon" id="moon-mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
            <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g class="sun-beams" stroke="currentColor">
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
          </svg>
        </button> 

        <div id="divider"></div>

        <button id="reg_button" v-if="!loggedIn">
          <a href="..\html\registration.html">Регистрация</a>
        </button>
        
        <div id="profile_container" v-else @click="toggleDropdownMenu">
          <img src="../assets/imgs/MoL.jpg" id="profile_img" alt="resourse not found" >
          
          <span class="username">Bizarre_sorserer</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import router from '@/router';


export default {
    name: 'Header',
    data() {
        return {
            loggedIn: true
        };
    },
    components: { router }
}

</script>

<style>
@import url("../assets/css/header.css");
</style>