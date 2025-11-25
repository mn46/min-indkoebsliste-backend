<template>
<header>   
    <p>{{adminHeaderText}}</p>
     <h1>{{adminHeaderTitle}}</h1>


</header>
</template>
<script>
import { mdiWeatherMoonsetDown } from '@mdi/js'
export default{
  name: 'TheHeaderAdmin',
    data(){
        return{
adminHeaderText: 'Personale',
adminHeaderTitle:'Login',
        }
    }
    
}


</script>
<style scoped >
header{
    height: 200px;
    background:  #DD2F2F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color:white;
    width: 100vw;
    border-bottom-left-radius: 58px;
    border-bottom-right-radius: 58px;
    
      box-shadow: inset 8px -40px 15px rgba(0, 0, 0, 0.25);
/*box-shadow fra chat-gpt
 inset → skyggen er indre, ikke ydre

8px → ingen vandret forskydning

-40px → skyggen ligger i bunden og kaster opad

15px → blur

rgba(0,0,0,0.25) → en blød mørk skygge på 25% opacitet */
}
</style>