<template>



<template/>

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