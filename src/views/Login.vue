<template>

<AdminMain backgroundClass="login-bg">
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
  
      <v-btn class="mt-2"  color="#096123"  type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
 </AdminMain>
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

export default {
  components: {
    LoginBtn,
    TheHeaderAdmin,
    RegisterBtn,
    AdminMain,
    RegisterBtn
  },

  data() {
    return {
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
      RegisterText: 'register'
    };
  },
};
</script>