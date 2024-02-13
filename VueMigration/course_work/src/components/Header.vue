<template>
  <div id="header_bg">
    <div class="header" id="header">
      <span class="logo"><a href="index.html">AsDf</a></span>
      
      <div class="elements">
        <a href="#about" class="menu_element">Про сайт</a>
        <a href="#" class="menu_element">Читать</a>
        <a href="#" class="menu_element">Каталог</a>
        <a href="#" class="menu_element">Поиск</a>
        <a href="#footer" class="menu_element">&#8943;</a>
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
    }
  }
}

</script>