<template>
    <button class="buttonone" @click="buttononeclick">点赞{{count}}</button>
</template>
<script>

export default{
    data() {
        return {
            count: 0
        }
    },
    methods: {
        buttononeclick() {
            this.count++
        }
    },
}
</script>
<style scoped>
.buttonone{
    background-color: rgb(172, 151, 151);
}
</style>