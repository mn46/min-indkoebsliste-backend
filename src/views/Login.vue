<template> 
<TheHeaderAdmin/>
  <main class="main-layout login-bg">


  <LoginForm/>

</main>
    <TheFooter/>



</template>

<script setup>
  import { ref } from 'vue'

  const Username = ref('')
  const UserPassword = ref('')

  const rules = [
    value => {
      if (value) return true
      return 'You must enter a first name.'
    },
  ]
</script>

<script>
import {
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
} from "@mdi/js";
import LoginBtn from "@/components/UI/LoginBtn.vue";
import TheHeaderAdmin from '@/components/layout/TheHeaderAdmin.vue';
import RegisterBtn from "@/components/UI/RegisterBtn.vue";
import AdminMain from "@/components/layout/AdminMain.vue";
import LoginBtnForm from '../components/UI/LoginBtnForm.vue'
import TheFooter from   '../components/layout/TheFooter.vue'
// import RegisterBtn from '../components/UI/RegisterBtn.vue'
import LoginForm from '../components/LoginForm.vue';

export default {

  components: {
    LoginBtn,
    TheHeaderAdmin,
    RegisterBtn,
    AdminMain,
    LoginBtnForm,
    TheFooter,
    LoginForm,
  },

  data() {
    return {
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
      RegisterText: 'register'
    };
  },
};
</script>
<style>
.main-layout{ 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding-top: 10vh;
  padding-bottom: 10vh;
   background-image: url('@/assets/grocerybag-low-opacity-no-blur.png');
    background-repeat: no-repeat;
  background-position: 150%  0%;

  }


.main-layout.login-bg{
  background-image: url('@/assets/grocerybag-low-opacity-no-blur.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 150%  0%;
}

</style>


