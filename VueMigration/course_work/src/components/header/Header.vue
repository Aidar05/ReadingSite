<template>
  <div id="header_bg">
    <div class="header" id="header">
      <div class="left_header_container">
        <span class="logo"><a href="index.html">AsDf</a></span>
        
        <Menu />
      </div>

      <div class="reg" v-if="!loggedIn">
        <button class="reg_button"><a href="..\html\registration.html">Регистрация</a></button>
        <button class="reg_button" id="login_btn"><a href="..\html\sign_in.html">Войти</a></button>
      </div>
      
      <div class="profile" v-else>
        <img src="../../assets/imgs/MoL.jpg" id="profile_img" alt="resourse not found" >
        
        <div class="username_container">
          <span class="username">Bizarre_sorserer</span>

          <i class="fas angle_down"></i>
        </div>
      </div>

    </div>        
  </div>
</template>

<script>
import "../../assets/css/header.css"
import Menu from "./Menu.vue"

export default {
    name: 'Header',
    components: {
      Menu
    }, 
    props: ['loggedIn']
}

</script>