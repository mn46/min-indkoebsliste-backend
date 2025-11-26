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

      <v-btn color="grey" class="mt-2" :to="{path:'/register' }">Register</v-btn>
      <login-btn-form class="mt-2"   color="#096123"  :loading="loading" type="submit" block></login-btn-form>
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
      loading: false,
      Username: '',
      UserPassword: '',
      rules: [
        v => !!v || 'Field is required'
      ],
      RegisterText: 'Register'
    }
    
  },
  methods: {
login() {
  this.loading = true;
  const data = {
    userName: this.Username,
    userPassword: this.UserPassword
  };

  UsersDataService.signin(data)
    .then(res => {
      console.log("Login respons:", res.data);

      const id = res.data.userId; 
      if (!id) {
          this.loading = false;

        console.error("Backend returnerer ikke id!");
        return;
      }

      this.$router.push(`/users/${id}`);
                this.loading = false;

    })
    .catch(err => {
      console.error(err);
      alert('bruger findes ikke')
    });
    
  }
}}
</script>
