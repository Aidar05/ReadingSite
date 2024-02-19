<template v-if="dropdown_visible">
  <div class="dropdown_content">
    <DropdownElement :elementName="my_profile" @click="$emit('dropdownElementClick')" />
    
    <DropdownElement :elementName="saved" @click="$emit('dropdownElementClick')"/>
    
    <DropdownElement :elementName="favs" @click="$emit('dropdownElementClick')"/>
    
    <DropdownElement :elementName="settings" @click="$emit('dropdownElementClick')"/>
    
    <DropdownElement :elementName="log_out" @click="$emit('dropdownElementClick')"/>
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
        log_out: "Выйти",

        dropdown_visible: false
      }
    },
    emits: ['dropdownElementClick'],    
}
</script>