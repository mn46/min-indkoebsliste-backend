<template>
     <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="Username"
        :rules="rules"
        label="Username"
      ></v-text-field>
      <v-text-field
        v-model="UserPassword"
        :rules="rules"
        label="UserPassword"
      ></v-text-field>
      <v-btn class="mt-2"  color="grey" type="submit" block>{{RegisterText}}</v-btn>
  
      <login-btn-form class="mt-2"  color="#096123"  type="submit" block></login-btn-form>
      <!-- <register-btn></register-btn> -->
    </v-form>
  </v-sheet>
</template>
<script>
import LoginBtnForm from '../components/UI/LoginBtnForm.vue'

export default {
  name: 'LoginForm',
  components: {
    LoginBtnForm,
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
  }
}
</script>
