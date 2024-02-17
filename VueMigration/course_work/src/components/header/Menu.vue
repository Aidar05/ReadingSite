<template>
    <div class="elements">
      <a link="#" class="menu_element">Читать</a>
      <a link="#" class="menu_element">Про сайт</a>
      <a link="#footer" class="menu_element">&#8943;</a>
    </div>
</template>

<script>
import "../../assets/css/header/header.css"

export default {
    name: 'Header',
    data() {
        return {
            logged_in: true
        };
    },
}

</script>