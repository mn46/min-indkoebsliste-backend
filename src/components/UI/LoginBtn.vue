<template>
    <!-- <v-btn
    :icon="mdiDoor"
    size="large"
    :to="{path: '/login'}"></v-btn> -->
    <button :class="['button-door', backgroundBtnClass]" :to="{path: '/login'}"></button><p>logud</p>
</template>
<script>
import {mdiDoor} from "@mdi/js";
    export default{
       name: 'LoginBtn', 
        props:{
            backgroundBtnClass:{
                type: String,
                default: '' 
            }
        },
        data(){
            return {
                mdiDoor,
            };
        },

    }

</script>
<style>

.button-door{
  width: 50px;
  height: 50px;
background: bluenpm ;
}
.button-door.login  {

  
    background-image: url('@/assets/login-door.png');
          background-size: contain;
            background-repeat: no-repeat;


}
.button-door.logout{
      background-image: url('@/assets/log-out-door.png');
      background-size: contain;
        background-repeat: no-repeat;


}

</style>