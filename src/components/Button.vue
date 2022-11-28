<template>
    <button @click="$emit('onClick')" type="button" class="btn" :class="{ 'btn-primary': !settings['bgcolor']}"
        :style="{ background: settings['bgcolor']}">
        {{ settings.text.toUpperCase() }}+</button>
</template>
  
<script>
export default {
    name: "Button",
    props: {
        settings: {
            type: Object,
        }
    },
}
</script>
  

<style scoped lang="scss">
.btn {
    background: turquoise;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    color: white;
    border: 0px;
    margin: 20px;


    &:hover {
        cursor: pointer;
        background: palevioletred;
    }

    &:disabled {
        cursor: default;
    }
}
</style>