<template>
  <div class="dropdown_content">
    <DropdownElement :elementName="my_profile"/>
    
    <DropdownElement :elementName="saved"/>
    
    <DropdownElement :elementName="favs"/>
    
    <DropdownElement :elementName="settings"/>
    
    <DropdownElement :elementName="log_out"/>
      </div>
</template>

<script>
import "../../../assets/css/header/dropdown.css"
import DropdownElement from "./DropdownElement.vue"

export default {
    name: 'DropdownMenu',
    components: {
      DropdownElement
    },
    data () {
      return {
        my_profile: "Мой профиль",
        saved: "Сохраненные",
        favs: "Любимые",
        settings: "Настройки",
        log_out: "Выйти"
      }
    }
    
}
</script>