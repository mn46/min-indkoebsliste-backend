<template>

<the-header-admin/>
<main>
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
      <v-btn class="mt-2" type="submit" block>{{RegisterText}}</v-btn>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
 </main>
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
export default {
  components: {
    LoginBtn,
    TheHeaderAdmin,
    RegisterBtn,
  },

  data() {
    return {
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
      RegisterText: 'register'
    };
  },
};
</script>