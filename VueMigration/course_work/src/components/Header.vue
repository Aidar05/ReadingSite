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
export default {
  name: 'Header',
  data() {
    return {
      logged_in: false
    }
  }
}

</script>

<style>
  /* Menu */
  #header_bg{
    width: 100vw;
    height: 60px;
    background-color: var(--container_bg_color);
    border-bottom: solid 1px var(--accent_color);
  }

  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 58vw;
    height: 60px;
    margin: auto;
    border-bottom: solid 1px var(--accent_color)
  }

  .elements{
    display: flex;
    gap: 25px;	
  }

  .logo{
    color: var(--text_color);
    font-size: var(--text_size_header);
  }


  .elements a{
    text-decoration: none; 
    color: var(--text_color);
    text-transform: uppercase;
    font-size: var(--menu_text_size);
  }

  .reg a{
    text-decoration: none;
    color: inherit
  }

  .reg_button{
    color: var(--text_color);
    background: transparent;
    border: none;
    text-transform: uppercase;
    font-size: var(--text_size_small);
  }


  #login_btn{
    text-align: center;
    background-color: var(--call_to_action_color);
    color: var(--call_to_action_textColor);
    height: 30px;
    width: 120px;
    margin-left: 15px;
  }

  .menu_element:hover,
  .reg_button:hover {
    color: var(--accent_color)
  }

  .profile{
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: var(--accent_color);
  }
</style>