<template>  

   <div :class="['main-layout', backgroundClass]">

   </div>

</template>


<script>
import TheHeaderAdmin from '@/components/layout/TheHeaderAdmin.vue'
import TheFooter from '@/components/layout/TheFooter.vue' 
export default{
    name: 'MainLayout',
    components:{
        TheHeaderAdmin, TheFooter
    },
    props:{
        backgroundClass:{
            type:String,
            default:''
        }
    }
}
</script>
<style >
 *{
    padding:0px;
    margin:0px;
 }
.main-layout{
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
  
  
}
.main-layout.login-bg{
  background-image: url('@/assets/grocerybag-low-opacity-no-blur.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 150%  0%;
}
.main-layout.register-bg{
/* finde et billede eller lign */
    /* background: url('@/assets/grocerybag-high-opacity-with-blur.png') center/cover no-repeat; */
}

</style>
<!-- “Her er min header, footer og baggrund. Der, hvor <slot> står, sætter jeg alt indhold fra den side, der bruger layoutet. -->