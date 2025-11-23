<template>
   <div :class="['main-layout', backgroundClass]">
    <TheHeaderAdmin/> 
    <main>
<slot/>

    </main>  
      <TheFooter/>

</template>


<script>
import TheHeaderAdmin from '@/components/layout/TheHeaderAdmin.vue';
import TheFooter from '@/components/layout/FooterAdmin.vue';
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
.main-layout.login-bg{
    
}

</style>
<!-- “Her er min header, footer og baggrund. Der, hvor <slot> står, sætter jeg alt indhold fra den side, der bruger layoutet. -->