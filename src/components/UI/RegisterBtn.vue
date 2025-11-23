<template>
    <v-btn class="register"
    :to="{path: '/register'}">register</v-btn>
</template>
<script>
    export default{
        name: "RegisterBtn",
        data(){
            return {
                mdiDoor,
            };
        },

    }

</script>
<style scoped>
.register{
    background-color: gray;
}
</style>