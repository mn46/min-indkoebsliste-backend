<template>
    <v-btn
    :icon="mdiDoor"
    size="large"
    :to="{path: '/login'}"></v-btn>
</template>
<script>
import {mdiDoor} from "@mdi/js";
    export default{
        data(){
            return {
                mdiDoor,
            };
        },

    }

</script>
