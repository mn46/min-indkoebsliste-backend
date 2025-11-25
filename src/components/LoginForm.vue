<template>
     <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent="login">
      <v-text-field
        v-model="Username"
        :rules="rules"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="UserPassword"
        :rules="rules"
        type = "password"
        label="UserPassword" 
      ></v-text-field>
      <v-btn color="grey" :to="{path:'/register' }">Register</v-btn>
      <login-btn-form class="mt-2"  color="#096123"  type="submit" block></login-btn-form>
 </v-form>
  </v-sheet>
</template>
<script>
import LoginBtnForm from '../components/UI/LoginBtnForm.vue';
import RegisterBtn from '../components/UI/RegisterBtn.vue';
import UsersDataService from '../services/UsersDataService';

export default {
  name: 'LoginForm',
  components: {
    LoginBtnForm,
    RegisterBtn
  },

  data() {
    return {
      Username: '',
      UserPassword: '',
      rules: [
        v => !!v || 'Field is required'
      ],
      RegisterText: 'Register'
    }
    
  },
  methods: {

    login(){
      const data = {
        userName: this.Username,
        userPassword: this.UserPassword
      }
    UsersDataService.signin(data).then((res) => {
      console.log(res)
    })
    
    }
    
  }
}
</script>
