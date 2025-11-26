<template>
  <v-app>
    <TheHeaderAdmin/>
      <main class="main-layout login-bg">
            <h1> {{ this.userName }}</h1>

</main>
    <TheFooter/>
  </v-app>
</template>

<script>
import TheHeaderAdmin from "../components/layout/TheHeaderAdmin.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import UsersDataService from "@/services/UsersDataService";

export default {
  components: {
    TheHeaderAdmin,
    TheFooter
  },

  data() {
    return {
      userName: "",
      userId: null
    };
  },

mounted() {
  this.userId = this.$route.params.id; // ID fra URL
  if (this.userId) {
    this.getUser(this.userId);
  }
},

methods: {
  getUser(id) {
    UsersDataService.getUser(id)
      .then(res => {
        this.userName = res.data.userName; // vis navnet
      })
      .catch(err => console.error(err));
  }
}

};
</script>
