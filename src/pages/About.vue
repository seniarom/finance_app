<template>
    <div>
        About Project
        <button @click="onOpenAuth">Auth</button>
    </div>
</template>
  
<script>
export default {
    name: "About",
    methods: {
        onOpenAuth() {
            this.$modal.show('AuthForm', {
                title: "Форма авторизации"
            })
        }
    }
}
</script>
  
<style scoped>

</style>