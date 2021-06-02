<template>
    <button class="buttonone" @click="buttononeclick">按钮1</button>
</template>
<script>

export default{
    methods: {
        buttonOneclick() {
            console,log("123")
        }
    },
}
</script>
<style scoped>
.buttonone{
    background-color: rgb(172, 151, 151);
}
</style>