<template>

<the-header-admin/>
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
       <v-text-field
        v-model="RepeatPassword"
        :rules="rules"
        label="UserPassword"
      ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
import {
  mdiFacebook,
  mdiTwitter,
  mdiLinkedin,
  mdiInstagram,
} from "@mdi/js";

import TheHeaderAdmin from '@/components/layout/TheHeaderAdmin.vue';
import LoginBtnForm from '@/components/UI/LoginBtnForm.vue';
export default {
  components: {
    LoginBtnForm,
    TheHeaderAdmin,
  },

  data() {
    return {
      icons: [mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram],
    };
  },
};
</script>