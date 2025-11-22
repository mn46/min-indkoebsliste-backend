<template>
    <v-btn class="register"
    :to="{path: '/register'}"></v-btn>
</template>
<script>
import {mdiDoor} from "@mdi/js";
    export default{
        name: register,
        data(){
            return {
                mdiDoor,
            };
        },

    }

</script>
<style scoped>
.register{
    background: gray;
}
</style>