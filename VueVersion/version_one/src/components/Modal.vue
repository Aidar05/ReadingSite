<template>
    <div class="backdrop" @click="$emit('emitBackdropClick')">
        <div class="modal_content" @click.stop>
            
        </div>
    </div>
</template>

<script>
import "../assets/css/modal.css"

export default {
    name: "Profile",
    emits: ['emitBackdropClick']
}

</script>