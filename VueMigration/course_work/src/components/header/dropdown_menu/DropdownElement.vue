<template>
  <div class="dropdown_element">
    <i class="fas dropdown_icon"></i>
    
    <span class="dropdown_text"> {{ elementName }} </span>
  </div>
</template>

<script>
export default{
  name: "DropdownElement",
  props: ['elementName'], 
}

</script>