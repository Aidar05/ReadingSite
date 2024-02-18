<template>
    <div class="backdrop" @click="$emit('emitBackdrop')">
        <div class="modal_content">
            
        </div>
    </div>
</template>

<script>
import "../../../assets/css/modal.css"

export default {
    name: "Profile",
}

</script>