<template v-if="dropdown_visible">
  <div class="dropdown_content">
    <DropdownElement :elementName="my_profile" @click="openModal" />
    
    <DropdownElement :elementName="saved" @click="openModal"/>
    
    <DropdownElement :elementName="favs" @click="openModal"/>
    
    <DropdownElement :elementName="settings" @click="openModal"/>
    
    <DropdownElement :elementName="log_out" @click="openModal"/>
  </div>

  <Teleport to=".modal_container" v-if="show_modal">
    <Modal />
  </Teleport>
</template>

<script>
import "../../../assets/css/header/dropdown.css"
import DropdownElement from "./DropdownElement.vue"
import Modal from "./Modal.vue"

export default {
    name: 'DropdownMenu',
    components: {
      DropdownElement, Modal
    },
    data () {
      return {
        my_profile: "Мой профиль",
        saved: "Сохраненные",
        favs: "Любимые",
        settings: "Настройки",
        log_out: "Выйти",

        show_modal: false,
        dropdown_visible: false
      }
    },
    emits: ['dropdownElementClick'],
    methods: {
      openModal: function() {
        this.show_modal = !this.show_modal
      },
    
    }
    
}
</script>