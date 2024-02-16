<template>
  <div id="header_bg">
    <div class="header" id="header">
      <div class="left_header_container">
        <span class="logo"><a href="index.html">AsDf</a></span>
        
        <div class="elements">
          <router-link to="#" class="menu_element">Писать</router-link>
          <router-link to="/Catalog" class="menu_element">Каталог</router-link>
          <router-link to="#" class="menu_element">Поиск</router-link>
          <router-link to="#" class="menu_element">Про сайт</router-link>
          <router-link to="#footer" class="menu_element">&#8943;</router-link>
        </div>
        <router-view></router-view>
      </div>

      <div class="reg" v-if="!logged_in">
        <button class="reg_button"><a href="..\html\registration.html">Регистрация</a></button>
        <button class="reg_button" id="login_btn"><a href="..\html\sign_in.html">Войти</a></button>
      </div>
      <div class="profile" v-else></div>

    </div>        
  </div>
</template>

<script>
import "../assets/css/header.css"

export default {
    name: 'Header',
    data() {
        return {
            logged_in: false
        };
    },
}

</script>