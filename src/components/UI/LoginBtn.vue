<template>
    <!-- <v-btn
    :icon="mdiDoor"
    size="large"
    :to="{path: '/login'}"></v-btn> -->
<div class="d-flex align-center flex-column justify-end ">
           <button :class="['button-door', backgroundBtnClass]" :to="{path: '/login'}"></button>
    <p>Admin Login</p> 
    </div>
    
</template>
<script>
import {mdiDoor} from "@mdi/js";
    export default{
       name: 'LoginBtn', 
        props:{
            Loginis:{
                type: Boolean,
                default: false
            },
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
  width: 32px;
  height: 32px;
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

<!--
-CHAT-GPT DIREKTE KOPIERET
"det her er vue 3 kan du gøre sådan at det er flex directioun column?"": 
 "d-flex ga-3
 | Klasse        | Effekt                 |
| ------------- | ---------------------- |
| `d-flex`      | display: flex          |
| `flex-column` | flex-direction: column |
| `ga-3`        | gap: var(--v-space-3)  |

 
 -->